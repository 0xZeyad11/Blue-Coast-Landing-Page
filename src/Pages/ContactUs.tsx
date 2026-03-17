import Hero2 from "../assets/hero-2.png";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t, i18n } = useTranslation();

  return (
    <div className="mt-6 flex justify-center px-4" id="contact">
      <div className="relative w-full max-w-6xl">
        <img src={Hero2} className="h-auto w-full rounded-3xl" />

        <div className="absolute inset-0 rounded-3xl bg-black/60"></div>

        {/* Hero Text */}
        {i18n.language === "ar" ? (
          <div className="absolute start-4 top-1/2 -translate-y-1/2 text-white sm:start-8 lg:start-10">
            <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              {t("hero1.line1")}
            </h1>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              {t("hero1.line2")}
            </h1>
          </div>
        ) : (
          <div className="absolute start-4 top-1/2 -translate-y-1/2 text-white sm:start-8 lg:start-10">
            <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              {t("hero1.line1")}
            </h1>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              {t("hero1.line2")}
            </h1>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              {t("hero1.line3")}
            </h1>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              {t("hero1.line4")}
            </h1>
          </div>
        )}

        <div className="absolute start-4 -bottom-14 flex gap-4 sm:start-6 sm:bottom-8 lg:start-18 lg:bottom-16">
          <a
            href="#contact-form"
            className="rounded-xl bg-blue-800 px-4 py-3 text-sm font-bold text-white hover:bg-blue-900 sm:text-base"
          >
            {t("contact")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
