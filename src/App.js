import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import './App.css';
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  root: {
    flexGrow: 1,
        alignItems: 'justify',
        justifyContent: 'space-between',
        width: 1000,
  },
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
   h:0,
   w:0,
bmi:0,
val:"",
    }
    }
    hm=(event)=>
    {
      var z=event.target.value;
      this.setState({h:z});
    }
    hn=(event)=>
    {
      var z=event.target.value;
      this.setState({w:z});
       var y=this.state.h/100;
       var bm=z/(y*y);
    if(bm<18.5)
        {this.setState({val:<em class="em">underWeight &#128524;</em>});
    }
    else if(bm>=18.5 && bm<=24.9)
    {
      this.setState({val:<i class="h1">NormalWeight &#128522;</i>});
    }
    else if(bm>=25 && bm<=29.9){this.setState({val:<h1 class="ow">OverWeight &#128532;</h1>});}
    else if(bm>=30){this.setState({val:<h3 clas="h3">Obese &#x1F615;</h3>});}
        this.setState({bmi:bm});
    }

    hand=()=>
    {
      this.setState({bmi:0,h:0,w:0});
    }
  render() {
  const { classes } = this.props;
    return (
      <div className="App">
        
        <AppBar color="secondary" position="static">
          <i>Body Mass Index Calculator</i>
        </AppBar>
        <br /><br />
        <Button raised theme={{ roundness: 70 }} color="primary" variant="outlined">
       <h5 style={{color:"red"}}>BMI is {this.state.bmi}</h5>
    </Button>
        <br/><br/>
    <p>{this.state.val}</p>
    <br/><br/><TextField label="Height(in Cms)"  variant="outlined" type="number" max="250" value={this.state.h} onChange={this.hm}></TextField>
    <br/><br/>
    <TextField label="Weight(in Kgs)"  variant="outlined" type="number" max="400" value={this.state.w} onChange={this.hn}></TextField>
  <br/><br/> <Button onClick={this.hand} variant="contained" color="primary" >
  Reset</Button><br/><br/>
      </div>
    );
  }
}
export default withStyles(styles)(App); 
