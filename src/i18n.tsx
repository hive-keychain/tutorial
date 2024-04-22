import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "./translation/en/en.json";
import translationSpanish from "./translation/es/es.json";

//---Using translation
const resources = {
  en: {
    translation: translationEnglish,
  },
  es: {
    translation: translationSpanish,
  },
};

const LANGUAGE_DETECTION_OPTIONS = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lng",
};

i18next
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: LANGUAGE_DETECTION_OPTIONS,
    resources,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
  });

export default i18next;
