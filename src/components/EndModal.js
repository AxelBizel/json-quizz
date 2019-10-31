import React, { Component } from "react";
import Jason from '../img/60578.jpg'
import "./start.css";
import "../index"

class EndModal extends Component {
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
				<p>You scored</p>
                <p>{this.props.count}/20</p>
				<button onClick={() => {this.props.startGame(); this.props.startTimer(); this.props.hideModal()}}>BACK TO START</button>
			</div>
			</div>
		</div>
        );
    }
}

export default EndModal;