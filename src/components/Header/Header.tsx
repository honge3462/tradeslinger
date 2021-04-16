import React from "react";
import "./Header.css";
import logo from "../../assets/tradeslinger2.png"
import { AppBar, makeStyles, Toolbar, Typography,  } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    helloHoney: {
        fontFamily: "HelloHoney",
        marginLeft: "1rem",
        fontSize: "5rem"
  }, 
  header: {
      backgroundColor: "#FFD1DC"
  }
}))

const Header:React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <img className="logo" src={logo} alt="logo" />
                <Typography variant="h1" className={classes.helloHoney}>Font Tester</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;