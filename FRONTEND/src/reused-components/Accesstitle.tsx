import Logo from "./Logo";

function Accesstitle({text}:{text:JSX.Element}) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-1 mb-5">
      <Logo color={""} />
      <div className={`text-xl font-bold`}>
        <div className="">
          {text}
        </div>
      </div>
    </div>
  );
}

export default Accesstitle;
