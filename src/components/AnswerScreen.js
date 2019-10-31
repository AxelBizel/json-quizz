import React from 'react';
import { replace } from './helpers'

const displayMovieStyle = {
    display: "flex",
    justifyContent: "space-around",
    fontSize: "22pt",
    margin: "50px",
}

const movieInfoStyle = {
    marginTop: "100px",
}

const btnStyle = {
    float: "right",
    margin: "120px",
    padding: "20px",
}



function AnswerScreen({movie, answer, startGame}) {
    const titleAPI = movie.title;
    const titleDisplay = replace(titleAPI);
    const directorAPI = movie.director;
    const directorDisplay = replace(directorAPI);
    const countryAPI = movie.country;
    const countryDisplay = replace(countryAPI);

    return (
        <div>
            <div>{answer ? <h1>YOU GOT IT!</h1> : <h1>SORRY, THE ANSWER WAS</h1>}</div>
            <div className="DisplayMovie" style={displayMovieStyle}>
                    <div className="MovieInfo" style={movieInfoStyle}>
                        <p>Title: {titleDisplay}</p>
                        <p>Director: {directorDisplay}</p>
                        <p>Year: {movie.year}</p>
                        <p>Country: {countryDisplay}</p>
                    </div>
                <div className="MoviePoster"><img src={movie.posterUrl} alt="MoviePoster"/></div>
            </div>
            <button style={btnStyle} onClick={() => startGame()}>NEXT</button>
        </div>
    )
}



export default AnswerScreen;