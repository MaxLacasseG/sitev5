import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AccueilPanel from "./components/AccueilPanel";
import Nav from "./components/Nav";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <AccueilPanel />
            </div>
        );
    }
}

export default App;
