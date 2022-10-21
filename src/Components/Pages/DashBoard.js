import React, { useEffect } from 'react'
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ChangePassword from './Auth/ChangePassword';
import { useLoggedUserQuery } from '../../services/userAuthApi';
import { removeToken } from '../../services/LocalStorageService';

const DashBoard = () => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        removeToken('token');
        return navigate("/login");
    }

    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            return navigate("/login");
        }
        // eslint-disable-next-line 
    }, []);

    const token = "Bearer " + localStorage.getItem("token")
    const responseInfo = useLoggedUserQuery(token);
    console.log(responseInfo)
    return (
        <Grid container>
            <Grid item sm={4} sx={{ backgroundColor: "gray", p: 5, color: "white" }}>
                <h2 style={{ fontWeight: "bold", color: "black", fontStyle: "revert" }}>DashBoard</h2>

                {responseInfo.error ? (<>error</>) : (responseInfo.isLoading ? (<>Loading</>) : (responseInfo.data.status === "success" ? (<>
                    <Typography variant='h5'>Email: {responseInfo.data.message.email}</Typography>
                    <Typography variant='h6'>Name: {responseInfo.data.message.name}</Typography>

                    <Grid item sm={8}>
                        <ChangePassword />
                    </Grid>
                </>) : (<>{responseInfo.data.message === 'jwt expired' ? (<>{`
                    ${removeToken("token")}
                    ${navigate("/login")}`
                }</>) : (<>{responseInfo.data.message}</>)}</>)))}

                <Button variant='contained' color='warning' size='large' onClick={handleLogout}>Logout</Button>
            </Grid>


        </Grid>
    )
}

export default DashBoard