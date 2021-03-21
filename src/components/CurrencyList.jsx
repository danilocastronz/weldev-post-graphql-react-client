import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useLazyQuery, gql } from "@apollo/client";

// components
import SearchBox from "./SearchBox";
import CurrencyCard from "./CurrencyCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5)
  },
  form: {
    flex: 1,
    display: 'flex',
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}))

/// GraphQL Query
const GET_CURRENCIES = gql`
    query GetRates($currency: String!) {
      rates(currency: $currency) {
        currency
        rate
        name
    }
  }`;

const CurrencyList = () => {
  const classes = useStyles();
  const [currency, setCurrency] = useState(null);
  const [getCurrencies, { loading, data, error }] = useLazyQuery(GET_CURRENCIES);

  // handle get rates
  const handleSubmit = (currency) => {
    setCurrency(currency);
    getCurrencies({ variables: { currency } })
  }

  const handleData = (data, currency) => {
    if (data.rates) {
      return data.rates.map((item, e) =>
        <Grid item>
          <CurrencyCard key={e} base={currency} rate={item.rate} currency={item.currency} name={item.name} />
        </Grid>)
    } else {
      return <div>{`No records have been found for the currency.`}</div>
    }
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchBox handleSubmit={handleSubmit} />
        </Grid>
        <Grid item xs={12}>
          {/* while waiting for query response */}
          {loading && <div>{`Loading, please wait...`}</div>}
          {/* in case of query error */}
          {error && <div>{`Request error.`}</div>}
          {/* present currency list */}
          {data && <Grid container spacing={1}>{handleData(data, currency)}</Grid>}
        </Grid>
      </Grid>
    </div >
  )
};

export default CurrencyList;
