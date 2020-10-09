import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
//image
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    footer:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        padding:"100px",
        width:"100%",
        height:"300px",
        backgroundColor:"#121212"
    }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Typography style={{color:"white"}}>{"Hope You Enjoy :)"}</Typography>
      <Typography color="primary" style={{marginTop:"10px"}}>https://rickandmortyapi.com</Typography>
    </Box>
  );
};

export default Footer;
