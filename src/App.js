import React, { Component } from "react";
import "./App.css";
import AccueilPanel from "./components/AccueilPanel";
import ContactPanel from "./components/ContactPanel";
import ShowReelPanel from "./components/ShowReelPanel";
import WorksPanels from "./components/WorksPanels";
import Nav from "./components/Nav";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <div className="container">
                    <AccueilPanel />
                    <ContactPanel />
                    <ShowReelPanel />
                    <WorksPanels />
                </div>
            </div>
        );
    }
}

export default App;
