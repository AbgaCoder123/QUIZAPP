import { ChangeEvent, useRef, useState } from "react";
import CustomButton from "../../../reused-components/CustomButton";
import CustomInput from "../../../reused-components/CustomInput";
import CustomFetch from "../../../reused-components/CustomFetch";
import Toasts from "../../../reused-components/Toasts";
import { useFormContext } from "./SignupContext";

function StepTwo() {
  const {
    scrollForm,
    Toast,
    Err,
    setToast,
    setErr,
    TrackProgress,
    LevelTwo,
    setLevelTwo,
    setLevelThree,
    Inputs,
    handleChange,
  } = useFormContext();
  const avatar = useRef<HTMLImageElement>(null);
  const [ProfileImg, setProfileImg] = useState(false);
  const uploadAvatar = async (data: any, previous_avatar: string) => {
    const formData = new FormData();
    console.log(data);
    formData.append(`avatar`, data);
    const result = await CustomFetch(
      `api/upload-avatar?prev_avatar=${previous_avatar}`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (result.status === "error") {
      setToast(true);
      setErr({ type: result.status, msg: result.msg });
    } else {
      localStorage.previous_avatar = result.msg;
      setProfileImg(true);
      setTimeout(() => {
        avatar.current!.src = URL.createObjectURL(data);
      }, 50);
    }
  };

  const handleAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    const img = Array.from(selectedFiles as FileList);
    console.log(selectedFiles, img);
    if (img.length > 0) {
      if (!img[0].type.startsWith("image/")) {
        setToast(true);
        setErr({ type: "error", msg: "Invalid Image type" });
      } else if (
        img[0].size > 5 * 1024 * 1024 &&
        img[0].type.startsWith("image/")
      ) {
        setToast(true);
        setErr({ type: "warning", msg: "File too large" });
      } else {
        const previous_avatar = localStorage.previous_avatar
          ? localStorage.previous_avatar
          : "";
        uploadAvatar(img[0], previous_avatar);
      }
    }
  };
  const removeAvatar = async () => {
    const previous_avatar = localStorage.previous_avatar
      ? localStorage.previous_avatar
      : "";
    const result = await CustomFetch(
      `api/remove-avatar?prev_avatar=${previous_avatar}`,
      {
        method: "POST",
      }
    );
    if (result.status === "error") {
      setToast(true);
      setErr({ type: result.status, msg: result.msg });
    } else {
      localStorage.previous_avatar = "";
      avatar.current!.src = "";
      setTimeout(() => {
        setProfileImg(false);
      }, 50);
    }
  };
  const PostStepTwo = async () => {
    const { username, fullname } = Inputs;
    const result = await CustomFetch("api/register/step2", {
      method: "POST",
      body: JSON.stringify({ username, fullname }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.status === "error") {
      setToast(true);
      setErr({ type: result.status, msg: result.msg });
    } else {
      setLevelThree(true);
      setTimeout(() => {
        const currLength = parseInt(TrackProgress.current!.style.width) + 25;
        TrackProgress.current!.style.width = currLength + "%";
        scrollForm.current!.scrollLeft += scrollForm.current!.clientWidth;
      }, 100);
      setTimeout(() => {
        TrackProgress.current!.parentElement!.children[3].classList.replace(
          "default-border",
          "primary"
        );
        setLevelTwo(false);
      }, 500);
    }
  };
  const handleSubmit = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (Inputs.username === "" || Inputs.fullname === "") {
      setToast(true);
      setErr({ type: "error", msg: "All field are required" });
    } else {
      PostStepTwo();
    }
  };
  return (
    LevelTwo && (
      <>
        {Toast && (
          <Toasts
            toast_type={Err.type}
            toast_msg={Err.msg}
            Toast={Toast}
            setToast={setToast}
          />
        )}
        <div className="w-full snap-start" style={{ flex: "0 0 100%" }}>
          <div className="w-full space-y-2 mb-10">
            <p className="text-center heading-1 font-bold">
              Tell us about you....
            </p>
            <p className="text-center surface-text">
              Some basic details to get started
            </p>
          </div>
          <form className="flex flex-col gap-5" autoComplete="off">
            <div className="w-full flex items-center gap-5">
              <div className="w-[120px] p-2 h-[120px] rounded-md surface flex-shrink-0 flex items-center justify-center">
                {!ProfileImg ? (
                  <div className="text-center font-bold">
                    Avatar <br></br>
                    <span className="surface-text">(Optional)</span>
                  </div>
                ) : (
                  <div className="w-full h-full rounded-md object-cover">
                    <img
                      src=""
                      alt=""
                      className="object-cover w-full h-full"
                      ref={avatar}
                    />
                  </div>
                )}
              </div>
              <input
                type="file"
                id="avatar"
                hidden
                onChange={(e) => handleAvatar(e)}
              />
              <div className="flex items-center flex-col gap-5 w-full">
                <label htmlFor="avatar" className="w-full">
                  <div className="w-full h-[48px] rounded-md primary flex items-center justify-center cursor-pointer text-white">
                    Change
                  </div>
                </label>
                <div
                  onClick={removeAvatar}
                  className="w-full h-[48px] rounded-md default-border flex items-center cursor-pointer justify-center surface-text"
                >
                  Remove
                </div>
              </div>
            </div>
            <CustomInput
              label="Username"
              name="username"
              value={Inputs.username}
              placeholder="ben123"
              input_type="text"
              onchange_event={handleChange}
            />
            <CustomInput
              label="Full name"
              name="fullname"
              value={Inputs.fullname}
              placeholder="Bernard Godsgift"
              input_type="text"
              onchange_event={handleChange}
            />
            <CustomButton
              btn_text="Proceed"
              type="submit"
              className="mt-10"
              onclick_event={(e) => {
                handleSubmit(e);
              }}
            />
          </form>
        </div>
      </>
    )
  );
}

export default StepTwo;
