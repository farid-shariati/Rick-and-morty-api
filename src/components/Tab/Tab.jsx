import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25px",
    padding: "15px",
  },
  tab: {
    padding: "15px",
    color: theme.palette.primary.main,
    cursor:"pointer",
  },
  underline : {
    height:"2px",
    backgroundColor:theme.palette.primary.main,
  }
}));

const Tab = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.tab} onClick={() => props.setType(0)}>
        <Typography variant="h5">Characters</Typography>
        {props.searchType === 0 && <div className={classes.underline}></div>}
      </Box>
      <Box className={classes.tab} onClick={() => props.setType(1)}>
        <Typography variant="h5">Locations</Typography>
        {props.searchType === 1 && <div className={classes.underline}></div>}
      </Box>
      <Box className={classes.tab} onClick={() => props.setType(2)}>
        <Typography variant="h5">Episodes</Typography>
        {props.searchType === 2 && <div className={classes.underline}></div>}
      </Box>
    </Box>
  );
};

export default Tab;
