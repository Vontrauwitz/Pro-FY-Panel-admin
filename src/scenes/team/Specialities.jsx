/* eslint-disable no-unused-vars */




import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import axios from 'axios'



const permaDelete = async (id) => {
  const dataDelete = await axios.delete(`http://localhost:3001/api/specialities/perma/${id}`)
  window.location.reload()
}


const columns = [
  { field: '_id', headerName: 'ID', width: 300 },
  { field: 'name', headerName: 'Especialidad', width: 300 },
  { field: 'deleted', headerName: 'Deleted', width: 300 },
  {
    field: "delete", headerName: 'id', width: 400, renderCell: (params) => {
      console.log(params)
      return (
        <Button
          onClick={() => permaDelete(params.id)}
          variant="contained"
        >
          Delete
        </Button>
      );
    }
  }

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





  const rawData = Specialities?.map(e => {
    return {
      _id: e?._id,
      name: e?.name,
      deleted: e?.deleted,

    }
  })


  return (
    <Box m="20px">
      <Header title="Specialities" subtitle="Managing the Users" />
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
