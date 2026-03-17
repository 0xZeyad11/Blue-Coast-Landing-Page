import { useTranslation } from "react-i18next";
import logo from "../assets/app-logo.png";

function NavBar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);

    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <nav className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
      <div className="flex items-center gap-2">
        <img src={logo} alt="blue coast logo" className="h-12 w-auto" />

        <h1 className="text-xl font-bold">{t("title")}</h1>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        <a href="#about">{t("aboutUs")}</a>
        <a href="#about">{t("projects")}</a>
        <a href="#contact-form">{t("contact")}</a>
      </div>
      <button
        onClick={toggleLanguage}
        className="cursor-pointer rounded-md border px-3 py-1 text-sm hover:bg-blue-100"
      >
        {i18n.language === "en" ? "العربية" : "English"}
      </button>
    </nav>
  );
}

export default NavBar;
