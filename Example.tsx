import React, { useMemo, useState, useCallback, useRef } from "react";
import { Group } from "@visx/group";
import { Circle } from "@visx/shape";
import { LinearGradient } from "@visx/gradient";
import { scaleLinear, scaleTime } from "@visx/scale";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { GridRows, GridColumns } from "@visx/grid";
import { withTooltip, Tooltip, defaultStyles } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { voronoi } from "@visx/voronoi";
import { localPoint } from "@visx/event";
import format from "./formattingFunctions";

import mockData from "./mock_data";
import theme from "./theme";

const date = (d) => new Date(Date.parse(d)).valueOf();

const yRange = {
  min: Math.min(...mockData.map((x) => x.Price)),
  max: Math.max(...mockData.map((x) => x.Price))
};

const xRange = {
  Mileage: {
    min: Math.min(...mockData.map((x) => x.Mileage)),
    max: Math.max(...mockData.map((x) => x.Mileage))
  },
  Registration: {
    min: Math.min(...mockData.map((x) => date(x.Registration))),
    max: Math.max(...mockData.map((x) => date(x.Registration)))
  }
};

// --------------------

let tooltipTimeout: number;

const defaultMargin = { top: 30, right: 30, bottom: 50, left: 110 };

export type DotsProps = {
  width: number;
  height: number;
  showControls?: true;
  margin?: { top: number; right: number; bottom: number; left: number };
};

export default withTooltip<DotsProps, PointsRange>(
  ({
    width,
    height,
    showControls = true,
    margin = defaultMargin,
    hideTooltip,
    showTooltip,
    tooltipOpen,
    tooltipData,
    tooltipLeft,
    tooltipTop
  }: DotsProps & WithTooltipProvidedProps<PointsRange>) => {
    if (width < 10) return null;

    const [showMileage, setShowMileage] = useState(true);
    let xCategory = showMileage ? "Mileage" : "Registration";
    let yCategory = "Price";
    let colorCategory = "Price Label";

    const x = useCallback(
      (d) => (xCategory === "Mileage" ? d[xCategory] : date(d[xCategory])),
      [xCategory]
    );
    const y = useCallback((d) => d[yCategory], [yCategory]);

    const glyphSize = (d) =>
      Math.min(Math.max(1, d["Equipment Count"] * 0.3), 20);

    const setGlyphColor = (d) => {
      if (tooltipData === d) return theme.colors.scheme[0];
      if (
        theme.colors.hasOwnProperty(colorCategory) &&
        theme.colors[colorCategory].hasOwnProperty(d[colorCategory])
      ) {
        return theme.colors[colorCategory][d[colorCategory]];
      }
      return theme.colors.scheme[1];
    };

    // bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    const points = mockData;
    const svgRef = useRef<SVGSVGElement>(null);
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
        voronoi<PointsRange>({
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
        const neighborRadius = 100;
        const closest = voronoiLayout.find(point.x, point.y, neighborRadius);
        if (closest) {
          showTooltip({
            tooltipLeft: xScale(x(closest.data)),
            tooltipTop: yScale(y(closest.data)),
            tooltipData: closest.data
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

    // console.log(getTicks(xScale, 5))

    return (
      <div>
        <svg width={width} height={height} ref={svgRef}>
          <LinearGradient
            from={theme.background[0]}
            to={theme.background[1]}
            id="dots-pink"
          />
          ;{/** capture all mouse events with a rect */}
          <rect
            width={width}
            height={height}
            rx={14}
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
                fontFamily: "sans-serif",
                textAnchor: "end",
                verticalAnchor: "middle"
              })}
              tickStroke={"rgba(0,0,0,0)"}
              numTicks={5}
            />
            <AxisBottom
              top={yMax}
              scale={xScale}
              hideAxisLine={true}
              tickStroke={"rgba(0,0,0,0)"}
              stroke={theme.text.color.base}
              numTicks={5}
              tickLabelProps={() => ({
                fill: theme.text.color.base,
                fontSize: 14,
                fontFamily: "sans-serif",
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
            <div>
              <span>{format.mileage(tooltipData.Mileage)}</span>
              {"   |   "}
              <span>{format.currency(tooltipData.Price)}</span>
              {"   |   "}
              <span>{format.date(date(tooltipData.Registration))}</span>
            </div>
          </Tooltip>
        )}
        {showControls && (
          <div>
            <label style={{ fontSize: 12 }}>
              <input
                type="checkbox"
                checked={showMileage}
                onChange={() => setShowMileage(!showMileage)}
              />
              &nbsp;Show mileage
            </label>
          </div>
        )}
      </div>
    );
  }
);
