import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const paginationStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  pageNumberSelected: {
    padding: "5px 12px",
    color: "#c4c4c4",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50px",
  },
  pageNumberNot: {
    padding: "5px 12px",
    color: "#c4c4c4",
    cursor: "pointer",
    borderRadius: "50px",
  },
}));

const Pagination = ({ pages, currentPage, onPageClick }) => {
  const classes = paginationStyles();

  const isSelected = (id) => currentPage === id;

  if (!pages) return null;

  return (
    <Box className={classes.mainBox}>
      {Array.from(Array(pages), (_, i) => i + 1).map((item) => (
        <Typography
          onClick={() => onPageClick(item)}
          className={
            isSelected(item)
              ? classes.pageNumberSelected
              : classes.pageNumberNot
          }
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default Pagination;
