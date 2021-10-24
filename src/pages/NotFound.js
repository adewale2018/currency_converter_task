import NotFoundImg from "../utils/images/notfound.jpg";

import { Container, Typography, makeStyles } from "@material-ui/core";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    marginTop: theme.spacing(5),
  },
  img: {
    width: "40vw",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  back: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: theme.spacing(2),
    width: 100,
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Container className={classes.container}>
      <div className={classes.back} onClick={() => history.push("/")}>
        <ArrowBackIosIcon color="primary" /> Back home
      </div>
      <Typography variant="h6" color="secondary">
        Sorry, Page Not Found !
      </Typography>
      <img
        src={NotFoundImg}
        alt="Not found Illustrations"
        className={classes.img}
      />
    </Container>
  );
};

export default NotFound;
