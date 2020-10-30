export const handlerClicked = () => {
  return {
    type: "HANDLER_CLICKED",
  };
};

export const dataFetchInitated = () => {
  return {
    type: "DATA_FETCH_INITIATED",
  };
};

export const dataFetchSuccess = (payload) => {
  return {
    type: "DATA_FETCH_SUCCESS",
    payload,
  };
};

export const dataFetchFailure = () => {
  return {
    type: "DATA_FETCH_FAILED",
  };
};
export const handlerClickedDetails = (id) => {
  return {
    type: "HANDLER_CLICKED_DETAILS",
    payload: id,
  };
};
export const dailogFetchInitated = () => {
  return {
    type: "DAILOG_FETCH_INITIATED",
  };
};

export const dailogFetchSuccess = (payload) => {
  return {
    type: "DAILOG_FETCH_SUCCESS",
    payload,
  };
};

export const dailogFetchFailure = () => {
  return {
    type: "DAILOG_FETCH_FAILED",
  };
};
