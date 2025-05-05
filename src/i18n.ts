import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translation/en.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: en,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});
