import {useState} from "react"
import './App.css';
import TextField from '@material-ui/core/TextField';


import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  textBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "2rem"
  },
  sweetHipster: {
    fontFamily: "SweetHipster",
    marginLeft: "1rem"
  },
  blantickScript: {
    fontFamily: "BlantickScript",
    marginLeft: "1rem"
  },
  foreFarmers: {
    fontFamily: "ForeFarmers",
    marginLeft: "1rem"
  },
  grestalScript: {
    fontFamily: "GrestalScript",
    marginLeft: "1rem"
  },
  kaileyLatief: {
    fontFamily: "KaileyLatief",
    marginLeft: "1rem"
  },
  lifeStyle: {
    fontFamily: "LifeStyle",
    marginLeft: "1rem"
  },
  octoberTwilight: {
    fontFamily: "OctoberTwilight",
    marginLeft: "1rem"
  },
  sunFlowers: {
    fontFamily: "Sunflowers",
    marginLeft: "1rem"
  },
  helloHoney: {
    fontFamily: "HelloHoney",
    marginLeft: "1rem"
  }


}));

function App() {
  const classes = useStyles();
  const [text, setText] = useState('')
  
  return (
    <div className="App">
      <Typography variant="h3">Type text here to see example fonts</Typography>
      <TextField id="outlined-basic" onChange={e => setText(e.target.value)} fullWidth label={""} variant="outlined" placeholder={"type text here"} />
      <div className={classes.textBox}>
        <Typography variant="h4">Font #1 - </Typography>
        <Typography variant="h2" className={classes.blantickScript}>{text}</Typography>
      </div>
      <div className={classes.textBox}>
        <Typography variant="h4">Font #2 -</Typography>
        <Typography variant="h2" className={classes.foreFarmers}>{text}</Typography>
      </div>
      <div className={classes.textBox}>
        <Typography variant="h4">Font #3 -</Typography>
        <Typography variant="h2" className={classes.grestalScript}>{text}</Typography>
      </div>
      <div className={classes.textBox}>
        <Typography variant="h4">Font #4 -</Typography>
        <Typography variant="h2" className={classes.helloHoney}>{text}</Typography>
      </div>
      <div className={classes.textBox}>
        <Typography variant="h4">Font #5 -</Typography>
        <Typography variant="h2" className={classes.kaileyLatief}>{text}</Typography>
      </div>
      <div className={classes.textBox}>
        <Typography variant="h4">Font #6 -</Typography>
        <Typography variant="h2" className={classes.lifeStyle}>{text}</Typography>
      </div>
      <div className={classes.textBox}>
        <Typography variant="h4">Font #7 -</Typography>
        <Typography variant="h2" className={classes.octoberTwilight}>{text}</Typography>
      </div> 
      <div className={classes.textBox}>
        <Typography variant="h4">Font #8 -</Typography>
        <Typography variant="h2" className={classes.sunFlowers}>{text}</Typography>
      </div>  
      <div className={classes.textBox}>
        <Typography variant="h4">Font #9 -</Typography>
        <Typography variant="h2" className={classes.sweetHipster}>{text}</Typography>
      </div>
    </div>
  );
}

export default App;
