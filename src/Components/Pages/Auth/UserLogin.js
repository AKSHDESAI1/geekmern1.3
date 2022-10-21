import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

import { useLoginUserMutation } from '../../../services/userAuthApi';

import LinearProgress from '@mui/material/LinearProgress';
import { storeToken } from '../../../services/LocalStorageService';

const UserLogin = () => {
  const navigate = useNavigate();

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  const [loginUser, responseInfo] = useLoginUserMutation();


  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget);

    // console.log("data", data.get("email"));

    const actualData = {
      email: data.get("email"),
      password: data.get("password")
    };

    if (actualData.email && actualData.password) {
      document.getElementById("login-form").reset();

      const res = await loginUser(actualData);
      if (res.data.status === "failed") {
        return setError({
          status: true,
          msg: res.data.message,
          type: "error"
        })
      } else {
        storeToken(res.data.token);
        setError({
          status: true,
          msg: "Login",
          type: "success"
        })
        return setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
  
      }
     
    }
    else {
      setError({
        status: true,
        msg: "All Fields are Required",
        type: "error"
      })
      console.log("All Fields are Required");
    }
  };

  return (
    <>
      <Box component='form' sx={{ mt: 2 }} noValidate id="login-form" onSubmit={handleSubmit}>
        <TextField margin="normal" required fullWidth id='email' type="email" name='email' label="Email Address" />

        <TextField margin="normal" required fullWidth type="password" id='password' name='password' label="Password" />

        <Box textAlign="center">
          {responseInfo.isLoading ? (<> <Button type='submit' disabled variant='contained' sx={{ mt: 3, px: 5 }}> Login </Button> <LinearProgress sx={{mt: 3}} /></>) : (<> <Button type='submit' variant='contained' sx={{ mt: 3, px: 5 }}> Login </Button></>)}

        </Box>
        <NavLink to="/sendpasswordresetemail"> Forgot Password </NavLink>
        {error.status && <Alert severity={error.type} sx={{ mt: 1 }}>{error.msg}!</Alert>}
      </Box>
    </>
  )
}

export default UserLogin