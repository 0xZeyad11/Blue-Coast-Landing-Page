import { useTranslation } from "react-i18next";
import SimpleCard from "../components/SimpleCard";
import { LuBuilding, LuHouse, LuFactory } from "react-icons/lu";

function Clients() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center gap-3" id="clients">
      <div>
        <h1 className="text-center text-3xl font-bold">{t("clients.title")}</h1>
        <br />
        <h2 className="text-center text-gray-600">
          {t("clients.description")}
        </h2>
      </div>

      <div className="flex flex-col gap-3 md:flex-row lg:flex-row">
        <SimpleCard
          icon={<LuBuilding color="rgb(0,0,255)" />}
          text={t("clients.card1")}
        />
        <SimpleCard
          icon={<LuFactory color="rgb(0,0,255)" />}
          text={t("clients.card2")}
        />
        <SimpleCard
          icon={<LuHouse color="rgb(0,0,255)" />}
          text={t("clients.card3")}
        />
      </div>
    </div>
  );
}

export default Clients;
