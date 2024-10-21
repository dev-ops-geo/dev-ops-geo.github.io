import { combineReducers } from "@reduxjs/toolkit";

export const countryReducer = (state = [], action: any) => {
  switch (action.type) {
    case "FETCH_COUNTRY":
      return action.payload;
    case "ADD_COUNTRY":
      return state + action.payload;
    default:
      return state;
  }
};

export const regionReducer = (state = [], action: any) => {
  switch (action.type) {
    case "FETCH_REGION":
      return action.payload;
    case "ADD_REGION":
      return state + action.payload;
    default:
      return state;
  }
};


const allReducers = combineReducers({
  country: countryReducer,
  region: regionReducer,
});

export default allReducers;