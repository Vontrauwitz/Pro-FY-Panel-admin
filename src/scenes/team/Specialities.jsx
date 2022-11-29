



import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";




const columns = [
  { field: '_id', headerName: 'ID', width: 300 },
  { field: 'name', headerName: 'Especialidad', width: 300 },
  { field: 'deleted', headerName: 'Deleted', width: 300 },


]

function Specialities() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [Specialities, setSpecialities] = useState([])


  useEffect(() => {
    fetch("https://api-pro-fy-production.up.railway.app/api/specialities")
      .then((data) => data.json())
      .then((data) => setSpecialities(data.data))

  }, [])


  // const columns = [
  //   { field: "id", headerName: "ID" },
  //   {
  //     field: "first_name",
  //     headerName: "Nombre(s)",
  //     flex: 1,
  //     cellClassName: "name-column--cell",
  //   },
  //   {
  //     field: "first_name",
  //     headerName: "apellido(s)",
  //     type: "number",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "email",
  //     headerName: "Email",
  //     flex: 1,
  //   },
  //   {
  //     field: "DNI",
  //     headerName: "Dni",
  //     flex: 1,
  //   },
  //   {
  //     field: "country",
  //     headerName: "Pais",
  //     flex: 1,
  //   },
  //   {
  //     field: "state",
  //     headerName: "Estado",
  //     flex: 1,
  //   },
  //   {
  //     field: "city",
  //     headerName: "Ciudad",
  //     flex: 1,
  //   },
  //   {
  //     field: "address",
  //     headerName: "Dirección",
  //     flex: 1,
  //   },
  //   {
  //     field: "postcode",
  //     headerName: "C.P.",
  //     flex: 1,
  //   },
  //   {
  //     field: "image",
  //     headerName: "Imagen",
  //     flex: 1,
  //   },
  //   {
  //     field: "favorites",
  //     headerName: "Fav",
  //     flex: 1,
  //   },
  //   {
  //     field: "roles",
  //     headerName: "Access Level",
  //     flex: 1,
  //     renderCell: ({ row: { access } }) => {
  //       return (
  //         <Box
  //           width="60%"
  //           m="0 auto"
  //           p="5px"
  //           display="flex"
  //           justifyContent="center"
  //           backgroundColor={
  //             access === "admin"
  //               ? colors.greenAccent[600]
  //               : access === "manager"
  //                 ? colors.greenAccent[700]
  //                 : colors.greenAccent[700]
  //           }
  //           borderRadius="4px"
  //         >
  //           {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
  //           {access === "manager" && <SecurityOutlinedIcon />}
  //           {access === "user" && <LockOpenOutlinedIcon />}
  //           <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
  //             {access}
  //           </Typography>
  //         </Box>
  //       );
  //     },
  //   },
  //   {
  //     field: "plan",
  //     headerName: "plan",
  //     flex: 1,
  //     renderCell: ({ row: { plan } }) => {
  //       return (
  //         <Box
  //           width="60%"
  //           m="0 auto"
  //           p="5px"
  //           display="flex"
  //           justifyContent="center"
  //           backgroundColor={
  //             plan === "admin"// cambiar cosas para que funcione
  //               ? colors.greenAccent[600]
  //               : plan === "manager"
  //                 ? colors.greenAccent[700]
  //                 : colors.greenAccent[700]
  //           }
  //           borderRadius="4px"
  //         >
  //           {plan === "admin" && <AdminPanelSettingsOutlinedIcon />}
  //           {plan === "manager" && <SecurityOutlinedIcon />}
  //           {plan === "user" && <LockOpenOutlinedIcon />}
  //           <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
  //             {plan}
  //           </Typography>
  //         </Box>
  //       );
  //     },
  //   },
  // ];


  const rawData = Specialities?.map(e => {
    return {
      _id: e?._id,
      name: e?.name,
      deleted: e?.deleted,

    }
  })


  return (
    <Box m="20px">
      <Header title="Users" subtitle="Managing the Users" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={rawData}
          columns={columns}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};










export default Specialities
