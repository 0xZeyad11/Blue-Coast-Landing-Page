import { useTranslation } from "react-i18next";
import { LuPhoneCall, LuMail, LuSearch } from "react-icons/lu";
import LabeledInput from "../components/LabeledInput";

function ContactSection() {
  const { t } = useTranslation();

  return (
    <div
      className="mt-10 flex flex-col gap-3 bg-blue-50 py-10 md:flex-row md:items-start lg:flex-row"
      id="contact-form"
    >
      <div>
        <div className="flex-col items-center justify-center gap-4 px-2">
          <h1 className="text-start text-xl font-bold md:text-2xl">
            {t("contactUs.title")}
          </h1>
          <br />
          <h2 className="text-md text-start text-gray-600">
            {t("contactUs.description")}
          </h2>

          <div className="mt-10 flex flex-col gap-4">
            <LabeledIcon
              label={t("contactUs.callus")}
              icon={<LuPhoneCall color="rgb(255,255,255)" size={20} />}
              value="+20120001221"
            />
            <LabeledIcon
              label={t("contactUs.emailus")}
              icon={<LuMail color="rgb(255,255,255)" size={20} />}
              value="blueCoast@industries.com"
            />
            <LabeledIcon
              label={t("contactUs.headquarters.title")}
              icon={<LuSearch color="rgb(255,255,255)" size={20} />}
              value={t("contactUs.headquarters.address")}
            />
          </div>
        </div>
      </div>
      <div className="mx-2">
        <Form
          name={t("form.name")}
          phone={t("form.phone")}
          email={t("form.email")}
          projectDescription={t("form.project")}
          sendButton={t("form.send")}
        />
      </div>
    </div>
  );
}
export default ContactSection;

type LabeledIconProps = {
  label: string;
  value: string;
  icon: React.ReactNode;
};
function LabeledIcon({ label, value, icon }: LabeledIconProps) {
  return (
    <div className="flex flex-row items-start gap-3">
      <div className="w-fit rounded-xl bg-blue-700 p-3">{icon}</div>
      <div className="flex flex-col gap-1">
        <p className="text-md text-start text-gray-500">{label}</p>
        <p className="text-md text-center font-bold">{value}</p>
      </div>
    </div>
  );
}

type FormProps = {
  name: string;
  phone: string;
  email: string;
  projectDescription: string;
  sendButton: string;
};
function Form({
  name,
  phone,
  email,
  projectDescription,
  sendButton,
}: FormProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white px-4 pt-5 pb-20 shadow-md">
      <div className="flex flex-col gap-3 md:flex-row">
        <LabeledInput label={name} />
        <LabeledInput label={phone} />
      </div>
      <LabeledInput label={email} />

      <div className="flex flex-col gap-1">
        <label className="md:text-md text-start text-sm text-gray-600">
          {projectDescription}
        </label>
        <textarea className="h-[100px] resize-none rounded-lg border-1 border-gray-300 px-2 py-1 focus:border-blue-500 focus:outline-0" />
      </div>
      <button className="text-md h-[50px] w-[100px] self-center rounded-xl bg-blue-500 font-bold text-white">
        {sendButton}
      </button>
    </div>
  );
}
