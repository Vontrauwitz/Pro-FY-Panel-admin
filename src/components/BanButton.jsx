import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Typography, useTheme, Button } from "@mui/material";


function BanButton({ id }) {
  const [ban, setBan] = useState(false)

  const SoftDelete = async (id) => {
    console.log("soft BanButton")
    if (!ban) {
      await axios.delete(`http://localhost:3001/api/professionals/${id}`)
      setBan(true)
      window.location.reload()
    } else {
      await axios.patch(`http://localhost:3001/api/professionals/${id}`)
      setBan(false)
      window.location.reload()
    }
  }

  return (
    <Box>
      <Button
        onClick={() => SoftDelete(id)}
        variant="contained"
      >
        BAN
      </Button>
    </Box>
  )
}

export default BanButton
