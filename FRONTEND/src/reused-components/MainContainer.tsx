import React from "react";
interface MainContainerType {
  className?: string;
  children: React.ReactNode;
}
function MainContainer({ className, children }: MainContainerType) {
  return (
    <main
      className={`flex min-h-screen ${className} font-[quicksand] text-sm background max-sm:p-10`}
    >
      {children}
    </main>
  );
}

export default MainContainer;
