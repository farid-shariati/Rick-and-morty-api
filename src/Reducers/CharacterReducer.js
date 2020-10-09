import {
  CHARACTER_LOADING,
  CHARACTER_FAILURE,
  CHARACTER_SUCCESS,
} from "../Types/Types";

const initialState = {
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_LOADING:
      return { ...state, loading: true };
    case CHARACTER_SUCCESS:
      return { ...state, loading: false, ...action.characters };
    case CHARACTER_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default reducer;
