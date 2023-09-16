import React from "react";

function Review (props) {
  // creates a props component for the review that will be displayed and is passed the props from the ReviewForm.
    return (
      <div className="reviewItem">
      <p>
        {props.reviewLog}
      </p>
      <p>{props.reviewEmail}</p>
    </div>
    )
  
}

export default Review