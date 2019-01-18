import React, { Component } from 'react';
import './toolbar.css'

class Toolbar extends Component {
    state = { 

     }
     componentDidMount = () => {

     }
    render() { 
        return (
            <nav className="navbar bg-primary shadow">
                <span className="mb-0 h1">
                    React Keep
                </span>
                <span className="badge m-2 bg-secondary">
                    0
                </span>
            </nav>
          );
    }
}
 
export default Toolbar;