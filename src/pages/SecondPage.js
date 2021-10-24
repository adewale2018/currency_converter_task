import {
  Avatar,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { getLoadingStatus, getRates } from "../store/selectors/rates";
import { useDispatch, useSelector } from "react-redux";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { fetchRates } from "../store/actions/rates";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "50vw",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
    },
  },
  title: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 250,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  unit: {
    marginLeft: theme.spacing(1),
    color: "#3f51b5",
    fontWeight: "bold",
  },
  loader: {
    marginTop: theme.spacing(15),
  },
}));

const SecondPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rates = useSelector(getRates);
  const loading = useSelector(getLoadingStatus);

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  if (loading) {
    return (
      <Container className={classes.loader}>
        <Typography variant="h3">Just a seconds...</Typography>
      </Container>
    );
  }

  return (
    <Container className={classes.container}>
      <Typography
        variant="h5"
        color="secondary"
        gutterBottom
        className={classes.title}
      >
        Exchange Rate Page
      </Typography>
      <div className={classes.wrapper}>
        <Typography
          variant="h5"
          color="secondary"
          gutterBottom
          className={classes.title}
        >
          BASE
        </Typography>
        <ArrowRightAltIcon fontSize="large" />
        <Avatar className={classes.orange}>EUR</Avatar>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>COUNTRY</TableCell>
              <TableCell align="right">RATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rates &&
              Object.keys(rates).map((row) => (
                <TableRow key={row}>
                  <TableCell component="th" scope="row">
                    {1}EUR
                  </TableCell>
                  <TableCell align="right">
                    {rates[row]}
                    <span className={classes.unit}>{row}</span>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SecondPage;
