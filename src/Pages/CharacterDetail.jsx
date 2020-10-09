import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCharacterDetail } from "../Actions/Actions";

const CharacterDetail = (props) => {
  const fetchCharacter = () => {
    const id = props.match.params.id;
    props.fetchCharacterDetail(id);
  };

  const character = props.characterDetail.character;
  console.log(character)

  useEffect(() => {
    fetchCharacter();
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
      <h1>this is detail of character {character.id}</h1>
      <p>title : {character.name}</p>
      <p>body : {character.status}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characterDetail: state.characterDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchCharacterDetail,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
