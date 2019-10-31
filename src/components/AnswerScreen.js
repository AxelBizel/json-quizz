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

const btnStyle = {
    float: "right",
    margin: "120px",
    padding: "20px",
}


function AnswerScreen({movie, answer, startGame, rightAnswer, showModalEnd}) {
    return (
        <div>
            <div>{answer ? <h1>Good job, you got the right answer!</h1> : <h1>Sorry, the answer was {rightAnswer}.</h1>}</div>
            <div className="DisplayMovie" style={displayMovieStyle}>
                    <div className="MovieInfo" style={movieInfoStyle}>
                        <p>Title: {movie.title}</p>
                        <p>Director: {movie.director}</p>
                        <p>Year: {movie.year}</p>
                        <p>Country: {movie.country}</p>
                    </div>
                <div className="MoviePoster"><img src={movie.posterUrl} alt="MoviePoster"/></div>
            </div>
            <button style={btnStyle} onClick={() => {startGame(); showModalEnd()}}>NEXT</button>
        </div>
    )
}



export default AnswerScreen;