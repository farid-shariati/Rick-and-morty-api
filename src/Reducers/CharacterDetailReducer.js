import {
  CHARACTER_DETAIL_LOADING,
  CHARACTER_DETAIL_SUCCESS,
  CHARACTER_DETAIL_FAILURE,
} from "../Types/Types";

const initialState = {
  character: {},
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_DETAIL_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHARACTER_DETAIL_SUCCESS:
      return {
        loading: false,
        character: action.character,
        error: "",
      };
    case CHARACTER_DETAIL_FAILURE:
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
