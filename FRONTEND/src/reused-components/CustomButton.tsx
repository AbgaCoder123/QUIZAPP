type ButtonType = {
  className?: string;
  btn_text: string;
  icon?: JSX.Element;
  type: "submit" | "reset" | "button" | undefined;
  onclick_event?: (e: React.ChangeEvent<any>) => void;
};
function CustomButton({
  className,
  btn_text,
  icon,
  type = "submit",
  onclick_event,
}: ButtonType) {
  return (
    <button
      className={`p-3 h-[48px] focus:outline-none text-zinc-50 hover:opacity-90 transition ease-linear flex rounded-md font-bold primary items-center justify-center gap-3 ${className}`}
      onClick={onclick_event}
      type={type}
    >
      {icon && <div>{icon}</div>}

      <div>{btn_text}</div>
    </button>
  );
}

export default CustomButton;
