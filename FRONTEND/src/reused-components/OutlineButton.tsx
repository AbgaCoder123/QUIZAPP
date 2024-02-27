
type ButtonType = {
    addtional_class?: string;
    btn_text: string;
    icon?: JSX.Element;
    type:"submit" | "reset" | "button" | undefined,
    onclick_event?: (e: React.ChangeEvent<any>) => void;
  };
  function OutlineButton({
    addtional_class,
    btn_text,
    icon,
    type = "submit",
    onclick_event,
  }: ButtonType) {
    return (
      <button
        className={`p-3 h-[48px] focus:outline-none primary-text flex rounded-full font-bold primary-border items-center   justify-center ${addtional_class}`}
        onClick={onclick_event}
        type={type}
      >
        <div>{icon}</div>
        <div>{btn_text}</div>
      </button>
    );
  }
  
  export default OutlineButton;
  