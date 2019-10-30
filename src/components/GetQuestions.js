import React from "react"


function GetQuestions({ movie }) {

    // let style = {
    //     height: "400px",
    //     // maxWidth: "200px"

  return (
    <div className="DisplayQuestion">
      <p>Qui est le réalisateur du film ?</p>
      {/* <p>`Qui est le réalisateur du film ${movie.title}?`</p> */}
    </div>
  );
};

export default GetQuestions;