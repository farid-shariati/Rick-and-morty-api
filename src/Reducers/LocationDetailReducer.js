import { DETAIL_LOCATION_LOADING, DETAIL_LOCATION_SUCCESS, DETAIL_LOCATION_FAILURE } from "../Types/Types";

const initialState = {
  location: {},
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_LOCATION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DETAIL_LOCATION_SUCCESS:
      return {
        loading: false,
        location: action.location,
        error: "",
      };
    case DETAIL_LOCATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
