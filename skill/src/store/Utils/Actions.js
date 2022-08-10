import {
  ERROR,
  LOADING,
  MULTIRNGESLIDER
} from "./types";
import axios from "axios";
import env from "react-dotenv";

const url = env.DOMAINAPI

export const getValueRangeSlider = () => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  });

  try {
    const response = await axios.get(`${url}/getRangeAmounts`);

    dispatch({
      type: MULTIRNGESLIDER,
      payload: response.data
    });

    dispatch({
      type: LOADING,
      payload: false
    });

  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADING,
      payload: false
    });
    dispatch({
      type: ERROR,
      payload: error.message
    });
  }
};

