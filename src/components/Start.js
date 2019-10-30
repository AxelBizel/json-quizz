import React, { Component } from "react";
import "./start.css";

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
				<div className="modal-header">
					<h3>TEXT</h3>
				</div>
				<div className="modal-body">
					<p>
					JSON's Quiz
					{this.props.children}
					</p>
				</div>
				<div>
					<div className='center'>
					<button onClick={this.props.startGame}>PLAY</button>
					</div>
				</div>
			</div>
		</div>
        );
    }
}

export default Start;