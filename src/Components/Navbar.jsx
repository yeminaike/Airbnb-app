import React from 'react';
import airbnblogo from "../Images/airbnb 1.png"


function Navbar() {
    return ( 
        <nav>
            <img src={airbnblogo} alt="logo" className='airbnb-logo'/>
        </nav>
    );
}

export default Navbar ;