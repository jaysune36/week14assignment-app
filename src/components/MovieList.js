import React, { useEffect, useState } from "react";
import Movie from "./Movie";

function MovieList () {
// items and setItems will update and keep the state of each movie being pushed from the fetch
  const [items, setItems] = useState([]);
  let movies = [];
      useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=7887e7ff&s=one piece&type=movie&page=1')
        .then(res => res.json())
        .then(data => {
          setItems(data.Search);
        })
      }, [])
      // items are then itereated over once the state has been updated and then each items key is used on items object to push to the movie array and added each Movie componenet to within the jsx file.
      if(items) {
        for(let key of Object.keys(items)) {
        movies.push(<Movie key={key} id={items[key].id} Title={items[key].Title} Poster={items[key].Poster} Year={items[key].Year}/>);
        }
      }
    return(
      <div>
        <div className="d-flex flex-row flex-wrap column-gap-2 movieItems">
          {movies}
        </div>
      </div>
    )
    
}

export default MovieList