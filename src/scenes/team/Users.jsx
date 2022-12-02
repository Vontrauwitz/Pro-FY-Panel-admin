/* eslint-disable no-unused-vars */
import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import axios from "axios"



const permaDelete = async (id) => {
  const dataDelete = await axios.delete(`http://localhost:3001/api/users/perma/${id}`)
  window.location.reload()
}



const columns = [
  { field: '_id', headerName: 'ID' },
  { field: 'first_name', headerName: 'nombre', },
  { field: 'last_name', headerName: 'apellido', },
  { field: 'email', headerName: 'email' },
  { field: 'DNI', headerName: 'dni' },
  { field: 'country', headerName: 'country' },
  { field: 'state', headerName: 'state' },
  { field: 'city', headerName: 'city' },
  { field: 'image', headerName: 'Imagen' },
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

const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [Users, setUsers] = useState([])


  useEffect(() => {
    fetch("https://api-pro-fy-production.up.railway.app/api/users")
      .then((data) => data.json())
      .then((data) => setUsers(data.data))

  }, [])

  const rawData = Users?.map(e => {
    return {
      _id: e?._id,
      first_name: e?.first_name,
      last_name: e?.last_name,
      email: e?.email,
      DNI: e?.DNI,
      country: e?.country,
      state: e?.state,
      city: e?.city,
      image: e?.image.url,
    }
  })


  return (
    <Box m="20px">
      <Header title="Users" subtitle="Managing the Users" />
      <Box>
        <Button>hola</Button>
      </Box>
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
        <Button>hola</Button>
        <DataGrid checkboxSelection rows={rawData}
          columns={columns}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default Users;
