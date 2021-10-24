import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getLoadingStatus, getRates } from "../store/selectors/rates";
import { useDispatch, useSelector } from "react-redux";

import SelectFieldInput from "../components/reusables/SelectField";
import TextFieldInput from "../components/reusables/TextInput";
import { fetchRates } from "../store/actions/rates/index";

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
  inputContainer: {
    width: "21vw",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "82vw",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  loader: {
    marginTop: theme.spacing(15),
  }
}));

const Home = () => {
  const dispatch = useDispatch();
  const newRates = useSelector(getRates);
  const loading = useSelector(getLoadingStatus);
  const classes = useStyles();
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("NGN");

  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  useEffect(() => {
    if (!!newRates) {
      handleAmount1Change(amount1);
    }
  }, [newRates]);

  const formatNumber = (number) => number.toFixed(5);

  const handleAmount1Change = (amount1) => {
    setAmount2(
      formatNumber(
        Number((amount1 * newRates[currency2]) / newRates[currency1])
      )
    );
    setAmount1(amount1);
  };

  const handleCurrency1Change = (currency1) => {
    setAmount2(
      formatNumber(
        Number((amount1 * newRates[currency2]) / newRates[currency1])
      )
    );
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    setAmount1(
      formatNumber(
        Number((amount2 * newRates[currency1]) / newRates[currency2])
      )
    );
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    setAmount1(
      formatNumber(
        Number((amount2 * newRates[currency1]) / newRates[currency2])
      )
    );
    setCurrency2(currency2);
  };

  if (loading) {
    return (
      <Container className={classes.loader}>
        <Typography variant="h3">Just a seconds...</Typography>
      </Container>
    );
  }

  return (
    <Grid item sm={12} className={classes.container}>
      <Typography variant="h4" color="secondary" className={classes.title}>
        CURRENCY CONVERTER
      </Typography>
      <Container>
        <div className={classes.inputContainer}>
          <div className={classes.wrapper}>
            <TextFieldInput
              name="firstAmount"
              type="number"
              amount={amount1}
              onAmountChange={handleAmount1Change}
              required
            />
            <SelectFieldInput
              name="firstCurrency"
              options={newRates && Object.keys(newRates)}
              onCurrencyChange={handleCurrency1Change}
              currency={currency1}
            />
          </div>
          <div className={classes.wrapper}>
            <TextFieldInput
              name="secondAmount"
              type="number"
              amount={amount2}
              onAmountChange={handleAmount2Change}
            />
            <SelectFieldInput
              name="secondCurrency"
              options={newRates && Object.keys(newRates)}
              onCurrencyChange={handleCurrency2Change}
              currency={currency2}
            />
          </div>
        </div>
      </Container>
    </Grid>
  );
};

export default Home;
