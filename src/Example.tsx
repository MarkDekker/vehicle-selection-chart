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

import {
  ListingSummary,
  listings,
  listingDescriptors
} from "./mockData/powerSearch";
import theme from "./theme";

import mappingMake from "./mappings/mappingMake";
import mappingModel from "./mappings/mappingModel";
import { peMappings, peIcons } from "./mappings/mappingPriceEvaluation";
import mappingBodyType from "./mappings/mappingBodyType";
import availableImages from "./mappings/availableImages";

// --- Constants
const GOOD_OFFER = 1;
const SELECTED_MAKE = 57;
const MILEAGE_KEY = "mileage";
const PRICE_KEY = "price";
const POWER_KEY = "power";
const MAKE_KEY = "make";
const MODEL_KEY = "model";
const BODY_TYPE_KEY = "bodyTypeID";
const PRICE_EVALUATION_KEY = "peCategory";
const REGISTRATION_KEY = "registrationDate";

// --- Chart Types

export type ChartProps = {
  width: number;
  height: number;
  showControls?: true;
  margin?: { top: number; right: number; bottom: number; left: number };
};

let tooltipTimeout: number;

// --- Utility Functions ------------

const processAS24Date = (d: string | number | undefined) => {
  if (d) {
    let ds = d.toString();
    ds = `${ds.slice(0, 4)}-${ds.slice(4, 6)}-${ds.slice(6, 8)}`;
    const dateValue = new Date(Date.parse(ds)).valueOf();
    return dateValue;
  }
  return Date.now().valueOf();
};

const comparison = (operation?: string) => {
  switch (operation) {
    case "larger":
      return (
        value: string | number | undefined,
        targetValue: string | number
      ) => (value ? value > targetValue : false);
    case "smaller":
      return (
        value: string | number | undefined,
        targetValue: string | number
      ) => (value ? value < targetValue : false);
    default:
      return (
        value: string | number | undefined,
        targetValue: string | number
      ) => value === targetValue;
  }
};

const getLabel = (id: string | number, idType: string) => {
  const idStr = id.toString();
  let mappingTable = {};
  switch (idType) {
    case MAKE_KEY:
      mappingTable = mappingMake;
      break;
    case MODEL_KEY:
      mappingTable = mappingModel;
      break;
    case PRICE_EVALUATION_KEY:
      mappingTable = peMappings;
      break;
    case BODY_TYPE_KEY:
      mappingTable = mappingBodyType;
      break;
    default:
      return "";
  }
  return mappingTable.hasOwnProperty(idStr) ? mappingTable[idStr] : "";
};

const getLogo = (id: string | number) => {
  const idStr = id.toString();
  if (availableImages.hasOwnProperty(idStr)) {
    const fileFormat = availableImages[idStr];
    return `./logos/brand_${idStr}.${fileFormat}`;
  }
  return `./logos/placeholder.png`;
};

// --- Chart Design -----------------

const glyphSizes = { min: 3, max: 15 };
const defaultMargin = { top: 30, right: 50, bottom: 50, left: 110 };

// --- Constant Chart Values --------

const yRange = {
  min: Math.min(...listings.map((d) => d.price)),
  max: Math.max(...listings.map((d) => d.price))
};

const xRange = {
  mileage: {
    min: Math.min(...listings.map((d) => d.mileage)),
    max: Math.max(...listings.map((d) => d.mileage))
  },
  registrationDate: {
    min: Math.min(...listings.map((d) => processAS24Date(d.registrationDate))),
    max: Math.max(...listings.map((d) => processAS24Date(d.registrationDate)))
  }
};

