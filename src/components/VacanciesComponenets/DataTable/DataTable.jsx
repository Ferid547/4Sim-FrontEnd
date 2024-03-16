import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import columnsVacancies from "../../../data/columnsVacancies";
import "./DataTable.scss";
import { FaAd } from "react-icons/fa";

const rows = [
  {
    id: 1,
    vakansiyaAdi: "IT",
    yaradılmaTarixi: "16/03/2024",
    daxilEdənİstifadəçi: "Fərid",
    status: "Pedding",
    əməliyyatlar: "Sil",
  },
  {
    id: 2,
    vakansiyaAdi: "IT",
    yaradılmaTarixi: "16/03/2024",
    daxilEdənİstifadəçi: "Fərid",
    status: "Pedding",
    əməliyyatlar: "Sil",
  },
  {
    id: 3,
    vakansiyaAdi: "IT",
    yaradılmaTarixi: "16/03/2024",
    daxilEdənİstifadəçi: "Fərid",
    status: "Pedding",
    əməliyyatlar: "Sil",
  },
  {
    id: 4,
    vakansiyaAdi: "IT",
    yaradılmaTarixi: "16/03/2024",
    daxilEdənİstifadəçi: "Fərid",
    status: "Pedding",
    əməliyyatlar: "Sil",
  },
  {
    id: 5,
    vakansiyaAdi: "IT",
    yaradılmaTarixi: "16/03/2024",
    daxilEdənİstifadəçi: "Fərid",
    status: "Pedding",
    əməliyyatlar: "Sil",
  },
  {
    id: 6,
    vakansiyaAdi: "IT",
    yaradılmaTarixi: "16/03/2024",
    daxilEdənİstifadəçi: "Fərid",
    status: "Pedding",
    əməliyyatlar: "Sil",
  },
  {
    id: 7,
    vakansiyaAdi: "IT",
    yaradılmaTarixi: "16/03/2024",
    daxilEdənİstifadəçi: "Fərid",
    status: "Pedding",
    əməliyyatlar: "Sil",
  },
];

export default function DataTable() {
  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columnsVacancies}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
