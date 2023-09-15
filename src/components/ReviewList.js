import React, { useState } from "react";
import Review from "./Review";

function ReviewList (props) {
    let reviewList = [];
    if(props) {
      // Object.keys(props).map((item, index) => {
      //   reviewList.push(<Review key={index} reviewLog={} reviewEmail={item.reviewEmail}/>);
      //   return reviewList;
      // })
      for(let key of Object.keys(props)) {
        reviewList.push(<Review key={key} reviewLog={props[key].reviewLog} reviewEmail={props[key].reviewEmail}/>)
      }
      console.log(Object.keys(props))
    }
    return ( 
      <div>
        {reviewList}
      </div>
    )
}

export default ReviewList