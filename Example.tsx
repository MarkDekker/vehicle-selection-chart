import React, { useMemo, useState, useCallback, useRef } from "react";
import { Group } from "@visx/group";
import { Circle, Line } from "@visx/shape";
import { LinearGradient } from "@visx/gradient";
import { Text } from "@visx/text";
import { scaleLinear, scaleTime } from "@visx/scale";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { GridRows, GridColumns } from "@visx/grid";
import { withTooltip, Tooltip, defaultStyles } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { voronoi } from "@visx/voronoi";
import { localPoint } from "@visx/event";
import format from "./formattingFunctions";

import { ListingSummary, listings } from "./mock_data";
import theme from "./theme";

interface keyValuePair {
  key: string;
  value: any;
}

const glyphSizes = { min: 3, max: 15 };

const date = (d: string) => new Date(Date.parse(d)).valueOf();

// --------------------

let tooltipTimeout: number;

const defaultMargin = { top: 30, right: 30, bottom: 50, left: 110 };

export type DotsProps = {
  width: number;
  height: number;
  showControls?: true;
  margin?: { top: number; right: number; bottom: number; left: number };
};

export default withTooltip<DotsProps, ListingSummary>(
  ({
    width,
    height,
    showControls = true,
    margin = defaultMargin,
    hideTooltip,
    showTooltip,
    tooltipOpen,
    tooltipData
  }: DotsProps & WithTooltipProvidedProps<ListingSummary>) => {
    if (width < 10) return null;

    const [showMileage, setShowMileage] = useState(true);
    let xCategory = showMileage ? "Mileage" : "Registration";
    let yCategory = "Price";
    let highlight = { TopPrice: true };

    const x = useCallback(
      (d) => (xCategory === "Mileage" ? d[xCategory] : date(d[xCategory])),
      [xCategory]
    );
    const y = useCallback((d) => d[yCategory], [yCategory]);

    const glyphSize = (d: ListingSummary) =>
      Math.min(
        Math.max(glyphSizes.min, d.EquipmentCount * 0.5),
        glyphSizes.max
      );

    const setGlyphColor = (
      d: ListingSummary,
      highlightValues?: keyValuePair
    ) => {
      if (tooltipData === d) return theme.colors.chart.interactive;
      if (highlightValues && d[highlightValues.key] === highlightValues.value) {
        return theme.colors.chart.highlight;
      }
      return theme.colors.chart.base;
    };

    const points = listings;
    const svgRef = useRef<SVGSVGElement>(null);

    // Bounds and Scale
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    const yRange = {
      min: Math.min(...listings.map((x) => x[yCategory])),
      max: Math.max(...listings.map((x) => x[yCategory]))
    };

    const xRange = {
      Mileage: {
        min: Math.min(...listings.map((x: ListingSummary) => x.Mileage)),
        max: Math.max(...listings.map((x: ListingSummary) => x.Mileage))
      },
      Registration: {
        min: Math.min(
          ...listings.map((x: ListingSummary) =>
            date(x.Registration.toString())
          )
        ),
        max: Math.max(
          ...listings.map((x: ListingSummary) =>
            date(x.Registration.toString())
          )
        )
      }
    };

    const xScale = useMemo(
      () =>
        xCategory === "Mileage"
          ? scaleLinear<number>({
              domain: [xRange[xCategory].min, xRange[xCategory].max],
              range: [0, xMax],
              clamp: true
            })
          : scaleTime<number>({
              domain: [xRange[xCategory].min, xRange[xCategory].max],
              range: [0, xMax],
              clamp: true
            }),
      [xCategory, xMax]
    );
    const yScale = useMemo(
      () =>
        scaleLinear<number>({
          domain: [yRange.min, yRange.max],
          range: [yMax, 0],
          clamp: true
        }),
      [yMax]
    );

    const voronoiLayout = useMemo(
      () =>
        voronoi<ListingSummary>({
          x: (d) => xScale(x(d)) + margin.left ?? 0,
          y: (d) => yScale(y(d)) + margin.top ?? 0,
          width,
          height
        })(points),
      [width, height, xScale, yScale, points, x, y, margin]
    );

    // event handlers
    const handleMouseMove = useCallback(
      (event: React.MouseEvent | React.TouchEvent) => {
        if (tooltipTimeout) clearTimeout(tooltipTimeout);
        if (!svgRef.current) return;

        // find the nearest polygon to the current mouse position
        const point = localPoint(svgRef.current, event);
        if (!point) return;
        const neighborRadius = 10;
        const closest = voronoiLayout.find(point.x, point.y, neighborRadius);
        if (closest) {
          showTooltip({
            tooltipLeft: xScale(x(closest.data)),
            tooltipTop: yScale(y(closest.data)),
            tooltipData: closest.data
          });
        } else {
          showTooltip({
            tooltipLeft: 0,
            tooltipTop: 0,
            tooltipData: undefined
          });
        }
      },
      [xScale, yScale, showTooltip, voronoiLayout, x, y]
    );

    const handleMouseLeave = useCallback(() => {
      tooltipTimeout = window.setTimeout(() => {
        hideTooltip();
      }, 300);
    }, [hideTooltip]);

    return (
      <div>
        <svg
          width={width}
          height={height}
          ref={svgRef}
          style={{ cursor: tooltipOpen && tooltipData ? "pointer" : "default" }}
        >
          <LinearGradient
            from={theme.background[0]}
            to={theme.background[1]}
            id="dots-pink"
          />
          ;{/** capture all mouse events with a rect */}
          <rect
            width={width}
            height={height}
            rx={4}
            fill="url(#dots-pink)"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseLeave}
          />
          <Group pointerEvents="none" left={margin.left} top={margin.top}>
            <AxisLeft
              scale={yScale}
              hideAxisLine={true}
              tickFormat={format.currency}
              tickLabelProps={() => ({
                fill: theme.text.color.base,
                fontSize: 14,
                textAnchor: "end",
                verticalAnchor: "middle"
              })}
              tickLength={0}
              numTicks={5}
            />
            <AxisBottom
              top={yMax}
              scale={xScale}
              hideAxisLine={true}
              tickLength={0}
              stroke={theme.text.color.base}
              numTicks={5}
              tickLabelProps={() => ({
                fill: theme.text.color.base,
                fontSize: 14,
                textAnchor: "middle",
                verticalAnchor: "middle"
              })}
              // tickFormat={xCategory ? format.date : format.mileage}
            />
            <GridRows
              scale={yScale}
              numTicks={5}
              width={xMax}
              height={yMax}
              stroke={theme.gridLines.color}
              opacity={theme.gridLines.opacity}
            />
            <GridColumns
              scale={xScale}
              width={xMax}
              numTicks={5}
              height={yMax}
              stroke={theme.gridLines.color}
              opacity={theme.gridLines.opacity}
            />
            <Group pointerEvents="none" left={40} top={50}>
              <Text
                x={0}
                y={-50}
                fill={theme.colors.accent}
                width={80}
                fontSize={12}
                verticalAnchor="start"
                textAnchor="middle"
              >
                Equipment
              </Text>

              <Group left={0} top={-glyphSizes.min}>
                <Circle
                  key={`small-legendGlyph`}
                  className="legend-dot"
                  cx={0}
                  cy={0}
                  r={glyphSizes.min}
                  fill={"rgba(0,0,0,0)"}
                  stroke={theme.colors.accent}
                />
                <Text
                  x={70}
                  y={0}
                  fill={theme.colors.accent}
                  width={80}
                  fontSize={10}
                  verticalAnchor={"middle"}
                  textAnchor="middle"
                >
                  {"< 10 Items"}
                </Text>
                <Line
                  from={{ x: 40, y: 0 }}
                  to={{ x: glyphSizes.min, y: 0 }}
                  stroke={theme.colors.accent}
                />
              </Group>

              <Group left={0} top={-glyphSizes.max}>
                <Circle
                  key={`large-legendGlyph`}
                  className="legend-dot"
                  cx={0}
                  cy={0}
                  r={glyphSizes.max}
                  fill={"rgba(0,0,0,0)"}
                  stroke={theme.colors.accent}
                />

                <Text
                  x={70}
                  y={0}
                  fill={theme.colors.accent}
                  width={80}
                  fontSize={10}
                  verticalAnchor={"middle"}
                  textAnchor="middle"
                >
                  {"> 40 Items"}
                </Text>
                <Line
                  from={{ x: 40, y: 0 }}
                  to={{ x: glyphSizes.max, y: 0 }}
                  stroke={theme.colors.accent}
                />
              </Group>
            </Group>

            {points.map((point, i) => (
              <Circle
                key={`point-${point[0]}-${i}`}
                className="dot"
                cx={xScale(x(point))}
                cy={yScale(y(point))}
                r={glyphSize(point)}
                fill={setGlyphColor(point)}
                opacity={tooltipData === point ? 1 : 0.4}
              />
            ))}
          </Group>
        </svg>
        {tooltipOpen && tooltipData && (
          <Tooltip
            left={width - margin.left + margin.right - 300}
            top={margin.bottom - margin.top + 10}
            style={{
              ...defaultStyles,
              width: 300,
              backgroundColor: "rgba(20, 20, 20, 0.6)",
              color: theme.text.color.base,
              padding: "10px 10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: 16, marginBottom: 16 }}>
              {tooltipData.Make}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <div style={{ flexGrow: 1, textAlign: "center" }}>
                {format.currency(tooltipData.Price)}
              </div>
              <div style={{ flexGrow: 1, textAlign: "center" }}>
                {format.mileage(tooltipData.Mileage)}
              </div>
              <div style={{ flexGrow: 1, textAlign: "center" }}>
                {format.date(date(tooltipData.Registration.toString()))}
              </div>
            </div>
            <div
              style={{
                fontSize: 8,
                marginTop: 12,
                color: theme.colors.accent
              }}
            >
              {"Click to see the Listing."}
            </div>
          </Tooltip>
        )}
        {showControls && (
          <div>
            <div>
              <label style={{ fontSize: 12, marginRight: 30 }}>
                <input
                  type="checkbox"
                  checked={showMileage}
                  onChange={() => setShowMileage(!showMileage)}
                />
                &nbsp;Show mileage
              </label>
            </div>
            <div>
              <div>Highlight Data</div>
              <label style={{ fontSize: 12, marginRight: 30 }}>
                <input
                  type="checkbox"
                  checked={highlight.TopPrice}
                  onChange={() => setHighlightData(highlight)}
                />
                &nbsp;Top Price
              </label>
              <label style={{ fontSize: 12, marginRight: 30 }}>
                <input
                  type="checkbox"
                  checked={highlight.TopPrice}
                  onChange={() => setHighlightData(highlight)}
                />
                &nbsp;Top Price
              </label>
            </div>
          </div>
        )}
      </div>
    );
  }
);
