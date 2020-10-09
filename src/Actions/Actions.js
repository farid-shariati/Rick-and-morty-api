import axios from "axios";
import {
  CHARACTER_LOADING,
  CHARACTER_SUCCESS,
  CHARACTER_FAILURE,
  EPISODE_LOADING,
  EPISODE_SUCCESS,
  EPISODE_FAILURE,
  LOCATION_FAILURE,
  LOCATION_LOADING,
  LOCATION_SUCCESS,
  CHARACTER_DETAIL_LOADING,
  CHARACTER_DETAIL_SUCCESS,
  CHARACTER_DETAIL_FAILURE,
  DETAIL_LOCATION_LOADING,
  DETAIL_LOCATION_SUCCESS,
  DETAIL_LOCATION_FAILURE,
  DETAIL_EPISODE_FAILURE,
  DETAIL_EPISODE_LOADING,
  DETAIL_EPISODE_SUCCESS,
} from "../Types/Types";

// FETCHING CHARACTERS
export const characterLoading = () => {
  return {
    type: CHARACTER_LOADING,
  };
};

export const characterSuccess = (characters) => {
  return {
    type: CHARACTER_SUCCESS,
    characters,
  };
};

export const characterFailure = (error) => {
  return {
    type: CHARACTER_FAILURE,
    error,
  };
};

export const fetchAllCharacters = (pageNum = 1, query="") => {
  console.log(query)
  return (dispatch) => {
    dispatch(characterLoading());
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${query}`)
      .then((response) => {
        dispatch(characterSuccess(response.data));
      })
      .catch((error) => {
        dispatch(characterFailure(error));
      });
  };
};

// FETCHING LOCATIONS

export const locationLoading = () => {
  return {
    type: LOCATION_LOADING,
  };
};

export const locationSuccess = (locations) => {
  return {
    type: LOCATION_SUCCESS,
    locations,
  };
};

export const locationFailure = (error) => {
  return {
    type: LOCATION_FAILURE,
    error,
  };
};

export const fetchAllLocations = (pageNum = 1, query="") => {
  return (dispatch) => {
    dispatch(locationLoading());
    axios
      .get(`https://rickandmortyapi.com/api/location/?page=${pageNum}&name=${query}`)
      .then((response) => {
        dispatch(locationSuccess(response.data));
      })
      .catch((error) => {
        dispatch(locationFailure(error));
      });
  };
};

// FETCHING EPISODES

export const episodeLoading = () => {
  return {
    type: EPISODE_LOADING,
  };
};

export const episodeSuccess = (episodes) => {
  return {
    type: EPISODE_SUCCESS,
    episodes,
  };
};

export const episodeFailure = (error) => {
  return {
    type: EPISODE_FAILURE,
    error,
  };
};

export const fetchAllEpisodes = (pageNum = 1, query="") => {
  return (dispatch) => {
    dispatch(episodeLoading());
    axios
      .get(`https://rickandmortyapi.com/api/episode/?page=${pageNum}&name=${query}`)
      .then((response) => {
        dispatch(episodeSuccess(response.data));
      })
      .catch((error) => {
        dispatch(episodeFailure(error));
      });
  };
};


//Fetch character details

export const characterDetailLoading = () => {
  return {
    type: CHARACTER_DETAIL_LOADING
  }
}

export const characterDetailSuccess = (character) => {
  return {
  type: CHARACTER_DETAIL_SUCCESS,
  character
  }
}

export const characterDetailFailure = (error) => {
  return {
    type: CHARACTER_DETAIL_FAILURE,
    error
  }
}

export const fetchCharacterDetail = (id) => {
  return (dispatch) => {
    dispatch(characterDetailLoading());
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        dispatch(characterDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(characterDetailFailure(error.message));
      });
  };

}

//FETCH location detail


export const locationDetailLoading = () => {
  return {
    type: DETAIL_LOCATION_LOADING
  }
}

export const locationDetailSuccess = (location) => {
  return {
  type: DETAIL_LOCATION_SUCCESS,
  location
  }
}

export const locationDetailFailure = (error) => {
  return {
    type: DETAIL_LOCATION_FAILURE,
    error
  }
}

export const fetchLocationDetail = (id) => {
  return (dispatch) => {
    dispatch(locationDetailLoading());
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((response) => {
        dispatch(locationDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(locationDetailFailure(error.message));
      });
  };
}


//fetch episode detail


export const episodeDetailLoading = () => {
  return {
    type: DETAIL_EPISODE_LOADING
  }
}

export const episodeDetailSuccess = (episode) => {
  return {
  type: DETAIL_EPISODE_SUCCESS,
  episode
  }
}

export const episodeDetailFailure = (error) => {
  return {
    type: DETAIL_EPISODE_FAILURE,
    error
  }
}

export const fetchEpisodeDetail = (id) => {
  return (dispatch) => {
    dispatch(episodeDetailLoading());
    axios
      .get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((response) => {
        dispatch(episodeDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(episodeDetailFailure(error.message));
      });
  };
}