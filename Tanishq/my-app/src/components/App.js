import React from "react";
import "./App.css";
import Person from "./Person";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Person name="Tanishq" about="Coding Enthusiast, Js Developer" />
      </div>
    );
  }
}
export default App;
