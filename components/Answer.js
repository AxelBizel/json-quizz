import React,  { Component } from 'react';


class Answer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
    }
    
    

	render() {
        return (
            <div className="DisplayMovie">
                <img src={simpsons.image} />
                <ul>
                    <li>Name: {simpsons.character} </li>
                    <li>Quote: {simpsons.quote}</li>
                </ul>
            </div>
        )
    }
}



export default Answer;