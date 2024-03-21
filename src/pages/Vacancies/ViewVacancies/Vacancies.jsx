import { Button } from "@mui/material";
import { AdminHeader } from "../../../components/AdminHeader/AdminHeader";
import { FaPlus } from "react-icons/fa";
import "./Vacancies.scss";
import { useNavigate } from "react-router";
import { useState } from "react";
import { DataTableUser } from "../../../components/DataTable/DataTableUser/DataTableUser";
import { DataTableAdmin } from "../../../components/DataTable/DataTableAdmin/DataTableAdmin";
export const Vacancies = () => {
  const [checkLogin, setCheckLogin] = useState(false);
  const checkIt = () => {
    
  }

  const navigate = useNavigate();
  return (
    <>
      <AdminHeader />
      {checkLogin === false ? (
        <div className="admin_vacancies">
          <Button
            onClick={() => navigate("/createVacancies")}
            variant="contained"
            style={{ gap: "10px", backgroundColor: "#0bad79" }}
          >
            <FaPlus />
            YENİSİNİ ƏLAVƏ ET
          </Button>
          <div style={{ marginBlock: "20px", width: "100%" }}>
            <DataTableAdmin />
          </div>
        </div>
      ) : (
        <div className="admin_vacancies">
          <div style={{ marginBlock: "20px", width: "100%" }}>
            <DataTableUser />
          </div>
        </div>
      )}
    </>
  );
};
