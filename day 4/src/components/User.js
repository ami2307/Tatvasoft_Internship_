import { Button, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

import React, {useState} from "react";

const userStyle = makeStyles ((theme) => ({
    wrapper: {
        fontSize: 36,
        lineHeight: "18px"
    },
}));

export const User = ({name, fun}) => {
    // const classes = userStyle;

    const [age, setAge] = useState(3);

    function increment() {
        setAge(age + 3);
      }
    
      function decrement() {
        setAge(age - 3);
      }

      function mul() {
        setAge(age * 3);
      }
    return (
        <>
         <h1>User Is Here</h1>
            <div className="d3">
            {<h3>Life  - {age}</h3>
            <button onClick={increment} className="b1">Increment</button>
            <button onClick={decrement} className="b2">Decrement</button>
            <button onClick={mul} className="b2">Multiply</button>}
            </div>
        </>

    );
};
