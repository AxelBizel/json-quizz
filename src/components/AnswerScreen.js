import React from 'react';
import './answersscreen.css'


function AnswerScreen({movie, answer, startGame, rightAnswer, showModalEnd}) {
    return (
        <div id="answerscreen">
            <div id="congrat">{answer ? <h1>Good job, you got the right answer!</h1> : <h1>Sorry, the answer was {rightAnswer}.</h1>}</div>
            <div className="DisplayMovie">
                    <div className="MovieInfo">
                        <p>Title: {movie.title}</p>
                        <p>Director: {movie.director}</p>
                        <p>Year: {movie.year}</p>
                        <p>Country: {movie.country}</p>
                    </div>
                <div className="MoviePoster"><img src={movie.posterUrl} alt="MoviePoster"/></div>
            </div>
            <button id="buttonnext" onClick={() => {startGame(); showModalEnd()}}>NEXT QUESTION</button>
        </div>
    )
}



export default AnswerScreen;