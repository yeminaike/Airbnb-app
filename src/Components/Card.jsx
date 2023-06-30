import React from 'react';
import athelete from "../Images/Swimming-athlete.png"
import wedding from "../Images/wedding-woman.png"
import star from "../Images/Star 1.png"

function Card (props) {
    console.log(props.openSpots)
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === "Online"){
        badgeText = "ONLINE"
    }

    
    return ( 
        <div className="card">
       {badgeText  && <div className='card--badge'>{badgeText}

        </div>}
        <img src={props.coverImg} alt='swimming athelete' className='card--image'/>
            <div className='card-stats'>
            <img src={star} alt='stars' className='card--star'/>
            <span className='gray'>{props.stats.rating}</span>
            <span className='gray'>({props.stats.reviewCount}) . </span>
            <span className='gray'>{props.location} </span>
        </div>
            <p className='card--title'>{props.title} </p>
            <p className='card--price'><span className='bold'>${props.price}</span> / person </p>
    </div>
     );
     
}

export default Card ;