import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[400px] h-full flex flex-col items-center justify-center md:py-10">
      {children}
    </div>
  );
}

export default Container;
