import StyledIcon from "./StyledIcon";

type SimpleCardProps = {
  icon: React.ReactNode;
  text: string;
};

function SimpleCard({ icon, text }: SimpleCardProps) {
  return (
    <div className="flex h-[100px] w-[300px] flex-col items-center justify-center gap-2 rounded-xl px-3 py-2 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <StyledIcon icon={icon} />
      <br />
      <p className="text-md text-center font-bold text-black">{text}</p>
    </div>
  );
}

export default SimpleCard;
