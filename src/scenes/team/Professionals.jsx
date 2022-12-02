/* eslint-disable no-unused-vars */
import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import React, { useState, useEffect } from 'react'
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import axios from "axios"
import BanButton from "../../components/BanButton";




const permaDelete = async (id) => {
  const dataDelete = await axios.delete(`http://localhost:3001/api/professionals/perma/${id}`)
  window.location.reload()

}

const columns = [
  { field: '_id', headerName: 'ID' },
  { field: 'first_name', headerName: 'nombre', },
  { field: 'last_name', headerName: 'apellido', },
  { field: 'email', headerName: 'email' },
  { field: 'professionalId', headerName: 'professionalId' },
  { field: 'scheduleDays', headerName: 'scheduleDays' },
  { field: 'scheduleHours', headerName: 'scheduleHours' },
  { field: 'modality', headerName: 'modality' },
  { field: 'specialities', headerName: 'specialities' },
  { field: 'dni', headerName: 'dni' },
  { field: 'country', headerName: 'country' },
  { field: 'state', headerName: 'state' },
  { field: 'city', headerName: 'city' },
  { field: 'zip', headerName: 'C.P.' },
  { field: 'deleted', headerName: 'C.deleted.' },
  { field: 'image', headerName: 'Imagen' },
  {
    field: "delete", headerName: 'For ever and ever', width: 400, renderCell: (params) => {
      // console.log(params)
      return (
        <Button
          onClick={() => permaDelete(params.id)}
          variant="contained"
        >
          Delete
        </Button>
      );
    }
  },

  {
    field: "ban", headerName: 'ban', width: 400, renderCell: (params) => {


      console.log(params)
      return (

        <BanButton id={params.id} />


      );
    }
  }

]

const Professionals = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [Pro, setPro] = useState([])


  // useEffect(() => {
  //   // fetch("https://api-pro-fy-production.up.railway.app/api/professionals")
  //   fetch("http://localhost:3001/api/professionals/ban")

  //     .then((data) => data.json())
  //     .then((data) => setPro(data.data))

  // }, [])

  useEffect(() => {
    // fetch("https://api-pro-fy-production.up.railway.app/api/professionals")
    const prof = async () => {

      const api = await axios.get('https://api-pro-fy-production.up.railway.app/api/professionals')
      const data = api.data.data
      // console.log(dataDelete);
      // await setPro(dataDelete.data.data)
      const ban = await axios.get('http://localhost:3001/api/professionals/ban')
      console.log(ban)
      const data2 = ban.data
      const total = data.concat(data2)
      console.log(total)
      // console.log(dataDelete);
      await setPro(total)

    }
    prof()
  }, [])

  // useEffect(() => {
  //   // fetch("https://api-pro-fy-production.up.railway.app/api/professionals")

  //   fetch("https://api-pro-fy-production.up.railway.app/api/professionals")
  //     .then((data) => data.json())
  //     .then((data) => setPro(data.data))
  //   fetch("http://localhost:3001/api/professionals/ban")

  //     .then((data) => data.json())
  //     .then((data) => setPro(data))
  // }, [])


  // console.log(
  //   Pro);
  const rawData = Pro?.map(e => {
    return {
      _id: e?._id,
      first_name: e?.first_name,
      email: e?.email,
      last_name: e?.last_name,
      professionalId: e?.professionalId,
      scheduleDays: e?.scheduleDays,
      scheduleHours: e?.scheduleHours,
      modality: e?.modality?.modality,
      specialities: e?.specialities?.name,
      dni: e?.dni,
      country: e?.country,
      state: e?.state,
      city: e?.city,
      zip: e?.zip,
      deleted: e?.deleted,
      image: e?.image.url
    }

  })
  // console.log(rawData);
  return (
    <Box m="20px">
      <Header title="Professionals" subtitle="Managing the Professionals" />
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

export default Professionals;
