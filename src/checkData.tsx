import {
  BODY_TYPE_KEY,
  MAKE_KEY,
  MODEL_KEY,
  POWER_KEY,
  PRICES_KEY,
  FUEL_TYPE_KEY,
  PRICE_EVALUATION_KEY,
  LISTING_AGE_KEY,
  CUSTOMER_TYPE_KEY
} from "./constants";
import { getLabel } from "./mappings/labelMapper";
import { ListingSummary } from "./quickTypes";

function getUnique(value, index, self) {
  return value ? self.indexOf(value) === index : false;
}

interface highlightFilterDef {
  key: string;
  toggle: boolean;
  dropdown: boolean;
  comparator: string;
  values: number[] | string[];
  label?: string;
}

export const getRelevantFilters = (listings: ListingSummary[]) => {
  let highlightFilters: highlightFilterDef[] = [];
  const priceLabels = listings.map((x) => x.peCategory).filter(getUnique);

  if (priceLabels && priceLabels.indexOf(1) > -1) {
    highlightFilters.push({
      key: PRICE_EVALUATION_KEY,
      toggle: true,
      dropdown: false,
      comparator: "equal",
      values: [1],
      label: getLabel(1, PRICE_EVALUATION_KEY)
    });
  } else if (priceLabels.indexOf(2) > -1) {
    highlightFilters.push({
      key: PRICE_EVALUATION_KEY,
      toggle: true,
      dropdown: false,
      comparator: "equal",
      values: [2],
      label: getLabel(2, PRICE_EVALUATION_KEY)
    });
  }

  const brands = listings.map((x) => x.makeID).filter(getUnique);
  if (brands.length < 10 && brands.length > 1) {
    highlightFilters.push({
      key: MAKE_KEY,
      toggle: false,
      dropdown: true,
      comparator: "equal",
      values: brands
    });
  }

  const bodyTypes = listings.map((x) => x.bodyTypeID).filter(getUnique);
  if (bodyTypes && bodyTypes.length > 1) {
    highlightFilters.push({
      key: BODY_TYPE_KEY,
      toggle: false,
      dropdown: true,
      comparator: "equal",
      values: bodyTypes
    });
  }

  const models = listings.map((x) => x.modelID).filter(getUnique);
  if (models.length > 1 && models.length < 10) {
    highlightFilters.push({
      key: MODEL_KEY,
      toggle: false,
      dropdown: true,
      comparator: "equal",
      values: models
    });
  }

  const maxPower = Math.max(
    ...listings.map((x) => (x.power ? x.power : -Math.pow(10, 10)))
  );
  if (maxPower > 180) {
    highlightFilters.push({
      key: POWER_KEY,
      toggle: true,
      dropdown: false,
      comparator: "larger",
      values: [180],
      label: "Hohe Leistung (180kW+)"
    });
  } else if (maxPower > 110) {
    highlightFilters.push({
      key: POWER_KEY,
      toggle: true,
      dropdown: false,
      comparator: "larger",
      values: [110],
      label: "Mehr Leistung (110kW+)"
    });
  }

  const fuelTypes = listings.map((x) => x.fuelID).filter(getUnique);
  if (fuelTypes.length > 1) {
    highlightFilters.push({
      key: FUEL_TYPE_KEY,
      toggle: false,
      dropdown: true,
      comparator: "equal",
      values: fuelTypes
    });
  }

  const customerTypes = listings.map((x) => x.customerTypeID).filter(getUnique);
  if (customerTypes.length > 1) {
    highlightFilters.push({
      key: CUSTOMER_TYPE_KEY,
      toggle: false,
      dropdown: true,
      comparator: "equal",
      values: customerTypes
    });
  }

  const newListingThresholdDays = 14;
  const newListingThreshold =
    new Date().valueOf() - newListingThresholdDays * 86400;
  const newListings = listings
    .map((x) => new Date(x.changedDate).valueOf())
    .filter((v) => {
      return v < newListingThreshold;
    });

  if (newListings.length > 4) {
    highlightFilters.push({
      key: LISTING_AGE_KEY,
      toggle: true,
      dropdown: false,
      comparator: "larger",
      values: [newListingThreshold],
      label: "Neue Inserate"
    });
  }

  return highlightFilters;
};