export default withTooltip<ChartProps, ListingSummary>(
  ({
    width,
    height,
    showControls = true,
    margin = defaultMargin,
    hideTooltip,
    showTooltip,
    tooltipOpen,
    tooltipData
  }: ChartProps & WithTooltipProvidedProps<ListingSummary>) => {
    if (width < 10) return null;

    const [highlightState, sethighlightState] = useState("no-highlight");
    const [showMileage, setShowMileage] = useState(true);
    let xCategory = showMileage ? MILEAGE_KEY : REGISTRATION_KEY;
    let yCategory = PRICE_KEY;
    let glyphCategory = POWER_KEY;

    const x = useCallback(
      (d) =>
        xCategory === MILEAGE_KEY
          ? d[xCategory]
          : processAS24Date(d[xCategory]),
      [xCategory]
    );
    const y = useCallback((d) => d[yCategory], [yCategory]);
    const glyph = useCallback((d) => d[glyphCategory], [glyphCategory]);

    const points = listings;
    const svgRef = useRef<SVGSVGElement>(null);

    // Bounds and Scale
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    const xScale = useMemo(
      () =>
        xCategory === MILEAGE_KEY
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

    const glyphScale = useMemo(
      () =>
        scaleLinear<number>({
          domain: [
            Math.min(
              ...listings.map((d) =>
                d[glyphCategory] ? d[glyphCategory] : Math.pow(10, 10)
              )
            ),
            Math.max(
              ...listings.map((d) =>
                d[glyphCategory] ? d[glyphCategory] : -Math.pow(10, 10)
              )
            )
          ],
          range: [glyphSizes.min, glyphSizes.max],
          clamp: true
        }),
      [glyphCategory]
    );

    const highLight = useCallback(
      (d: ListingSummary) => {
        switch (highlightState) {
          case PRICE_EVALUATION_KEY:
            return comparison()(d.peCategory, GOOD_OFFER);
          case "Make":
            return comparison()(d.makeID, SELECTED_MAKE);
          default:
            return false;
        }
      },
      [highlightState]
    );

    const setGlyphColor = (d: ListingSummary) => {
      if (tooltipData === d) return theme.colors.chart.interactive;
      if (highLight(d)) {
        return theme.colors.chart.highlight;
      }
      if (highlightState !== "no-highlight") return theme.colors.chart.faded;
      return theme.colors.chart.base;
    };

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
      <>
        <div>
          <svg
            width={width}
            height={height}
            ref={svgRef}
            style={{
              cursor: tooltipOpen && tooltipData ? "pointer" : "default"
            }}
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
                  verticalAnchor: "middle",
                  x: -10
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
                numTicks={4}
                tickLabelProps={() => ({
                  fill: theme.text.color.base,
                  fontSize: 14,
                  textAnchor: "middle",
                  verticalAnchor: "middle"
                })}
                tickFormat={
                  xCategory === REGISTRATION_KEY ? undefined : format.mileage
                }
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
                numTicks={4}
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
                  {format.titleCase(glyphCategory)}
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
                    {listingDescriptors[glyphCategory].format(
                      glyphScale.domain()[0]
                    )}
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
                    {listingDescriptors[glyphCategory].format(
                      glyphScale.domain()[1]
                    )}
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
                  r={glyphScale(glyph(point))}
                  fill={setGlyphColor(point)}
                  // opacity={tooltipData === point ? 1}
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
                backgroundColor: theme.colors.tooltip.background,
                color: theme.text.color.base,
                padding: "10px 10px",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  marginBottom: 0,
                  alignSelf: "flex-start",
                  alignContent: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <img
                  src={getLogo(tooltipData.makeID)}
                  alt={`${getLabel(tooltipData.makeID, MAKE_KEY)} Logo`}
                  style={{ height: 60, marginRight: 8 }}
                />
                <div className="tooltip-vehicle-data-text">
                  <div
                    style={{
                      marginBottom: 10,
                      flexDirection: "row",
                      display: "flex",
                      flexWrap: "wrap"
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "bold",
                        marginRight: 5,
                        marginBottom: 5
                      }}
                    >
                      {getLabel(tooltipData.makeID, MAKE_KEY)}
                    </div>
                    <div style={{ minWidth: 80, marginBottom: 5 }}>
                      {getLabel(tooltipData.modelID, MODEL_KEY)}
                    </div>
                    {tooltipData.bodyTypeID && (
                      <div
                        style={{
                          minWidth: 120,
                          color: theme.text.color.subdued
                        }}
                      >
                        {getLabel(tooltipData.bodyTypeID, BODY_TYPE_KEY)}
                      </div>
                    )}
                  </div>
                  <div className="tooltip-vehicle-data-row">
                    <div className="tooltip-data-entry">
                      {format.currency(tooltipData.price)}
                    </div>
                    <div className="tooltip-data-entry">
                      {format.mileage(tooltipData.mileage)}
                    </div>
                    <div className="tooltip-data-entry">
                      {format.date(
                        processAS24Date(tooltipData.registrationDate)
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {tooltipData.peCategory !== 99 && (
                <div
                  style={{
                    marginTop: 20,
                    marginBottom: 10,
                    marginLeft: 0,
                    flexDirection: "column",
                    display: "flex",
                    flexWrap: "wrap"
                  }}
                >
                  <div
                    style={{
                      marginBottom: 8
                    }}
                  >
                    {getLabel(tooltipData.peCategory, PRICE_EVALUATION_KEY)}
                  </div>
                  <img
                    src={peIcons[tooltipData.peCategory?.toString()]}
                    alt=""
                    style={{ width: 100 }}
                  />
                </div>
              )}
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
                    checked={highlightState === "no-highlight"}
                    onChange={(e) => {
                      if (e.currentTarget.checked)
                        sethighlightState("no-highlight");
                      return;
                    }}
                  />
                  &nbsp;No Highlight
                </label>
                <label style={{ fontSize: 12, marginRight: 30 }}>
                  <input
                    type="checkbox"
                    checked={highlightState === "Make"}
                    onChange={(e) => {
                      if (e.currentTarget.checked) sethighlightState("Make");
                      return;
                    }}
                  />
                  &nbsp;{getLabel(SELECTED_MAKE, MAKE_KEY)}
                </label>
                <label style={{ fontSize: 12, marginRight: 30 }}>
                  <input
                    type="checkbox"
                    checked={highlightState === PRICE_EVALUATION_KEY}
                    onChange={(e) => {
                      if (e.currentTarget.checked)
                        sethighlightState(PRICE_EVALUATION_KEY);
                      return;
                    }}
                  />
                  &nbsp;{getLabel(GOOD_OFFER, PRICE_EVALUATION_KEY)}
                </label>
              </div>
            </div>
          )}
        </div>
        <style jsx>{`
          .tooltip-vehicle-data-row {
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: center;
            align-items: center;
            font-weight: normal;
            font-size: 12px;
          }

          .tooltip-vehicle-data-text {
            width: 190px;
            display: flex;
            flex-direction: column;
            align-content: start;
            align-items: stretch;
          }

          .tooltip-data-entry {
            flex-grow: 1;
            align-self: stretch;
          }
        `}</style>
      </>
    );
  }
);
