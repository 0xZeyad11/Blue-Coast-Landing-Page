type LabeledInputProps = {
  label: string;
  type?: string;
};
function LabeledInput({ label, type }: LabeledInputProps) {
  return (
    <div className="flex flex-col justify-center gap-1">
      <label className="md:text-md text-start text-sm text-gray-600">
        {label}
      </label>
      <input
        type={type ?? "text"}
        className="h-[30px] rounded-lg border-1 border-gray-300 p-2 focus:border-blue-600 focus:outline-0"
      />
    </div>
  );
}

export default LabeledInput;
