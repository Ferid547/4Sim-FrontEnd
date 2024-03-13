import ForgetPassword from "../pages/Login/ForgetPassword";
import Register from "../pages/Login/Register";
import SignIn from "../pages/Login/SignIn";

export const root = [
  {
    name: "SignIn",
    path: "/signIn",
    element: <SignIn />,
    isPrivate: false,
  },
  {
    name: "Register",
    path: "/register",
    element: <Register />,
    isPrivate: false,
  },
  {
    name: "ForgetPassword",
    path: "/forgetPassword",
    element: <ForgetPassword />,
    isPrivate: false,
  },
];
