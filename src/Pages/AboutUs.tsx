import { useTranslation } from "react-i18next";
import DetailedCard from "../components/DetailedCard";
import { LuFactory, LuBuilding, LuCog } from "react-icons/lu";
import StyledIcon from "../components/StyledIcon";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <div
      className="mb-3 flex flex-col items-center justify-center gap-5 bg-gray-100"
      id="about"
    >
      <div className="mt-3 flex flex-col items-center">
        <h1 className="text-3xl font-bold">{t("whatWeDo.header")}</h1>
        <hr className="mt-4 w-[50%] border-3 border-blue-700" />
      </div>
      <div className="flex flex-col flex-wrap justify-around gap-4 md:flex-row md:flex-wrap md:px-3 lg:flex-row">
        <DetailedCard
          icon={<StyledIcon icon={<LuFactory color="rgb(0,0,255)" />} />}
          title={t("whatWeDo.card1.title")}
          description={t("whatWeDo.card1.description")}
        />
        <DetailedCard
          icon={<StyledIcon icon={<LuBuilding color="rgb(0,0,255)" />} />}
          title={t("whatWeDo.card2.title")}
          description={t("whatWeDo.card2.description")}
        />
        <DetailedCard
          icon={<StyledIcon icon={<LuCog color="rgb(0,0,255)" />} />}
          title={t("whatWeDo.card3.title")}
          description={t("whatWeDo.card3.description")}
        />
      </div>
      <hr className="w-full border-gray-300" />
    </div>
  );
}
export default AboutUs;
