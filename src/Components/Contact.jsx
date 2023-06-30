import React from "react";
import images from "../Images/Swimming-athlete.png";
import phone from "../Images/Phone.png";
import email from "../Images/email.png";
import Djokovic from "../Images/djokovic.png";
import Wawrinka from "../Images/Wawrinka.png";
import Theim from "../Images/Dominic-Thiem.png"

//destructuring is when i remove the props and i put properties as they are

function Contact(props) {
    // console.log(props)
  return (
   
<div className="contacts">
        
             <div className="contact-card">
               <img src={props.img} alt="djoko"/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src={phone} alt="phone"/>
                   <p>{props.phoneNumber}</p>
                </div>
                <div className="info-group">
                     <img src={email} alt="emailAddress"/>
                     <p>{props.emailAddress}</p>
                </div>
             </div> 
            </div>

  );
}

export default Contact;
