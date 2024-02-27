import React, {
  createContext,
  useState,
  useContext,
  useRef,
  ChangeEvent,
} from "react";
import { FormContextType } from "../../../reused-components/interfaces";

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider = ({ children }: { children: any }) => {
  const scrollForm = useRef<HTMLElement>(null);
  const TrackProgress = useRef<HTMLDivElement>(null);
  const [LevelOne, setLevelOne] = useState(true);
  const [LevelTwo, setLevelTwo] = useState(false);
  const [LevelThree, setLevelThree] = useState(false);
  const [LevelFour, setLevelFour] = useState(false);
  //   const [LevelFive, setLevelFive] = useState(false);
  const [Toast, setToast] = useState(false);
  const [Err, setErr] = useState({
    type: "",
    msg: "",
  });
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
    username: "",
    fullname: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const contextValue: FormContextType = {
    scrollForm,
    Toast,
    Err,
    setToast,
    setErr,
    LevelOne,
    setLevelOne,
    LevelTwo,
    setLevelTwo,
    LevelThree,
    setLevelThree,
    LevelFour,
    setLevelFour,
    Inputs,
    handleChange,
    TrackProgress,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
