import { useFormContext } from "./SignupContext";
function MultiStepTracking() {
  const { TrackProgress } = useFormContext();
  return (
    <section className="w-full flex justify-center mb-20">
      <div className="w-full h-[2px] bg-gray-100 dark:bg-gray-800 max-w-[380px] flex items-center justify-between relative rounded-full">
        <div
          className="h-[2px] primary max-w-[380px] flex items-center justify-between absolute top-0 left-0 rounded-full"
          ref={TrackProgress}
          style={{ transition: ".4s linear", width: "0" }}
        ></div>
        <div className="w-[40px] h-[40px] primary rounded-full text-white flex items-center justify-center relative">
          1
        </div>
        <div
          className={`w-[40px] h-[40px] default-border rounded-full background flex items-center justify-center relative`}
          style={{ transition: ".3s linear" }}
        >
          2
        </div>
        <div
          className={`w-[40px] h-[40px] default-border rounded-full background flex items-center justify-center relative`}
          style={{ transition: ".3s linear" }}
        >
          3
        </div>
        <div
          className={`w-[40px] h-[40px] default-border rounded-full background flex items-center justify-center relative`}
          style={{ transition: ".3s linear" }}
        >
          4
        </div>
        <div
          className={`w-[40px] h-[40px] default-border rounded-full background flex items-center justify-center relative`}
          style={{ transition: ".3s linear" }}
        >
          5
        </div>
      </div>
    </section>
  );
}

export default MultiStepTracking;
