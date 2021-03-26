import { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";

class App extends Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
      </div>
    );
  }
}

export default App;
