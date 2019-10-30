import React from 'react';


function Answer({movies}) {
    return (
        <div className="DisplayMovie">
            <img src={movies.posterUrl} />
            <p>Title: {movies.title} {' '}</p>
            <p>Director: {movies.director}</p>
            <p>Year: {movies.year}</p>
            <p>Country: {movies.country}</p>
         
        
        </div>
    )
}



export default Answer;