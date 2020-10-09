import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { CardActionArea } from "@material-ui/core";

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
    height: "160px",
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    borderRadius: "0px 50px 0px 0px",
  },
  infoTypography: {
    color: theme.palette.primary.main,
    fontSize: "15px",
    marginTop: "10px",
  },
  content: {
    height:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
  }
}));

const LocationCard = (props) => {
  const classes = cardStyle();
  return (
    <Paper className={classes.paper}>
      <CardActionArea onClick={props.goDetail}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography align="left" className={classes.infoTypography}>
              Name : <span style={{ color: "white" }}>{props.name}</span>
            </Typography>
            <Typography align="left" className={classes.infoTypography}>
              Type : <span style={{ color: "white" }}>{props.type}</span>
            </Typography>
            <Typography align="left" className={classes.infoTypography}>
              Dimension :{" "}
              <span style={{ color: "white" }}>{props.dimension}</span>
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Paper>
  );
};

export default LocationCard;
