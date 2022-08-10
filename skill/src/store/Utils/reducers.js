import {
  ERROR,
  LOADING,
  MULTIRNGESLIDER
} from "./types";

export const INITIAL_STATE = {
  multiRangeSlider: {
    min: "",
    max: "",
    symbol: ""
  },
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MULTIRNGESLIDER:
      return { ...state, multiRangeSlider: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
