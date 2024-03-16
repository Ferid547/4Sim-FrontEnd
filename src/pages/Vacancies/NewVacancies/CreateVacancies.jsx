import { Button, IconButton } from "@mui/material";
import { AdminHeader } from "../../../components/AdminHeader/AdminHeader";
import { FiArrowLeftCircle } from "react-icons/fi";
import "./CreateVacancies.scss";
import { useNavigate } from "react-router";
import { CreateForm } from "../../../components/VacanciesComponenets/CreateForm/CreateForm";

export const CreateVacancies = () => {
  const navigate = useNavigate();
  return (
    <>
      <AdminHeader />
      <div className="create-vacancies-box">
        <div style={{ maxWidth: "200px" }}>
          <Button
            variant="outlined"
            className="extBtn"
            onClick={() => navigate("/vacancies")}
          >
            <FiArrowLeftCircle className="extIconBtn" />
            Geri
          </Button>
        </div>
        <span className="title">Yeni vakansiya əlavə edilməsi</span>
        <div>
          <CreateForm />
        </div>
        <Button
          variant="contained"
          className="addBtn"
          color="success"
          sx={{ height: "50px" }}
        >
          Əlavə et
        </Button>
      </div>
    </>
  );
};
