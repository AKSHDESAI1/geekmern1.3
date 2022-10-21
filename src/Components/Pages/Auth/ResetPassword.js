import React, { useState } from 'react'
import { Grid, Button, TextField, Alert, Box, Typography, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
  const navigate = useNavigate();

  const [error, setError] = useState({
    status: false,
    type: "",
    msg: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      cpassword: data.get("cpassword")
    };

    if (actualData.password && actualData.cpassword) {
      if (actualData.password !== actualData.cpassword) {
        return setError({
          status: true,
          type: "error",
          msg: "Password and Confirm-Password are not match!!"
        })
      }
      else {
        setError({
          status: true,
          type: "success",
          msg: "Password Reset Successfully"
        })

        document.getElementById("resetPassord-form").reset();
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    }
    else {
      setError({
        status: true,
        type: "error",
        msg: "All Fields are Required"
      })
    }

  };


  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6}>

        <Box component="form" id='resetPassord-form' noValidate onSubmit={handleSubmit}>

          <Typography variant='h6' sx={{ fontWeight: "bold", textAlign: "center", fontFamily: "monospace" }}> Reset Password </Typography>

          <Divider />
          <TextField margin='normal' required name="password" label="New Password" fullWidth />
          <TextField margin='normal' required name="cpassword" label="Confirm Password" fullWidth />

          <Box textAlign="center">
            <Button type='submit' variant='contained'>Reset Password</Button>
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          {error.status && <Alert severity={error.type}> {error.msg}</Alert>}
        </Box>
      </Grid>
    </Grid>
  )
}

export default ResetPassword