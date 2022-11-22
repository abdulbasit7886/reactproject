import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment=()=>{
    this.setState({count:this.state.count + 1});
  }
  decrement=()=>{
    this.setState({count:this.state.count-1});
  }
  reset=()=>{
    this.setState({count:0});
  }
  render() {
    return (
      <>
        <Card sx={{ maxWidth: 345 }}>
          <Typography
            gutterBottom
            variant="h1"
            component="div"
            sx={{
              textAlign: "center",
              alignItems: "center",
            }}
          >
            {this.state.count}
          </Typography>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Counter
            </Typography>
          </CardContent>
          <CardActions>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button onClick={this.increment}>Increment</Button>
              <Button onClick={this.reset}>Reset</Button>
              <Button onClick={this.decrement}>Decrement</Button>
            </ButtonGroup>
          </CardActions>
        </Card>{" "}
      </>
    );
  }
}

export default Counter;
