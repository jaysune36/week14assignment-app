import React, { useState } from "react";
import Review from "./Review";

function ReviewList (props) {
    let reviewList = [];
    // Using the props passed down from the ReviewForm component, it will loop through those props using the Object.keys and using the key to push each Review component to the ReviewList along with the props variables.
    if(props) {
      for(let key of Object.keys(props)) {
        reviewList.push(<Review key={key} reviewLog={props[key].reviewLog} reviewEmail={props[key].reviewEmail}/>)
      }
    }
    return ( 
      <div className="reviewItems">
        {reviewList}
      </div>
    )
}

export default ReviewList