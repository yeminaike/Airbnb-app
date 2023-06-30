import React from 'react';


function PropsLearning () {

    //   const FirstName = "Adeyemi"
    //   const LastName = "Ogunnaike"
     const date = new Date();
      const hours = date.getHours();

     let timeOfDay = "Morning"
     if(hours < 12){
        timeOfDay ="Morning";
     }else if(hours >= 12 && hours < 17 ){
        timeOfDay = "Afternoon"
     }else{
        timeOfDay= "Evening"
     }

     
      
    return ( 
<>

<h1>Good {timeOfDay}</h1>

</>
     );
    }


export default PropsLearning;