import React, { Component } from "react";
import './questionscreen.css'

class Count extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
    }

    render() {
        return (
            <div id="countpoints">
                <p>Score: {this.props.count}/20</p>
            </div>
        )
    }
}

export default Count;