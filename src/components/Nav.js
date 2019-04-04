import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class Nav extends Component {
    render() {
        const { t } = this.props;
        return (
            <nav className="mainNav">
                <a href="">{t("accueil")}</a>
                <a href="">{t("contact")}</a>
                <a href="">{t("projets_recents")}</a>
                <a href="">{t("contact")}</a>
            </nav>
        );
    }
}
export default withTranslation()(Nav);
