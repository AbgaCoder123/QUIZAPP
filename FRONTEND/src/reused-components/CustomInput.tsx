type CustomInputType = {
  label?: string;
  className?: string;
  // err_msg?: React.ReactNode;
  placeholder?: string;
  input_type: string;
  icon?: JSX.Element;
  value?: string | number;
  name: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  onchange_event: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function CustomInput({
  label,
  className,
  // err_msg,
  input_type,
  name,
  value,
  onchange_event,
  placeholder,
  inputRef,
}: CustomInputType) {
  return (

    <div className="relative w-full">
      <div className="mb-2 text-xs font-bold surface-text">{label}</div>
      <input
       type={input_type}
        placeholder={placeholder}
        name={name}
        defaultValue={value}
        ref={inputRef}
        onChange={onchange_event}
        className={`w-full py-3 px-5 h-[48px] text-sm focus:outline-none bg-transparent rounded-md default-border border focus:border-purple-700 dark:focus:border-cyan-500 focus:ring focus:ring-purple-700/30 dark:focus:ring-cyan-500/30 ${className}`}
      />
    </div>
  );
}

export default CustomInput;
