import React, { useEffect, useState } from 'react'
import { Box, TextField, Button, Grid, Typography } from "@mui/material"
import { Alert } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useSendPasswordResetEmailMutation } from '../../../services/userAuthApi';
import CircularProgress from '@mui/material/CircularProgress';

const SendPasswordResetEmail = (props) => {

    const [SendPasswordResetEmail, responseInfo] = useSendPasswordResetEmailMutation();

    const [error, setError] = useState({
        status: false,
        type: "",
        msg: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get("email")
        }
        if (actualData.email) {
            const res = await SendPasswordResetEmail(actualData);
            console.log('res', res);
            // setError({
            //     status: true,
            //     type: "success",
            //     msg: "Email Sent Successfully. Check your Mail !!"
            // });
            document.getElementById("sent-email").reset();
        }
        else {
            setError({
                status: true,
                type: "error",
                msg: "Please Enter an Email"
            })

        }
    }

    useEffect(() => {
        props.ColorChange(100)
        // eslint-disable-next-line
    }, [])


    return (
        <Grid container justifyContent="center">
            <Grid item sm={6} xs={12}>

                <Box component="form" id='sent-email' noValidate sx={{ mt: 5 }} onSubmit={handleSubmit}>
                    <TextField label="Email" name='email' fullWidth />

                    <Box sx={{ mt: 2 }} textAlign="center">
                        <Button type='submit' variant='contained'> Send </Button>
                    </Box>

                    {responseInfo.error ? (<> Error </>) : (responseInfo.isLoading ? (<>{<CircularProgress />}</>) : (responseInfo.data ? (responseInfo.data.status === "success" ? (<>
                        {<Alert severity='success'> Email Sent Successfully </Alert>}</>) : (<><Alert severity='error'> {responseInfo.data.message} </Alert></>)) : (<></>)))}

                    {error.status && <Alert severity={error.type}> {error.msg} </Alert>}
                </Box>

                <Box sx={{ mt: 2, textAlign: "center" }}>
                    <ShoppingBagIcon sx={{ color: 'purple', fontSize: 100 }} />
                    <Typography variant='h5' sx={{ fontWeight: "bold" }}>Geek-Shop</Typography>
                </Box>
            </Grid>
        </Grid>

    )
}

export default SendPasswordResetEmail;