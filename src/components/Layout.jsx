import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// components
import Footer from "./Footer";
import TopBar from "./TopBar";

const useStyles = makeStyles(theme => ({
  content: {
    minHeight: 'calc(100vh - 50px - 50px)' // 50px top bar and footer height
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <TopBar />
      <main className={classes.content}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
