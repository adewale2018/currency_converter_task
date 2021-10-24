import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    textTransform: "uppercase",
    fontWeight: 200,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  btnLink: {
    color: "#fff",
    textDecoration: "none",
    marginLeft: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => history.push("/")}
          >
            <MonetizationOnOutlinedIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Currency Converter
          </Typography>
          <Link to="/" className={classes.btnLink}>
            Home
          </Link>
          <Link to="/other_page" className={classes.btnLink}>
            Page2
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
