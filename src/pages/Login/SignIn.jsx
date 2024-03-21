import { Link } from "react-router-dom";
import Google from "../../assets/images/social/Google.png";
import Linkedin from "../../assets/images/social/LinkedIn.png";
import { useState } from "react";
import axios from "axios";
import { Input } from "../../components/Input/Input";
import "./Login.scss";
import Swal from "sweetalert2";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.email === "" && form.password === "") {
      Swal.fire({
        title: "Boş məlumat",
        text: "Xanaları doldurun",
        icon: "info",
      });
    } else {
      if (
        form.email === "igidov222@gmail.com" &&
        form.password === "12345678"
      ) {
        Swal.fire({
          title: "Login!",
          text: "Doğrulandı",
          icon: "success",
        });
        const response = await axios.post("YOUR_AUTH_ENDPOINT", form);
        const token = response.data.token; // Token'ı alın
        // Tokeni burada saxlamaq
        console.log(token);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Yanlış istifadəçi",
          icon: "error",
        });
        console.error("Error signing in:", error);
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!form.email) {
      newErrors.email = "Boş saxlamayın...";
      valid = false;
    }

    if (!form.password) {
      newErrors.password = "Boş saxlamayın...";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="signIn">
      <span className="text-sign">Daxil olun</span>
      <div className="signInBox">
        <form onSubmit={handleSubmit}>
          <div className="signInText">
            <Input
              autoComplete="username"
              errorMessage={errors.email}
              name="email"
              type="email"
              value={form.email}
              placeholder="E-Mail"
              onChange={handleChange}
            />
            <Input
              autoComplete="current-password"
              errorMessage={errors.password}
              name="password"
              type="password"
              placeholder="Şifrə"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className="signInForget">
            <Link to="/forgetPassword" className="forget">
              Şifrəni unutmusunuz?
            </Link>
            <Link to="/register" className="create">
              Yeni hesab yaratmaq
            </Link>
          </div>
          <div className="signInButton">
            <button type="submit" onClick={validateForm}>
              Daxil ol
            </button>
          </div>
        </form>

        <div className="signInSSO">
          <hr className="line" />
          <span>Və ya sso ilə daxil olun</span>
          <hr className="line" />
        </div>
        <div className="signInSocial">
          <Link className="link">
            <img src={Google} className="logo-social" alt="Google" />
            <span>Google ilə daxil olun</span>
          </Link>
          <Link className="link">
            <img src={Linkedin} className="logo-social" alt="Linkedin" />
            <span>Linkedin ilə daxil olun</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
