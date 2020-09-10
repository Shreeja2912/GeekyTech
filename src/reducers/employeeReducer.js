import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  data: [],
};

export default createReducer(initialState, {
  DATA_FETCH_INITIATED: (state) => ({ ...state, status: "loading" }),
  DATA_FETCH_SUCCESS: (state, action) => ({ ...state, ...action.payload }),
  DATA_FETCH_FAILED: (state) => ({ ...state, ...initialState }),
});
