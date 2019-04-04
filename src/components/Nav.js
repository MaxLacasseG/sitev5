import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class Nav extends Component {
    render() {
        const { t } = this.props;
        return (
            <nav className="mainNav">
                <a href="#home">{t("accueil")}</a>
                <a href="#contact">{t("contact")}</a>
                <a href="#works">{t("projets_recents")}</a>
                <a href="#showreel">{t("showreel")}</a>
            </nav>
        );
    }
}
export default withTranslation()(Nav);
