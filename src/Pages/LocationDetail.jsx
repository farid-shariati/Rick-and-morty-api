import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchLocationDetail } from "../Actions/Actions";

const LocationDetail = (props) => {
  const fetchLocation = () => {
    const id = props.match.params.id;
    props.fetchLocationDetail(id);
  };

  const location = props.locationDetail.location;

  useEffect(() => {
    fetchLocation();
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
      <h1>this is detail of location {location.id}</h1>
      <p>title : {location.name}</p>
      <p>body : {location.type}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locationDetail: state.locationDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchLocationDetail,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);
