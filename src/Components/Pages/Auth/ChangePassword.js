import React, { useState } from 'react'
import { Box, TextField, Alert, Button } from "@mui/material"

const ChangePassword = () => {
    const [error, setError] = useState({
        status: false,
        type: "",
        msg: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            oldPassword: data.get("oldPassword"),
            newPassword: data.get("newPassword"),
            cnewPassword: data.get("cnewPassword"),
        }
        console.log(actualData);
        if (actualData.oldPassword && actualData.newPassword && actualData.cnewPassword) {

            if (actualData.newPassword !== actualData.cnewPassword) {
                return setError({
                    status: true,
                    type: "error",
                    msg: "Password and Confirm-Password are not match"
                });
            }
            else {
                if (actualData.oldPassword === actualData.newPassword) {
                    return setError({
                        status: true,
                        type: "error",
                        msg: "Your new password cannot be your old Password"
                    })
                }
                else {
                    setError({
                        status: true,
                        type: "success",
                        msg: "Your Password has been Changed Successfully"
                    })
                }
            }
        }
        else {
            setError({
                status: true,
                type: "error",
                msg: 'All Fields are Required'
            })
        }
    }

    return (
        <Box sx={{ mx: 4, maxWidth: 600, display: "flex", flexDirection: "column" }}>
            <h1>Change Password</h1>
            <Box component="form" id="changePassword-form" noValidate onSubmit={handleSubmit}>
                <TextField margin="normal" label="Old Password" fullWidth name="oldPassword" id="oldPassword" type="password" />
                <TextField margin="normal" label="New Password" fullWidth name="newPassword" id="newPassword" type="password" />
                <TextField margin="normal" label="Confirm Password" fullWidth name="cnewPassword" id="cnewPassword" type="password" />

                <Box textAlign="center">
                    <Button variant='contained' type='submit'>Change Password</Button>
                </Box>

                <Box minHeight={110}>
                    {error.status && <Alert sx={{ mt: 2 }} severity={error.type}> {error.msg} </Alert>}
                </Box>
            </Box>
        </Box>
    )
}

export default ChangePassword
