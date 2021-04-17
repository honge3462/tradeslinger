import React, { useState } from "react";
import './App.css';
import TextField from '@material-ui/core/TextField';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  textBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "2rem"
  },
  instructions: {
    marginBottom: "1rem"
  },
  sweetHipster: {
    fontFamily: "SweetHipster",
    marginLeft: ".5rem"
  },
  blantickScript: {
    fontFamily: "BlantickScript",
    marginLeft: ".5rem"
  },
  foreFarmers: {
    fontFamily: "ForeFarmers",
    marginLeft: ".5rem"
  },
  grestalScript: {
    fontFamily: "GrestalScript",
    marginLeft: ".5rem"
  },
  kaileyLatief: {
    fontFamily: "KaileyLatief",
    marginLeft: ".5rem"
  },
  lifeStyle: {
    fontFamily: "LifeStyle",
    marginLeft: ".5rem"
  },
  octoberTwilight: {
    fontFamily: "OctoberTwilight",
    marginLeft: ".5rem"
  },
  sunFlowers: {
    fontFamily: "Sunflowers",
    marginLeft: ".5rem"
  },
  helloHoney: {
    fontFamily: "HelloHoney",
    marginLeft: ".5rem"
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
  const fonts:string[] = [classes.blantickScript, classes.foreFarmers, classes.grestalScript, classes.helloHoney, classes.kaileyLatief, classes.lifeStyle, classes.octoberTwilight, classes.sunFlowers];
  const [text, setText] = useState<string>('')
  
  return (
    <div className="app">
      <Header />
      <div className="text">
        <Typography variant="h3" className={classes.instructions}>Type text here to see example fonts</Typography>
        <TextField id="outlined-basic" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} fullWidth label={""} variant="outlined" placeholder={"type text here"} className={classes.instructions} />

        { fonts.map((font, index) => (
          <div className={classes.textBox}>
          <Typography variant="h4">Font #{index + 1} - </Typography>
          <Typography variant="h3" className={font}>{text}</Typography>
        </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
