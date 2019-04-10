import React, { Component } from "react";

export default class AccueilPanel extends Component {
    componentDidMount() {}

    render() {
        return (
            <section id="home" className="accueil">
                <div className="logoContainer">
                    <h1 className="logo" data-logo="Maxime Lacasse Germain">
                        Maxime Lacasse Germain
                    </h1>
                </div>
            </section>
        );
    }
}
