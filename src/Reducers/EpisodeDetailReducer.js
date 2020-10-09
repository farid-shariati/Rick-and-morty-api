import { DETAIL_EPISODE_LOADING, DETAIL_EPISODE_SUCCESS, DETAIL_EPISODE_FAILURE } from "../Types/Types";
  
  const initialState = {
    episode: {},
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case DETAIL_EPISODE_LOADING:
        return {
          ...state,
          loading: true,
        };
      case DETAIL_EPISODE_SUCCESS:
        return {
          loading: false,
          episode: action.episode,
          error: "",
        };
      case DETAIL_EPISODE_FAILURE:
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
  