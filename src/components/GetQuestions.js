import React from "react"


function GetQuestions({ movie }) {

    // let style = {
    //     height: "400px",
    //     // maxWidth: "200px"

  const questions = [
    `Qui est le réalisateur du film ${movie.title} ?`,
    `Quel film a été réalisé par ${movie.director} ?`,
    `En quelle année le film ${movie.title} est-il sorti ?`,
    `Quel film a été réalisé en ${movie.year} ?`,
    `Quel film a été tourné dans ce pays : ${movie.country} ?`,
  ]

  const randomQuestion = questions[Math.floor(questions.length * Math.random())];
 



  return (
    <div className="DisplayQuestion">
      <div>{randomQuestion}</div>
    </div>
  );
};

export default GetQuestions;