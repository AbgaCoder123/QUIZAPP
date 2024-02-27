import "../styles/popups.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import React, { useRef, useEffect } from "react";
import { PiCloudWarningFill } from "react-icons/pi";
import { TbFaceIdError } from "react-icons/tb";
import { TiInfoLarge } from "react-icons/ti";
interface Toaststype {
  toast_msg: string;
  toast_type: "success" | "error" | "warning" | "info" | undefined | string;
  Toast: boolean;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
}
const toast_properties = [
  {
    text: "success",
    text_color: "text-green-500",
    iconbg_color: "bg-green-500",
    icon: <IoMdCheckmarkCircleOutline />,
    body: "border-green-500 bg-green-100",
  },
  {
    text: "error",
    text_color: "text-red-500",
    iconbg_color: "bg-red-500",
    icon: <TbFaceIdError />,
    body: "border-red-500 bg-red-100",
  },
  {
    text: "warning",
    text_color: "text-amber-500",
    iconbg_color: "bg-amber-500",
    icon: <PiCloudWarningFill />,
    body: "border-amber-500 bg-amber-100",
  },
  {
    text: "info",
    text_color: "text-sky-500",
    iconbg_color: "bg-sky-500",
    icon: <TiInfoLarge />,
    body: "border-sky-500 bg-sky-100",
  },
];
function Toasts({ toast_msg, toast_type, Toast, setToast }: Toaststype) {
  const pop_toast = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      pop_toast.current?.classList.replace("popup_entrance", "popup_exit");
      setTimeout(() => {
        setToast(false);
      }, 600);
    }, 5000);
  }, [Toast]);
  return (
    <div className="w-full fixed z-20 top-5 max-w-[400px] left-1/2 -translate-x-1/2 max-sm:px-5">
      <div className="w-full popup_entrance" ref={pop_toast}>
        {toast_properties.map((toast_property, i) =>
          toast_property.text === toast_type ? (
            <div
              key={i}
              className={`w-full border rounded-lg  p-2 flex items-center ${toast_property.body}`}
            >
              <div
                className={`${toast_property.iconbg_color} flex-shrink-0 text-white text-lg w-[30px] h-[30px] rounded-lg flex items-center justify-center me-2`}
              >
                {toast_property.icon}
              </div>
              <div className={`${toast_property.text_color} w-full`}>
                <p>
                  <span className={`font-semibold capitalize`}>
                    {toast_type}:{" "}
                  </span>
                  <span
                    className={`text-xs text-center ${toast_property.text_color}`}
                  >
                    {toast_msg}
                  </span>
                </p>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Toasts;
