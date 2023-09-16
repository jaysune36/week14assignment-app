import React from "react";
import Stars from "./Stars";
import ReviewForm from "./ReviewForm";

function Movie(props) {

// the Movie function will use the props passed down from the movieList and create a Movie componenet. Then it will add a Stars and ReviewForm component to each
  return (
    <div className="card w-100 p-3 movieCard">
      <div className="movieBanner">
        <img src={
            props.Poster
          }
          className="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">
            {
            props.Title
          } {props.Year}</h5>
        </div>
      </div>
      <div className="movieInfo">
        <Stars />
        <ReviewForm/>

      </div>
    </div>
  )


}

export default Movie
