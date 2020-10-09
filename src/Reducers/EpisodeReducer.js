import { EPISODE_LOADING, EPISODE_SUCCESS, EPISODE_FAILURE } from "../Types/Types";


const initialState = {
    loading:false,
    error:null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case EPISODE_LOADING:
            return {...state, loading: true}
        case EPISODE_SUCCESS:
            return {...state,  ...action.episodes, loading:false}
        case EPISODE_FAILURE:
            return {...state, loading:false, error: action.error}   
        default:
            return state    
    }
}

export default reducer;