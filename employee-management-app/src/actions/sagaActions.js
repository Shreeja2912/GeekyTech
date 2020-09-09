export const handlerClicked = () => {
  console.log("Hi from action handlerClickedDetails");
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
  console.log("Hi from action handlerClickedDetails", id);
  return {
    type: "HANDLER_CLICKED_DETAILS",
    payload: id,
  };
};
export const dailogFetchInitated = () => {
  console.log("Hi from action dailogFetchInitated");
  return {
    type: "DAILOG_FETCH_INITIATED",
  };
};

export const dailogFetchSuccess = (payload) => {
  console.log("Hi from action dailogFetchSuccess");
  return {
    type: "DAILOG_FETCH_SUCCESS",
    payload,
  };
};

export const dailogFetchFailure = () => {
  console.log("Hi from action dailogFetchFailure");
  return {
    type: "DAILOG_FETCH_FAILED",
  };
};
