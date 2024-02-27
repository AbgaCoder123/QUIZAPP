import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { domain } from "../../../reused-components/domain";
import MainContainer from "../../../reused-components/MainContainer";
import Container from "../../../reused-components/Container";
import CustomInput from "../../../reused-components/CustomInput";
import CustomButton from "../../../reused-components/CustomButton";
import Accesstitle from "../../../reused-components/Accesstitle";
function CreateNewPassword() {
  const [Inputs, setInputs] = useState({
    password: "",
    confirm_password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const handleSubmit = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (Inputs.password === "" || Inputs.confirm_password === "") {
      alert("All field are required");
    } else {
      createnewpassword();
    }
  };
  async function createnewpassword() {
    const response = await fetch(
      `${domain}/api/access/reset_password/new_password`,
      {
        method: "post",
        body: JSON.stringify({ ...Inputs, token: localStorage.resetToken }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.text();
    if (response.ok) {
      console.log(result);
      window.location.href = "/user/request-vendor";
    } else {
      console.log(result);
    }
  }
  return (
    <MainContainer addtional_class="flex items-center overflow-hidden relative">
      <div className="w-full absolute -top-[170px] -left-[150px]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#1AB65C"
            className=""
            d="M40.7,-58.3C52.9,-55.6,62.9,-44.4,69.6,-31.3C76.2,-18.2,79.6,-3.1,69.7,4.4C59.8,11.9,36.7,11.8,27.1,24.3C17.5,36.8,21.5,61.8,16.3,70C11.1,78.1,-3.3,69.2,-16.5,62.5C-29.7,55.8,-41.7,51.1,-53.5,43.2C-65.4,35.2,-77.2,24,-78,11.9C-78.7,-0.3,-68.4,-13.4,-58.6,-23.4C-48.8,-33.4,-39.5,-40.2,-29.8,-44.1C-20.1,-47.9,-10.1,-48.9,2.1,-52.2C14.3,-55.5,28.6,-61.1,40.7,-58.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <Container addtional_class="gap-5 flex flex-col items-center justify-center">
        <Accesstitle text={<p>Create new password</p>} />
        <form className="flex flex-col gap-5 w-full" autoComplete="off">
          <CustomInput
            value={Inputs.password}
            name="password"
            placeholder="New password"
            err_msg="Password is required"
            input_type="password"
            onchange_event={handleChange}
          />
          <CustomInput
            value={Inputs.confirm_password}
            name="confirm_password"
            placeholder="Confirm password"
            err_msg="confirm is required"
            input_type="password"
            onchange_event={handleChange}
          />
          <CustomButton
            btn_text={"Create new password"}
            type="submit"
            addtional_class="mt-5"
            onclick_event={(e) => handleSubmit(e)}
          />
        </form>
        <div className="flex w-full items-center gap-3 justify-center mt-5 relative z-10">
          <div className="">
            <div className="flex gap-1">
              <div>Remember Password?</div>
              <Link to={"/"} className="primary-text font-bold">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full absolute bottom-[-220px] -right-[150px] z-1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#1AB65C"
            d="M33,-52C38.6,-47.7,36.1,-31.5,44.4,-18.7C52.6,-5.9,71.6,3.6,75.3,14.2C79,24.7,67.3,36.4,56.8,49.9C46.2,63.5,36.9,78.8,27.1,72.8C17.2,66.8,6.8,39.4,-7.1,31.8C-21,24.2,-38.5,36.3,-52.5,36.4C-66.6,36.5,-77.2,24.6,-82.3,9.9C-87.5,-4.8,-87.1,-22.2,-80,-35.9C-72.8,-49.7,-58.8,-59.8,-44.4,-60C-29.9,-60.2,-15,-50.5,-0.6,-49.6C13.7,-48.6,27.4,-56.2,33,-52Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </MainContainer>
  );
}

export default CreateNewPassword;
