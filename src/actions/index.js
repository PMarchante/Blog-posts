import jsonPLaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPLaceholder.get("/posts");

  dispatch({ type: "FETCH_POST", payload: response });
};
