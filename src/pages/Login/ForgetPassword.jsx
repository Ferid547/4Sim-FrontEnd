import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Input } from "../../components/Input/Input";
import "./Login.scss";

const ForgetPassword = () => {
  const [form, setForm] = useState({
    email: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = form;

    if (!email) {
      setError("E-Mail adresi boş olamaz...");
      return;
    }

    if (email === "igidov222@gmail.com") {
      Swal.fire({
        title: "Uğurlu!",
        text: "Şifrə yenilənməsi e-mail adresinə göndərilmişdir.",
        icon: "success",
        timer: 2000,
      });
    } else {
      Swal.fire({
        title: "Xəta!",
        text: "Daxil etdiyiniz e-mail tapılmadı.",
        icon: "error",
        timer: 2000,
      });
    }

    setForm({ email: "" });
    setError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
  };

  return (
    <div className="signIn">
      <span className="text-sign">Şifrəni unutmusunuz</span>
      <div className="signInBox">
        <form onSubmit={handleSubmit}>
          <div className="signInText">
            {" "}
            <Input
              autoComplete="email"
              errorMessage={error}
              type="email"
              name="email"
              placeholder="E-Mail"
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className="signInForget">
            <Link to="/register" className="create">
              Yeni hesab yaratmaq
            </Link>
          </div>
          <div className="signInButton">
            <button type="submit">Linki göndər</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
