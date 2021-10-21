import { Container, Grid, MenuItem, Select, Typography, makeStyles } from "@material-ui/core";

import React from "react";
import TextInput from "../components/text-input/TextInput";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
  },
  title: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectInput: {
    width: "150px",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid item sm={12} className={classes.container}>
      <Typography variant="h4" color="secondary" className={classes.title}>
        CURRENCY CONVERTER
      </Typography>
      <Container>
        <div className={classes.wrapper}>
          <TextInput type="number" variant="outlined" />
          <Select
            variant="outlined"
            className={classes.selectInput}
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty Thirty</MenuItem>
          </Select>
        </div>
        <br />
        <div className={classes.wrapper}>
          <TextInput type="number" variant="outlined" />
          <Select
            variant="outlined"
            className={classes.selectInput}
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty Thirty</MenuItem>
          </Select>
        </div>
      </Container>
    </Grid>
  );
};

export default Home;
