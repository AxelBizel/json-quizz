import React from "react"

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <p>"Qui est le réalisateur du film ?"</p>
            </div>
            
        )
    }
} 

export default Questions;

function GetQuestions({ movie }) {

    // let style = {
    //     height: "400px",
    //     // maxWidth: "200px"
    }

  return (
    <div className="DisplayQuestion">
      <div>{movie.quote}</div>
    </div>
  );
};

export default DisplaySimpsonsQuote;