import {
  FETCH_USER_BEGIN,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
} from "../actions/type";
const initialState = {
  users: [],
  error: "",
  loading: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        users: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
