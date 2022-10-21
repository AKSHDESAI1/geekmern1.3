import React from 'react';
import { useEffect } from 'react';
import { Grid } from "@mui/material";

const Contact = (props) => {

    useEffect(() => {
        props.ColorChange(100)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item sm={10}>
                    <h1>Contact Page</h1>
                    <hr />

                    <p>Contact Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sit error ab aliquid, at voluptatem temporibus molestiae quidem quaerat similique possimus eveniet, ad doloremque recusandae nesciunt ut. Voluptas aspernatur, expedita unde adipisci dolore natus nobis sed enim laudantium, qui rerum hic magnam eaque debitis maiores delectus molestias ipsam aperiam quasi veniam! Minima, nobis fugiat, vitae ipsam aliquam laborum necessitatibus maiores quae dolores ut neque eos repellat similique! Repellat iure esse accusamus ipsam nihil dolorum culpa consequatur, fuga, praesentium laboriosam reprehenderit veritatis, quaerat facilis inventore! In, repellendus cum? Provident labore corrupti, recusandae expedita cupiditate officiis aspernatur qui eos, fugiat, cumque molestias!</p>
                </Grid>
            </Grid>
        </>
    )
}

export default Contact