import React, { useState, useEffect } from "react";
//material
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import history from "../helper/history";
//component
import SearchBar from "../components/SearchBar/SearchBar";
import Tab from "../components/Tab/Tab";
import MyCard from "../components/Card/MyCard";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer/Footer";
import LocationCard from "../components/Card/LocationCard";
import EpisodeCard from "../components/Card/EpisodeCard";
//image
import nameLogo from "../assets/name.svg";
//redux
import { connect } from "react-redux";
import {
  fetchAllCharacters,
  fetchAllEpisodes,
  fetchAllLocations,
} from "../Actions/Actions";
import { bindActionCreators } from "redux";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    width: "100%",
    height: "100vh",
    marginTop: "15px",
  },
  cards: {
    width: "100%",
    padding: "10px",
    marginTop: "50px",
  },
}));

const MainPage = (props) => {
  const classes = useStyles();
  const [searchType, setSearchType] = useState(0);
  const [query, setQuery] = useState("")

  console.log(query)

  useEffect(() => {
    props.fetchAllCharacters();
  }, []);


  const setType = (num) => {
    setSearchType(num);
    setCurrentPage(1);
    if (num === 0) {
      props.fetchAllCharacters();
    } else if (num === 1) {
      props.fetchAllLocations();
    } else if (num === 2) {
      props.fetchAllEpisodes();
    }
  };

  const setPlaceHolder = () => {
    switch (searchType) {
      case 0:
        return "Search for characters";
      case 1:
        return "Search for Locations";
      case 2:
        return "Search for Episodes";
      default:
        return "Search for characters";
    }
  };

  const gotoCharacterDetail = (character) => {
    history.push(`/character/${character.id}`);
  };

  const gotoLovationDetail = (location) => {
    history.push(`/location/${location.id}`);
  };

  const gotoEpisodeDetail = (episode) => {
    history.push(`/episode/${episode.id}`);
  };

  const characters = props.fetchChar;
  const locations = props.fetchLoca;
  const episodes = props.fetchEpi;

  const renderCards = () => {
    if (searchType === 0) {
      return (
        <Box className={classes.cards}>
          <Grid container spacing={4}>
            {characters.results?.map((character) => (
              <Grid item lg={3} md={6} sm={6} xs={12} key={character.id}>
                <MyCard
                  img={character.image}
                  name={character.name}
                  lastLocation={character.location.name}
                  firstSeen={character.origin.name}
                  species={character.species}
                  gender={character.gender}
                  status={character.status}
                  goDetail={() => gotoCharacterDetail(character)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (searchType === 1) {
      return (
        <Box className={classes.cards}>
          <Grid container spacing={4}>
            {locations.results?.map((location) => (
              <Grid item lg={3} md={6} sm={12} xs={12} key={location.id}>
                <LocationCard
                  name={location.name}
                  type={location.type}
                  dimension={location.dimension}
                  goDetail={() => gotoLovationDetail(location)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    } else if (searchType === 2) {
      return (
        <Box className={classes.cards}>
          <Grid container spacing={4}>
            {episodes.results?.map((episode) => (
              <Grid item lg={3} md={6} sm={12} xs={12} key={episode.id}>
                <EpisodeCard
                  name={episode.name}
                  air_date={episode.air_date}
                  episode={episode.episode}
                  goDetail={() => gotoEpisodeDetail(episode)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }
  };


  const [currentPage, setCurrentPage] = useState(1);

  const fetchCondition = (page = 1, query="") => {
    switch (searchType) {
      case 0:
        props.fetchAllCharacters(page,query);
        break;
      case 1:
        props.fetchAllLocations(page,query);
        break;
      case 2:
        props.fetchAllEpisodes(page,query);
        break;
      default:
        props.fetchAllCharacters(page,query);
    }
  };

  
  const onPageClick = (id) => {
    setCurrentPage(id);
    fetchCondition(id, query);
  };

  const setQuerySearch = (inputText) => {
    setQuery(inputText);
    fetchCondition(1,query);
  }

  const setPagesType = () => {
    switch (searchType) {
      case 0:
        return characters.info?.pages;
      case 1:
        return locations.info?.pages;
      case 2:
        return episodes.info?.pages;
      default:
        return characters.info?.pages;
    }
  };

  return (
    <div className={classes.mainDiv}>
      <Container>
        <Box>
          <img src={nameLogo} alt="name logo" />
          <Tab setType={setType} searchType={searchType} />
          <SearchBar placeHolder={setPlaceHolder()} setQuerySearch={setQuerySearch}/>
          {renderCards()}
        </Box>
        <Pagination
          pages={setPagesType()}
          currentPage={currentPage}
          onPageClick={onPageClick}
        />
      </Container>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchChar: state.character,
    fetchLoca: state.location,
    fetchEpi: state.episode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchAllCharacters: fetchAllCharacters,
      fetchAllLocations: fetchAllLocations,
      fetchAllEpisodes: fetchAllEpisodes,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
