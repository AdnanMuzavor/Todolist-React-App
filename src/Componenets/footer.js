import React from 'react';
import reactDom from 'react-dom';
export default function Footer(){
let footerstyle={
    backgroundcolor: "rebeccapurple",
    padding: "20px",
    margintop:"40px",
    position : "relative",
    top : "100vh",
    width : "100%"
}
   
    return(
     <div>
         <hr></hr>
        <h5 style={footerstyle} className="text-center bg-danger text-dark py-3">I am footer</h5>
        </div>
    );
}