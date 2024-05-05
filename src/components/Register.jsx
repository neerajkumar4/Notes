import React from "react";
import { Button, Input, Paper } from "@mui/material";
import { Link } from "react-router-dom";
const Register=()=>{
    return(
        <Paper className="loginPage" elevation={20}>
            <h1>Register</h1>
            <form>
                <Input className="credential" placeholder="Enter Name" variant="outlined" />
                <Input className="credential" placeholder="Enter Email" variant="outlined" />
                <Input className="credential" placeholder="Enter Password" variant="outlined" />
                <Button style={{ marginTop: "35px", borderRadius: "200px" }} variant="contained" color="success">Register</Button>
            </form>
            <div>
                <p style={{marginTop:"10px"}} >Login to existing account</p>
                <Link className="register-link" to="/">
                    <Button style={{marginTop:"10px"}} variant="outlined" >Login</Button>
                </Link>
            </div>
        </Paper>
    )
}

export default Register;