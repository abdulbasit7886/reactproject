import "./App.css";
import React, { Component } from "react";
import List from "./Component/list";
import Counter from "./Component/counter";
import Navbar from "./Component/header";
import InputText from "./Component/Input";

export const userContext=React.createContext()
class App extends Component {

  state = {
    
  };


  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
        <Counter />
        <br/>
        <List />
        <br/>        

        <userContext.Provider value={'basit'}>
          <InputText/>
        </userContext.Provider>
        <br/>
        </header>


      </div>
    );
  }
}
export default App;
