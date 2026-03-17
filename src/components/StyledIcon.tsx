type StyledIconProps = {
  icon: React.ReactNode;
};
const StyledIcon = ({ icon }: StyledIconProps) => {
  return (
    <div className="w-fit rounded-lg bg-blue-200/60 px-3 py-3">{icon}</div>
  );
};
export default StyledIcon;
