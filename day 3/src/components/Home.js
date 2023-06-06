import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { User } from "./User";
// import { App } from "App.js";
import Admin from "./Admin";
import { Button, ThemeProvider, createTheme, Typography } from '@material-ui/core'



const customTheme = createTheme({
    palette: {
        primary: {
            main: "#3f3"
        },
        secondary: {
            main: "#33f"
        },
        typography: {
            h1: {
                fontSize: "30px"
            },
        },
    },
});

export const Home = (props) => {
    return(
        <>
        <h1>Most Welcome to the page of <span style={{color:"#33FFFC", background:'#161818',padding:'10px', borderRadius:'15px'}}>{props.name}</span></h1>
        <ThemeProvider theme={customTheme}>
        <BrowserRouter>
        <div>
            <ul style={{listStyle:'none'}}>
                <li><NavLink to="/user"><h2>User</h2></NavLink></li>
                <li><NavLink to="/admin"><h2>Admin</h2></NavLink></li>
            </ul><br/>
            <div style={{background:'#161818', borderRadius:'20px',marginLeft:'400px',marginRight:'400px', color:"#33FFFC"}}><Routes>
                <Route path='/user' element={<User/>}/>
                <Route path='/admin' element={<Admin/>}/>
            </Routes></div>
            {/* <h1>Matrerial UI Button</h1> */}
            {/* <Typography component="h1" className="abc">Day 4 Task</Typography>
            <Button onClick={props.fun} variant='contained' color="primary">Touch Me</Button>
            <Button onClick={props.fun} variant='contained' color="secondary">Touch Me</Button> */}
        </div>
        </BrowserRouter>
        </ThemeProvider>
    </>
    )
}