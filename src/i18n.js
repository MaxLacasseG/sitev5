import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            accueil: "Home",
            contact: "Contact",
            projets_recents: "Recent works",
            showreel: "Showreel"
        }
    },
    fr: {
        translation: {
            accueil: "Accueil",
            contact: "Contact",
            projets_recents: "Projets",
            showreel: "Démo vidéo"
        }
    }
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
