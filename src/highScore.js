import React, {Component} from 'react';

class HighScore extends Component {

    render () {
        if (this.props.overTen) {

    } return (
          <h3>You beat a high score  
            <button onClick ={(e) => this.props.onReset(e)}> Reset </button> 
            {/* This is a comment - push ctrl + "/ " 
            That button is a event handler */}

          </h3>

        )
    }
}

export default HighScore;