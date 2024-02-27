import React from "react";
import { useFormContext } from "./SignupContext";

function FormSection({ children }: { children: React.ReactNode }) {
  const { scrollForm } = useFormContext();
  return (
    <section
      className="w-full flex overflow-x-hidden snap-mandatory px-2 gap-5 transition-all"
      ref={scrollForm}
    >
      {children}
    </section>
  );
}

export default FormSection;
