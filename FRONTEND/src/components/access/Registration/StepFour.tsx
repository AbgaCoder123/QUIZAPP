import React from "react";
import { BiShapeCircle } from "react-icons/bi";
import CustomButton from "../../../reused-components/CustomButton";

function StepFour({
  LevelFour,
  setLevelFour,
  setLevelThree,
}: {
  LevelFour: boolean;
  setLevelFour: React.Dispatch<React.SetStateAction<boolean>>;
  setLevelThree: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    LevelFour && (
      <div className="w-full snap-start" style={{ flex: "0 0 100%" }}>
        <div className="w-full space-y-2 mb-10">
          <p className="text-center heading-1 font-bold">
            Preferred theme best you...
          </p>
          <p className="text-center surface-text">
            We streamline a best setup experience accordingly
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-5">
          <div className="p-5 default-border rounded-md flex flex-col justify-center items-start gap-3 cursor-pointer">
            <div className="w-[40px] h-[40px] surface rounded-md flex items-center justify-center text-lg surface-text flex-shrink-0">
              <BiShapeCircle />
            </div>
            <div className="font-bold mt-2">Dark theme</div>
            <p className="surface-text">
              See more clearly, think more better, stay active
            </p>
          </div>
          <div className="p-5 default-border rounded-md flex flex-col justify-center items-start gap-3 cursor-pointer">
            <div className="w-[40px] h-[40px] surface rounded-md flex items-center justify-center text-lg surface-text flex-shrink-0">
              <BiShapeCircle />
            </div>
            <div className="font-bold mt-2">Light theme</div>
            <p className="surface-text">
              Stay focused, proper insight and better strategies..
            </p>
          </div>
        </div>
        <CustomButton
          btn_text="Proceed"
          type="submit"
          className="mt-10 w-full"
        />
      </div>
    )
  );
}

export default StepFour;
