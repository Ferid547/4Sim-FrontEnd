import { Button } from "@mui/material";
import { AdminHeader } from "../../../components/AdminHeader/AdminHeader";
import DataTable from "../../../components/VacanciesComponenets/DataTable/DataTable";
import { FaPlus } from "react-icons/fa";
import "./Vacancies.scss";
import { useNavigate } from "react-router";
export const Vacancies = () => {
  const navigate = useNavigate();
  return (
    <>
      <AdminHeader />
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
          <DataTable />
        </div>
      </div>
    </>
  );
};
