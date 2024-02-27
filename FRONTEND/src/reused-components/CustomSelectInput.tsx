import { useRef } from "react";

type CustomInputType = {
  label?: string;
  addtional_class?: string;
  err_msg?: React.ReactNode;
  value?: string | number | undefined;
  icon?: JSX.Element;
  children: React.ReactNode;
  name: string;
  onchange_event: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
};
function CustomSelectInput({
  label,
  addtional_class,
  err_msg,
  icon,
  onchange_event,
  value,
  name,
  children,
}: CustomInputType) {
  const select_holder = useRef<HTMLDivElement>(null);
  const icon_holder = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    select_holder.current?.classList.replace("myborder", "border-blue-700");
    icon_holder.current!.className = "text-blue-700";
  };
  const handleBlur = () => {
    select_holder.current?.classList.replace("border-blue-700", "myborder");
    icon_holder.current!.className = "onbackground_text";
  };

  return (
    <div className="w-full relative">
      <div className="mb-1 text-xs">{label}</div>
      <div
        ref={select_holder}
        className={`p-3 h-[47px] w-full surface flex flex-col rounded-full ${
          addtional_class || ""
        }`}
      >
        <div className="focus:outline-none bg-transparent border-0 flex center items-center">
          <div className="onbackground_text" ref={icon_holder}>
            {icon}
          </div>
          <select
            className="w-full px-2 focus:outline-none bg-transparent border-0 font-light text-[14px]"
            value={value}
            onChange={onchange_event}
            onFocus={handleFocus}
            onBlur={handleBlur}
            name={name}
          >
            {children}
          </select>
        </div>
      </div>
      <div className=" w-full items-center hidden justify-end text-xs text-red-500 absolute mt-1 lowercase">
        {err_msg}
      </div>
    </div>
  );
}

export default CustomSelectInput;
