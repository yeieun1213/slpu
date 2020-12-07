import React, { Component } from 'react';
class Start extends Component {
    render() {
        return(
            <button size="lg" onClick={function(e){
                console.log(e);
                alert('start');
            }}>click please </button>
        );
    }
}

export default Start;