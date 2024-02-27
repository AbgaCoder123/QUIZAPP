import { BiLoaderAlt } from "react-icons/bi";
import "../styles/popups.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import React, { useState, useRef, useEffect } from "react";
import { PiCloudWarningFill } from "react-icons/pi";
import { TbFaceIdError } from "react-icons/tb";
import { TiInfoLarge } from "react-icons/ti";
import CustomButton from "./CustomButton";
interface Popuptype {
  popup_msg: string;
  popup_type:
    | "success!"
    | "error!"
    | "warning!"
    | "info!"
    | "processing!"
    | string;
  btn_text: string;
  onchange_event?: (e: React.ChangeEvent<HTMLButtonElement> | any) => void;
}

const popup_properties = [
  {
    text: "success!",
    text_color: "text-green-500",
    btn_color: "!bg-green-500",
    icon: <IoMdCheckmarkCircleOutline />,
  },
  {
    text: "error!",
    text_color: "text-red-500",
    btn_color: "!bg-red-500",
    icon: <TbFaceIdError />,
  },
  {
    text: "warning!",
    text_color: "text-amber-500",
    btn_color: "!bg-amber-500",
    icon: <PiCloudWarningFill />,
  },
  {
    text: "info!",
    text_color: "text-sky-500",
    btn_color: "!bg-sky-500",
    icon: <TiInfoLarge />,
  },
  {
    text: "processing!",
    text_color: "text-sky-500",
    btn_color: "!bg-sky-500",
    icon: <BiLoaderAlt />,
  },
];

function Popups({
  popup_msg,
  popup_type,
  btn_text,
  onchange_event,
}: Popuptype) {
  const pop_container = useRef<HTMLDivElement>(null);
  const [Popup, setPopup] = useState(true);
  const handleClick = () => {
    pop_container.current?.classList.replace("popup_entrance", "popup_exit");
    setTimeout(() => {
      setPopup(false);
      document.body.classList.remove("overflow-hidden");
    }, 650);
  };
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);
  return (
    Popup && (
      <section className="w-full h-screen fixed top-0 font-[poppins] bottom-0 flex items-center justify-center">
        <div
          className="w-full h-screen fixed top-0 bottom-0 bg-black opacity-90 z-[-1]"
          onClick={onchange_event ? undefined : handleClick}
        ></div>
        <div
          className="max-w-[300px] h-[350px] w-full py-5 px-8 background rounded-xl popup_entrance flex flex-col items-center justify-center gap-4"
          ref={pop_container}
        >
          {popup_properties.map((popup_property, i) =>
            popup_property.text === popup_type ? (
              <React.Fragment key={i}>
                <div
                  className={`text-8xl ${popup_property.text_color} ${
                    popup_property.text === "processing!" && "animate-spin"
                  }`}
                >
                  {popup_property.icon}
                </div>
                <div
                  className={`${popup_property.text_color} text-xl font-bold uppercase`}
                >
                  {popup_type}
                </div>
                <div>
                  <p className="text-xs text-center">{popup_msg}</p>
                </div>
                <CustomButton
                  btn_text={btn_text}
                  addtional_class={`!rounded-full ${popup_property.btn_color} w-full uppercase`}
                  type="button"
                  onclick_event={onchange_event ? onchange_event : handleClick}
                />
              </React.Fragment>
            ) : (
              ""
            )
          )}
        </div>
      </section>
    )
  );
}

export default Popups;
