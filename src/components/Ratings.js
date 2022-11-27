import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faStar} from "@fortawesome/free-solid-svg-icons";
const Ratings = () =>{
    return(
        <div className= 'ratings'>
            <h2>
            Ratings:
            </h2>
            <div className='number-rating'>
            <h1>
           4.6 
            </h1>
            <FontAwesomeIcon icon={faStar} className="star" data-fa-transform="shrink-8 right-10" beatFade/>
            <h4>One of the Best Ratings out of all the Website</h4>
            </div>
        </div>
    )
}
export default Ratings 