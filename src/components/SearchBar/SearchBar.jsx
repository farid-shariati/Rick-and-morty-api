import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  searchbar: {
    width: "100%",
    height: "70px",
    backgroundColor: theme.palette.secondary.main,
    marginTop: "30px",
    borderRadius: "50px",
    padding: "15px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#545454",
    borderWidth: "thin",
  },
  searchBox: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  searchInput: {
    marginLeft: "10px",
    color: theme.palette.primary.main,
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();
  const [inputText, setInputText] = useState("")
  

  return (
    <Box className={classes.searchbar}>
      <Box className={classes.searchBox}>
        <SearchIcon fontSize="large" color="primary" style={{cursor:"pointer"}} onClick={() => props.setQuerySearch(inputText)}/>
        <InputBase
          fullWidth
          placeholder={props.placeHolder}
          className={classes.searchInput}
          value={inputText}
          onChange={(e) => {setInputText(e.target.value)}}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
