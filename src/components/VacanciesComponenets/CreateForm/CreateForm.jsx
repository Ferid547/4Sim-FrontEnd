import { useState } from "react";
import "./CreateForm.scss";

export const CreateForm = () => {
  const [form, setForm] = useState([]);
  return (
    <div className="mainBox">
      <form>
        <div className="inlineBox">
          <div className="box">
            <input type="checkbox" id="box1" />
            <label htmlFor="box1">Şablondan istifadə et</label>
          </div>
          <div className="box">
            <input type="checkbox" id="box2" />
            <label htmlFor="box2">Şəkil yüklənsin</label>
          </div>
          <div className="box">
            <input type="checkbox" id="box3" />
            <label htmlFor="box3">Təcrübəçi</label>
          </div>
          <select name="" id="" className="selectBox">
            <option value="1" label="Vakansiyanın aid olduğu struktur" />
            <option value="2">IT</option>
            <option value="3">Ofisant</option>
            <option value="4">Aşpaz</option>
          </select>
        </div>
        <div className="inlineBox">
          <select name="" id="" className="selectBox">
            <option value="1" label="Vakansiyanın adı" />
            <option value="2">IT</option>
            <option value="3">Ofisant</option>
            <option value="4">Aşpaz</option>
          </select>
          <input
            type="text"
            placeholder="Vakansiya kodu"
            disabled
            style={{ width: "300px", paddingLeft: "10px" }}
          />
          <select name="" id="" className="selectBox">
            <option value="1" label="Vəzifə adı" />
            <option value="2">IT</option>
            <option value="3">Ofisant</option>
            <option value="4">Aşpaz</option>
          </select>
        </div>
        <div className="inlineBox">
          <select name="" id="" className="selectBox">
            <option value="1" label="Acar söz" />
            <option value="2">IT</option>
            <option value="3">Ofisant</option>
            <option value="4">Aşpaz</option>
          </select>
          <select name="" id="" className="selectBox">
            <option value="1" label="Əmək Haqqı (interval)" />
            <option value="2">IT</option>
            <option value="3">Ofisant</option>
            <option value="4">Aşpaz</option>
          </select>
          <select name="" id="" className="selectBox">
            <option value="1" label="Əlavə ödəniş AZN" />
            <option value="2">IT</option>
            <option value="3">Ofisant</option>
            <option value="4">Aşpaz</option>
          </select>
        </div>
        <div className="inlineBox">
          <select name="" id="" className="selectBox">
            <option value="1" label="İş qrafiki" />
            <option value="2">IT</option>
            <option value="3">Ofisant</option>
            <option value="4">Aşpaz</option>
          </select>
          <select name="" id="" className="selectBox">
            <option value="1" label="Ümumi iş təcrübəsi" />
            <option value="2">IT</option>
            <option value="3">Ofisant</option>
            <option value="4">Aşpaz</option>
          </select>
          <select name="" id="" className="selectBox">
            <option value="1" label="Sahə üzrə iş təcrübəsi" />
            <option value="2">IT</option>
            <option value="3">Ofisant</option>
            <option value="4">Aşpaz</option>
          </select>
        </div>
        <div className="inlineBox">
          <select name="" id="" className="selectBox">
            <option value="1" label="İş qrafiki" />
            <option value="2">IT</option>
            <option value="3">Ofisant</option>
            <option value="4">Aşpaz</option>
          </select>
          <select name="" id="" className="selectBox">
            <option value="1" label="Ümumi iş təcrübəsi" />
            <option value="2">IT</option>
            <option value="3">Ofisant</option>
            <option value="4">Aşpaz</option>
          </select>
          <select name="" id="" className="selectBox">
            <option value="1" label="Digər təminatlar" />
            <option value="2">IT</option>
            <option value="3">Ofisant</option>
            <option value="4">Aşpaz</option>
          </select>
        </div>
      </form>
    </div>
  );
};
