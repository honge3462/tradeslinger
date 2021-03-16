import React from "react";
import "./Header.css";
import logo from "../../assets/tradeslinger2.png"
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    helloHoney: {
        fontFamily: "HelloHoney",
        marginLeft: "1rem"
  }
}))

const Header:React.FC = () => {
    const classes = useStyles();
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <Typography variant="h1" className={classes.helloHoney}>Font Tester</Typography>
        </div>
    )
}

export default Header;