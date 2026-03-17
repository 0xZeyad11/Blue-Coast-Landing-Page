type DetailedCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function DetailedCard({ title, description, icon }: DetailedCardProps) {
  return (
    <div className="flex w-[300px] flex-col gap-3 rounded-2xl border-1 border-white bg-white px-3 py-4 hover:border-blue-500">
      <div className="justify-start">{icon}</div>
      <div className="items-center justify-center">
        <h1 className="text-center text-lg font-bold text-wrap">{title}</h1>
        <br />
        <h1 className="text-center text-sm text-gray-700">{description}</h1>
      </div>
    </div>
  );
}

export default DetailedCard;
