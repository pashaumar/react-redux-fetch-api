import { FETCH_USER_BEGIN, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from "./type";
import axios from "axios";
export const fetchUsers = () => async (dispatch) => {
  dispatch({
    type: FETCH_USER_BEGIN,
  });
  try {
    const users = await axios.get(
      "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
    );
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: users.data,
    });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAIL, payload: error });
  }
};
