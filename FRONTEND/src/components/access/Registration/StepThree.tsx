import React from "react";
import { BiShapeCircle } from "react-icons/bi";
import CustomButton from "../../../reused-components/CustomButton";

function StepThree({
  LevelThree,
  setLevelThree,
  setLevelTwo,
}: {
  LevelThree: boolean;
  setLevelThree: React.Dispatch<React.SetStateAction<boolean>>;
  setLevelTwo: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    LevelThree && (
      <div className="w-full snap-start" style={{ flex: "0 0 100%" }}>
        <div className="w-full space-y-2 mb-10">
          <p className="text-center heading-1 font-bold">Choose Topics</p>
          <p className="text-center surface-text">
            Some topics you like to see in the quiz application
          </p>
        </div>
        <div className="w-full grid grid-cols-1 gap-3">
          <div className="p-5 default-border rounded-md flex items-center gap-5 cursor-pointer">
            <div className="w-[40px] h-[40px] surface rounded-md flex items-center justify-center text-lg surface-text flex-shrink-0">
              <BiShapeCircle />
            </div>
            <div>Mathematics</div>
          </div>
          <div className="p-5 default-border rounded-md flex items-center gap-5 cursor-pointer">
            <div className="w-[40px] h-[40px] surface rounded-md flex items-center justify-center text-lg surface-text flex-shrink-0">
              <BiShapeCircle />
            </div>
            <div>English</div>
          </div>
          <div className="p-5 default-border rounded-md flex items-center gap-5 cursor-pointer">
            <div className="w-[40px] h-[40px] surface rounded-md flex items-center justify-center text-lg surface-text flex-shrink-0">
              <BiShapeCircle />
            </div>
            <div>Anatomy</div>
          </div>
          <div className="p-5 default-border rounded-md flex items-center gap-5 cursor-pointer">
            <div className="w-[40px] h-[40px] surface rounded-md flex items-center justify-center text-lg surface-text flex-shrink-0">
              <BiShapeCircle />
            </div>
            <div>Software Development</div>
          </div>
          <CustomButton btn_text="Proceed" type="submit" className="mt-10" />
        </div>
      </div>
    )
  );
}

export default StepThree;
