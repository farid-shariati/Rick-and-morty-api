import { combineReducers } from "redux";
import CharacterReducer from "../Reducers/CharacterReducer";
import EpisodeReducer from "../Reducers/EpisodeReducer";
import LocationReducer from "../Reducers/LocationReducer";
import CharacterDetailReducer from '../Reducers/CharacterDetailReducer';
import LocationDetailReducer from '../Reducers/LocationDetailReducer';
import EpisodeDetailReducer from '../Reducers/EpisodeDetailReducer'

const rootReducer = combineReducers({
  character: CharacterReducer,
  episode: EpisodeReducer,
  location: LocationReducer,
  characterDetail: CharacterDetailReducer,
  locationDetail: LocationDetailReducer,
  episodeDetail: EpisodeDetailReducer,
});

export default rootReducer;
