import React from "react";

function Review (props) {
  
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