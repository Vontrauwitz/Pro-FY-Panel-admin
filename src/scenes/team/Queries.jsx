import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Queries = () => {






  const columns = [
    { field: '_id', headerName: 'ID' },
    { field: 'createDate', headerName: 'fecha de creación', },
    { field: 'queryDate', headerName: 'fecha de cita', },
    { field: 'queryHour', headerName: 'hora' },
    { field: 'motive', headerName: 'motive' },
    { field: 'state', headerName: 'estado' },
    { field: 'first_name', headerName: 'nombre user' },
    { field: 'last_name', headerName: 'apellido user' },
    { field: 'pro_name', headerName: 'nombre pro' },
    { field: 'pro_last', headerName: 'apellido pro' },
    { field: 'specialities', headerName: 'Especialidad' },


  ]

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [Queries, setQueries] = useState([])


  useEffect(() => {
    fetch("https://api-pro-fy-production.up.railway.app/api/queries")
      .then((data) => data.json())
      .then((data) => setQueries(data.data))

  }, [])






  const rawData = Queries?.map(e => {
    return {
      _id: e?._id,
      createDate: e?.createDate,
      queryDate: e?.queryDate,
      queryHour: e?.queryHour,
      motive: e?.motive,
      state: e?.state,
      first_name: e?.users?.first_name,
      last_name: e?.users?.last_name,
      pro_name: e?.professionals?.first_name,
      pro_last: e?.professionals?.last_name,
      specialities: e?.professionals?.specialities

    }
  })

  console.log(rawData);

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




export default Queries;
