import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faFaceSadCry,faSmileWink} from "@fortawesome/free-solid-svg-icons";
const Reviews = () =>{
    return(
<>
<div className="reviews">
    <h2>Reviews</h2 >
    <h2>1,281 Positive</h2>
    <FontAwesomeIcon icon={faSmileWink} className="happy" bounce />
    <h2>52 Negative</h2> 
    <FontAwesomeIcon icon={faFaceSadCry} className="cry" beatFade/>
  
</div >
</>
    )
    
    
}
export default Reviews