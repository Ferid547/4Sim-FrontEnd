import Box from "@mui/material/Box";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import {
  randomTraderName,
  randomId,
  randomArrayItem,
  randomCommodity,
  randomCity,
} from "@mui/x-data-grid-generator";
import "./DataTableAdmin.scss";

const roles = ["Gözləmədə", "Qəbul edildi"];
const randomRole = () => {
  return randomArrayItem(roles);
};
const year = new Date().getFullYear();
const day = new Date().getDate();
const month = new Date().getMonth() + 1;

const date =
  month < 10
    ? day + "/" + "0" + month + "/" + year
    : day + "/" + month + "/" + year;

const initialRows = [
  {
    id: randomId().slice(0, 5),
    name: randomTraderName(),
    age: randomCity(),
    companyName: randomCommodity(),
    joinDate: date,
    role: randomRole(),
  },
  {
    id: randomId().slice(0, 5),
    name: randomTraderName(),
    age: randomCity(),
    companyName: randomCommodity(),
    joinDate: date,
    role: randomRole(),
  },
  {
    id: randomId().slice(0, 5),
    name: randomTraderName(),
    age: randomCity(),
    companyName: randomCommodity(),
    joinDate: date,
    role: randomRole(),
  },
  {
    id: randomId().slice(0, 5),
    name: randomTraderName(),
    age: randomCity(),
    companyName: randomCommodity(),
    joinDate: date,
    role: randomRole(),
  },
  {
    id: randomId().slice(0, 5),
    name: randomTraderName(),
    age: randomCity(),
    companyName: randomCommodity(),
    joinDate: date,
    role: randomRole(),
  },
];

export const DataTableAdmin = () => {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };
  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: "id",
      headerName: "Vakansiya kodu",
      width: 120,
      align: "center",
      headerAlign: "center",
      editable: false,
    },
    {
      field: "name",
      headerName: "Vakansiyanın adı",
      width: 220,
      align: "center",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "joinDate",
      headerName: "Yaradılma tarixi",
      type: "text",
      width: 170,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Daxil edən istifadəçi",
      type: "text",
      width: 220,
      align: "center",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "companyName",
      headerName: "Daxil edən şirkət",
      type: "text",
      align: "center",
      headerAlign: "center",
      width: 220,
      editable: false,
    },
    {
      field: "role",
      headerName: "Status",
      width: 150,
      align: "center",
      headerAlign: "center",
      editable: true,
      type: "singleSelect",
      valueOptions: ["Gözləmədə", "Qəbul edildi"],
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        rowSelection={false}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
};
