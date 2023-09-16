import React from "react";
import MovieList from "./MovieList";

function Header() {
  return (
    <div className="container">
    <header className="text-center mb-5">
      <h1>Welcome to my Movie Review Page!</h1>
    </header>
    <MovieList />
    </div>
  )
}

export default Header;