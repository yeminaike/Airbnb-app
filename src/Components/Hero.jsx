import React from 'react';
import photogrid from "../Images/photogrid.png"



function Hero() {
    return ( 
        <section className='Hero'>
           <img src={photogrid} alt='photogrid' className='photo-grid'/>
           <h1 className='air-title'>Online Experiences</h1>
           <p className='paragraph-text'>Join unique interactive activities led by
            one-of-a-kind hosts—all without leaving home.
           </p>
        </section>
     );
}

export default Hero ;