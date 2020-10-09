import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchEpisodeDetail } from "../Actions/Actions";

const EpisodeDetail = (props) => {
  const fetchEpisode = () => {
    const id = props.match.params.id;
    props.fetchEpisodeDetail(id);
  };

  const episode = props.episodeDetail.episode;

  useEffect(() => {
    fetchEpisode();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#004433",
      }}
    >
      <h1>this is detail of episode {episode.id}</h1>
      <p>title : {episode.name}</p>
      <p>body : {episode.status}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    episodeDetail: state.episodeDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchEpisodeDetail,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeDetail);
