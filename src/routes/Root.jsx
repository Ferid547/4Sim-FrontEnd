import ForgetPassword from "../pages/Login/ForgetPassword";
import Register from "../pages/Login/Register";
import SignIn from "../pages/Login/SignIn";
import Home from "../pages/Home/Home";
import AboutAi from "../components/HomePage/AboutAi/AboutAi";

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
  {
    name: "Home",
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    name: "AboutAi",
    path: "/aboutai",
    element: <AboutAi />,
    isPrivate: false,
  },
];
