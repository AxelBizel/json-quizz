import React from 'react';


const displayMovieStyle = {
    display: "flex",
    justifyContent: "space-around",
    fontSize: "22pt",
    margin: "50px",
}

const movieInfoStyle = {
    marginTop: "100px",
}


function Answer({movies}) {
    return (
        <div className="DisplayMovie" style={displayMovieStyle}>
            <div className="MovieInfo" style={movieInfoStyle}>
                <p>Title: {movies.title}</p>
                <p>Director: {movies.director}</p>
                <p>Year: {movies.year}</p>
                <p>Country: {movies.country}</p>
            </div>
            <div className="MoviePoster"><img src={movies.posterUrl} alt="MoviePoster"/></div>
        </div>
    )
}



export default Answer;