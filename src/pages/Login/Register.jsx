import { Link } from "react-router-dom";
import Google from "../../images/social/Google.png";
import Linkedin from "../../images/social/LinkedIn.png";
import { useState } from "react";
import axios from "axios";
import { Input } from "../../components/Input/Input";
import "./Login.scss";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPass: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("YOUR_REGISTER_ENDPOINT", form);
        console.log("User registered successfully:", response.data);
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!form.name.trim()) {
      errors.name = "Boş saxlamayın...";
      isValid = false;
    }

    if (!form.email.trim()) {
      errors.email = "Boş saxlamayın...";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      isValid = false;
    }

    if (!form.password.trim()) {
      errors.password = "Boş saxlamayın...";
      isValid = false;
    } else if (form.password.length < 6) {
      errors.password = "Ən azı 6 simvol daxil edin...";
      isValid = false;
    }

    if (form.repeatPass !== form.password && form.repeatPass !== "") {
      errors.repeatPass = "Şifrələr uyğun gəlmir...";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div className="signIn">
      <span className="text-sign">Yeni hesab yaratmaq</span>
      <div className="signInBox">
        <form onSubmit={handleSubmit}>
          <div className="signInText">
            <Input
              errorMessage={errors.name}
              type="text"
              name="name"
              placeholder="Ad Soyad"
              onChange={handleChange}
              autoComplete="username"
            />
            <Input
              errorMessage={errors.email}
              type="text"
              name="email"
              placeholder="E-Mail"
              onChange={handleChange}
              autoComplete="email"
            />
            <Input
              errorMessage={errors.password}
              type="password"
              name="password"
              placeholder="Şifrə"
              onChange={handleChange}
              autoComplete="new-password"
            />{" "}
            <Input
              errorMessage={errors.repeatPass}
              type="password"
              name="repeatPass"
              placeholder="Təkrar şifrə"
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>
          <div className="signInForget">
            <Link to="/forgetPassword" className="forget">
              Şifrəni unutmusunuz?
            </Link>
          </div>
          <div className="signInButton">
            <button type="submit">Qeydiyyatdan keçin</button>
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

export default Register;
