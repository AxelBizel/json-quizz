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


function Answer({movie}) {
    return (
        <div className="DisplayMovie" style={displayMovieStyle}>
            <div className="MovieInfo" style={movieInfoStyle}>
                <p>Title: {movie.title}</p>
                <p>Director: {movie.director}</p>
                <p>Year: {movie.year}</p>
                <p>Country: {movie.country}</p>
            </div>
            <div className="MoviePoster"><img src={movie.posterUrl} alt="MoviePoster"/></div>
        </div>
    )
}



export default Answer;