import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {
  Box,
  CardActionArea,
  CardMedia,
  CardActions,
  Divider,
} from "@material-ui/core";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

const cardStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    borderRadius: "120px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  card: {
    width: "100%",
    height: "430px",
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    borderRadius: "50px 50px 10px 10px",
    display:"flex",
    flexDirection:"column",

  },
  content : {
    flexGrow: 1,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
  },
  imageBox: {
    minHeight:"250px",
    position: "relative",
  },
  image: {
    height: "100%",
  },
  imageText: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    width: "100%",
    padding: "5px",
    bottom: "0px",
  },
  divider: {
    backgroundColor: "#333333",
  },
  infoTypography: {
    color: theme.palette.primary.main,
    fontSize:"13px"
  },
}));

const MyCard = (props) => {
  const classes = cardStyle();
  return (
    <Paper className={classes.paper}>
      <CardActionArea onClick={props.goDetail}>
        <Card className={classes.card}>
          <Box className={classes.imageBox}>
            <CardMedia image={props.img} className={classes.image}>
              <Typography className={classes.imageText}>{props.name}</Typography>
            </CardMedia>
          </Box>
          <CardContent className={classes.content}>
            <Typography align="left" className={classes.infoTypography}>
              Last known location :{" "}
              <span style={{ color: "white" }}>{props.lastLocation}</span>
            </Typography>
            <Typography align="left" className={classes.infoTypography}>
              First Seen in : <span style={{ color: "white" }}>{props.firstSeen}</span>
            </Typography>
            <Typography align="left" className={classes.infoTypography}>
              Species : <span style={{ color: "white" }}>{props.species}</span>
            </Typography>
          </CardContent>
          <Divider className={classes.divider} />
          <CardActions className={classes.cardActions}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {" "}
              <AssignmentTurnedInIcon fontSize="small" />&nbsp;
              <Typography className={classes.infoTypography}>{props.gender}</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography className={classes.infoTypography}>{props.status}</Typography>&nbsp;
              <AssignmentTurnedInIcon fontSize="small"/>
            </Box>
          </CardActions>
        </Card>
      </CardActionArea>
    </Paper>
  );
};

export default MyCard;