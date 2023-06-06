
import { Button, Divider, Stack, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search'
import { FormatAlignJustify } from "@mui/icons-material";
// import { useHistory } from 'react-router-dom';

// import Img from "./assets/Logo.png"

    

function Header() {
    
    // const styles = {
    //     btn: {
    //         display: "flex",
    //         paddingTop:20,        
    //         },
    //     dv:{
    //         paddingLeft:1000,
    //     },
    // }
    return (
        <>
            <div className="hed_div" style={{backgroundColor:'#ecbefa'}}>
            
                <img src="./d1.jpg" height={75} />
                <div className="hed_subdiv">
                    <Button variant="" style={{color: 'red'}}>Login</Button>
                    <Button variant="" style={{color: 'red'}}>Register</Button>
                    <Button variant="outlined" style={{color: 'red'}}>Cart</Button>
                </div>

            </div>
            <div className="hed_div2" style={{color:'#bcfa8c' }}>
                <Stack spacing={3} direction="row" className="hed_stack" style={{color:'#bcfa8c'}}>
                    {/* <input type="text" size={30} placeholder="What are you looking for.." /> */}
                    <TextField variant="outlined" placeholder="What are you searching for..." size="small" />
                    <Button variant="contained" onClick={() => { alert('Clicked') }} style={{ background: '#2c16f2' }} startIcon={<SearchIcon />}>Search</Button>
                    <Button variant="contained" style={{ background: 'red' }}>Cancel</Button>
                </Stack>
            </div>
            <br />
        </>
    );
}
export default Header; 