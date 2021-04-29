import {
  MAKE_KEY,
  MODEL_KEY,
  PRICE_EVALUATION_KEY,
  BODY_TYPE_KEY,
  CUSTOMER_TYPE_KEY,
  FUEL_TYPE_KEY
} from "../constants";
import mappingMake from "./mappingMake";
import mappingModel from "./mappingModel";
import { peMappings } from "./mappingPriceEvaluation";
import mappingBodyType from "./mappingBodyType";
import mappingFuelType from "./mappingFuelType";

const mappingCustomerType = {
  D: "Händler",
  P: "Privat"
};

export const getLabel = (id: string | number, idType: string) => {
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
    case FUEL_TYPE_KEY:
      mappingTable = mappingFuelType;
      break;
    case CUSTOMER_TYPE_KEY:
      mappingTable = mappingCustomerType;
      break;
    default:
      return "";
  }
  return mappingTable.hasOwnProperty(idStr) ? mappingTable[idStr] : "";
};
