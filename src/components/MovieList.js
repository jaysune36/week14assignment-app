import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="d-flex flex-row flex-wrap column-gap-2">
        <Movie />
        </div>
      </div>
    )
  }
}