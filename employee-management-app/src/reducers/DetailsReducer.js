import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  data: [],
};

export default createReducer(initialState, {
  DAILOG_FETCH_INITIATED: (state) => ({ ...state, status: "loading" }),
  DAILOG_FETCH_SUCCESS: (state, action) => ({ ...state, ...action.payload }),
  DAILOG_FETCH_FAILED: (state) => ({ ...state, ...initialState }),
});
