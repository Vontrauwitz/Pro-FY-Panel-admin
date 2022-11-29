import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 }
]

const DataTable = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://api-pro-fy-production.up.railway.app/api/users")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
      />
    </div>
  )
}

export default DataTable





// import AirlineSeatFlatOutlinedIcon from '@mui/icons-material/AirlineSeatFlatOutlined';



// import AssistWalkerOutlinedIcon from '@mui/icons-material/AssistWalkerOutlined';



// import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';



// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


// import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';

// import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';



// import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';



// import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';


// import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
