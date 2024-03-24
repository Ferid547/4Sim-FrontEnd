import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../../../assets/images/navbar/logo.svg";
import Azerbaijan from "../../../assets/images/navbar/Azerbaycan.svg";
import Elektron from "../../../assets/images/navbar/elektronhokumet.svg";
import "./Footer.scss";
import { Link } from "react-router-dom";

const listFooter = [
  {
    title: "AI",
    name: [
      {
        listName: "Təhsil üçün",
        url: "/",
      },
      {
        listName: "Biznes üçün",
        url: "/",
      },
      {
        listName: "Kariyera üçün",
        url: "/",
      },
    ],
  },
  {
    title: "Lahiyələr",
    name: [
      {
        listName: "Startup qəbulu",
        url: "/",
      },
      {
        listName: "Komandalar",
        url: "/",
      },
    ],
  },
  {
    title: "Kömək",
    name: [
      {
        listName: "Əlaqə",
        url: "/",
      },
      {
        listName: "Tez-tez verilən suallar",
        url: "/",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <div className="footer-logo">
          <img src={Logo} alt="" />
          <div className="select">
            <select>
              <option className="option" value="">
                Azerbaycan dili
              </option>
              <option className="option" value="">
                İngilis dili
              </option>
              <option className="option" value="">
                Rus dili
              </option>
            </select>
            <div>
              <IoIosArrowDown className="arrow" />
            </div>
          </div>
        </div>
        <div className="footer-list">
          {listFooter.map((i, key) => (
            <div key={key} className="list">
              <span>{i.title}</span>
              {i.name.map((z) => (
                <Link to={z.url}>{z.listName}</Link>
              ))}
            </div>
          ))}
          <div className="list">
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Privacy Policy</Link>
            <div className="footer-social">
              <Link className="facebook">
                <FaFacebook />
              </Link>
              <Link className="twitter">
                <FaTwitter />
              </Link>
              <Link className="instagram">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-foot">
        <Link to={"https://vxsida.gov.az/az"} target="_blank">
          <img src={Azerbaijan} alt="" />
        </Link>
        <span className="footer-footSpan">Bütün hüquqlar qorunur ©️ 2022</span>
        <Link
          to={"https://www.digital.gov.az/"}
          target="_blank"
          className="footer"
        >
          <span>Elektron Hökumətin İnkişafı Mərkəzi</span>
          <img src={Elektron} alt="" />
        </Link>
      </div>
    </footer>
  );
};
