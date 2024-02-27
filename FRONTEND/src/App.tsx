import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/access/Registration/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        {/* <Route path="/" element={<Login />} />
      <Route path="/access/signup" element={<Signup />} />
      <Route path="/access/forgetpassword" element={<ForgetPassword />} />
      <Route path="/access/createnewpassword" element={<CreateNewPassword />} />
      <Route path="/access/verifycode" element={<VerifyCode />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
