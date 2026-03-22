import StyledIcon from "./StyledIcon";

type SimpleCardProps = {
  icon: React.ReactNode;
  text: string;
};

function SimpleCard({ icon, text }: SimpleCardProps) {
  return (
    <div className="flex min-h-[140px] w-full max-w-[300px] flex-col items-center justify-center gap-2 rounded-xl px-3 pt-2 pb-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <StyledIcon icon={icon} />
      <p className="text-md text-center font-bold text-black">{text}</p>
    </div>
  );
}

export default SimpleCard;
