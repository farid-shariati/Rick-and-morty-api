import { LOCATION_LOADING, LOCATION_SUCCESS, LOCATION_FAILURE } from "../Types/Types";

const initialState = {
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_LOADING:
      return { ...state, loading: true };
    case LOCATION_SUCCESS:
      return { ...state, ...action.locations, loading: false };
    case LOCATION_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
