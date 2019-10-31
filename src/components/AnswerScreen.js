import React from 'react';
import './answersscreen.css'


function AnswerScreen({movie, answer, startGame}) {
    return (
        <div id="answerscreen">
            <div id="congrat">{answer ? <h1>YOU GOT IT!</h1> : <h1>SORRY, THE ANSWER WAS</h1>}</div>
            <div className="DisplayMovie">
                    <div className="MovieInfo">
                        <p>Title: {movie.title}</p>
                        <p>Director: {movie.director}</p>
                        <p>Year: {movie.year}</p>
                        <p>Country: {movie.country}</p>
                    </div>
                <div className="MoviePoster"><img src={movie.posterUrl} alt="MoviePoster"/></div>
            </div>
            <button id="buttonnext">NEXT QUESTION</button>
        </div>
    )
}



export default AnswerScreen;