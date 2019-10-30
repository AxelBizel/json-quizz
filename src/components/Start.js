import React, { Component } from "react";
import Jason from '../img/60578.jpg'
import "./start.css";
import "../index"

class Start extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
    }

    render() {
		const showStyleMain = {
			transform: 'translateY(0vh)',
			display: 'block',
		}
		const hideStyleMain = {
			transform: 'translateY(-100vh)',
			display: 'none',

		}
		
		return (
        <div className="modal" style={this.props.show ? showStyleMain: hideStyleMain}>
			<div className="modal-wrapper">
				<img src={Jason}></img>
			<div class="textmodal">
				<p>JSON's Quiz</p>
				<button onClick={this.props.startGame}>LET'S PLAY</button>
			</div>
			</div>
		</div>
        );
    }
}

export default Start;