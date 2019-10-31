import React from 'react';
import { replace } from './helpers'
import './answersscreen.css'


function AnswerScreen({movie, answer, startGame, rightAnswer, showModalEnd}) {
    const titleAPI = movie.title;
    const titleDisplay = replace(titleAPI);
    const directorAPI = movie.director;
    const directorDisplay = replace(directorAPI);
    const countryAPI = movie.country;
    const countryDisplay = replace(countryAPI);
    const rightAnswerAPI = rightAnswer;
    const rightAnswerDisplay= replace(rightAnswerAPI);

      return (
        <div id="answerscreen">
            <div id="congrat">{answer ? <h1>Good job, you got the right answer!</h1> : <h1>Sorry, the answer was {rightAnswerDisplay}.</h1>}</div>
            <div className="DisplayMovie">
                    <div className="MovieInfo">
                    <p>Title: {titleDisplay}</p>
                        <p>Director: {directorDisplay}</p>
                        <p>Year: {movie.year}</p>
                        <p>Country: {countryDisplay}</p>
                    </div>
                <div className="MoviePoster"><img src={movie.posterUrl} alt="MoviePoster"/></div>
            </div>
            <button id="buttonnext" onClick={() => {startGame(); showModalEnd()}}>NEXT QUESTION</button>
        </div>
    )
}



export default AnswerScreen;