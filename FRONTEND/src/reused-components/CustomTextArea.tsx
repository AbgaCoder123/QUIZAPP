import { useRef } from "react";

type CustomTextAreaType = {
  label?: string;
  addtional_class?: string;
  err_msg: React.ReactNode;
  placeholder?: string;
  icon?: JSX.Element;
  value?: string | number;
  name: string;
  onchange_event: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
function CustomTextArea({
  label,
  addtional_class,
  err_msg,
  icon,
  name,
  value,
  onchange_event,
  placeholder,
}: CustomTextAreaType) {
  const input_holder = useRef<HTMLDivElement>(null);
  const icon_holder = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    input_holder.current?.classList.add("primary-border");
    icon_holder.current!.className = "text-blue-700";``
  };
  const handleBlur = () => {
    input_holder.current?.classList.remove("primary-border");
    icon_holder.current!.className = "";
  };

  return (
    <div className="w-full ">
      <div className="mb-1 text-xs capitalize">{label}</div>
      <div
        ref={input_holder}
        className={`p-3 h-[48px] surface flex flex-col gap-5 rounded-full relative ${
          addtional_class || ""
        }`}
      >
        <div className="focus:outline-none flex center items-center">
          <div className="onbackground_text" ref={icon_holder}>
            {icon}
          </div>
          <textarea
            className="w-full h-full px-2 focus:outline-none bg-transparent border-0 text-[14px]"
            placeholder={placeholder}
            defaultValue={value}
            name={name}
            onChange={onchange_event}
            onFocus={handleFocus}
            onBlur={handleBlur}
          > </textarea>
        </div>
        <div className=" w-full items-center hidden justify-end text-xs text-red-500">
          {err_msg}
        </div>
      </div>
    </div>
  );
}

export default CustomTextArea;
