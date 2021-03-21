import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '50px',
    background: 'linear-gradient(90deg, rgba(109,78,238,1) 0%, rgba(164,36,134,1) 63%)',
  },
}));

const TopBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6">
          {`Currency Converter App | Welcome, Developer`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
