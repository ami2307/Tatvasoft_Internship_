import React from 'react';

const User = (props) => {
  const name = props.name;
  const fun = props.fun;
  return (
    <>
    <div style={{textAlign:'center'}}>
       <h1 style={{color:'aqua'}}>This is User Component {name}</h1>
       <button onClick={fun} style={{backgroundColor:'black', color:'white', borderRadius:'10px', margin:'15px', padding:'5px', cursor:'pointer'}}>Touch me</button>
       </div>
    </>
  );
};

export default User;