import React, { Component } from "react";

class Count extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
    }

    render() {
        return (
            <div>
                <p>Score: {this.props.count}/20</p>
            </div>

        )
    }
}

export default Count;