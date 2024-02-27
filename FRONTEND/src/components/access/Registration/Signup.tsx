import { ChangeEvent, useRef, useState } from "react";
import MainContainer from "../../../reused-components/MainContainer";
import Container from "./Container";
import LogoTitle from "./LogoTitle";
import MultiStepTracking from "./MultiStepTracking";
import FormSection from "./FormSection";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Toasts from "../../../reused-components/Toasts";
import { FormProvider, useFormContext } from "./SignupContext";

function Signup() {
  // const scrollForm = useRef<HTMLElement>(null);
  const [LevelTwo, setLevelTwo] = useState(false);
  const [LevelThree, setLevelThree] = useState(false);
  const [LevelFour, setLevelFour] = useState(false);
  // const [LevelFive, setLevelFive] = useState(false);

  return (
    <MainContainer className="flex items-center justify-center">
      <Container>
        <LogoTitle />
        <FormProvider>
          <MultiStepTracking />
          <FormSection>
            <StepOne />
            <StepTwo />
            <StepThree
              LevelThree={LevelThree}
              setLevelThree={setLevelThree}
              setLevelTwo={setLevelTwo}
            />
            <StepFour
              LevelFour={LevelFour}
              setLevelFour={setLevelFour}
              setLevelThree={setLevelThree}
            />
          </FormSection>
        </FormProvider>
      </Container>
    </MainContainer>
  );
}

export default Signup;
