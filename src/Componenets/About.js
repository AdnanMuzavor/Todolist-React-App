import React from 'react';


 export const About = () => {
    let h1_styles={
        justifycontent: "center",
        alignitems: "center",
        textalign:" center",
        color: "brown",
        backgroundcolor:" yellow",
        padding:"20px"

     }
     let div_style={
        justifycontent: "center",  
    
     }
     return (
         <div style={div_style} >
<h2 style={h1_styles}>This about componenet!</h2>
<p style={h1_styles}>
    This react app composed of several components group together to
  form this application so that <em>it's usedful for entering todos/todo items you wish to add.</em> It's also cabable of retaining your todo list incase you didn't deleted and bymistakenly reloaded the page.
  <strong>Thank you for reading!</strong>
</p>

         </div>
     )
 }