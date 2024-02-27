import { ChangeEvent } from "react";
import CustomButton from "../../../reused-components/CustomButton";
import CustomInput from "../../../reused-components/CustomInput";
import CustomFetch from "../../../reused-components/CustomFetch";
import { useFormContext } from "./SignupContext";
import Toasts from "../../../reused-components/Toasts";

function StepOne() {
  const {
    scrollForm,
    Toast,
    Err,
    setToast,
    setErr,
    TrackProgress,
    LevelOne,
    setLevelOne,
    setLevelTwo,
    Inputs,
    handleChange,
  } = useFormContext();

  const PostStepOne = async () => {
    const { email, password } = Inputs;
    const result = await CustomFetch("api/register/step1", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.status === "error") {
      setToast(true);
      setErr({ type: result.status, msg: result.msg });
    } else {
      setLevelTwo(true);
      setTimeout(() => {
        TrackProgress.current!.style.width = "25%";
        scrollForm.current!.scrollLeft += scrollForm.current!.clientWidth;
      }, 100);
      setTimeout(() => {
        TrackProgress.current!.parentElement!.children[2].classList.replace(
          "default-border",
          "primary"
        );
        setLevelOne(false);
      }, 500);
    }
  };
  const handleSubmit = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (Inputs.email === "" || Inputs.password === "") {
      setToast(true);
      setErr({ type: "error", msg: "All field are required" });
    } else {
      PostStepOne();
    }
  };
  return (
    LevelOne && (
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
              Welcome First things first....
            </p>
            <p className="text-center surface-text">
              You can always change them later
            </p>
          </div>
          <form className="flex flex-col gap-5" autoComplete="off">
            <CustomInput
              label="Working Email"
              name="email"
              value={Inputs.email}
              placeholder="example@gmail.com"
              input_type="text"
              onchange_event={handleChange}
            />
            <CustomInput
              label="Your password"
              name="password"
              value={Inputs.password}
              placeholder="John1237"
              input_type="password"
              onchange_event={handleChange}
            />
            <CustomButton
              btn_text="Proceed"
              type="submit"
              className="mt-10"
              onclick_event={handleSubmit}
            />
          </form>
        </div>
      </>
    )
  );
}

export default StepOne;
