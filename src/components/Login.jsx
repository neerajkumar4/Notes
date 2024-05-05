import React from "react";
import { Button, Input, Paper } from "@mui/material";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <Paper className="loginPage" elevation={20}>
            <h1>Login</h1>
            <form>
                <Input className="credential" placeholder="Enter Email" variant="outlined" />
                <Input className="credential" placeholder="Enter Password" variant="outlined" />
                <Button style={{ marginTop: "35px", borderRadius: "200px" }} variant="contained" color="success">Login</Button>
            </form>
            <div>
                <p style={{marginTop:"10px"}} >don't have an account?</p>
                <Link className="register-link" to="/register">
                    <Button style={{marginTop:"10px"}} variant="outlined" >Register</Button>
                </Link>
            </div>
        </Paper>
    )
}

export default Login;