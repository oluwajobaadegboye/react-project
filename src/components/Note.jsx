import React, { Component } from 'react';

class Note extends Component {
    state = {  }

    constructor(props){
        super();
    }

    handleDeleteClick= () => {
             console.log('handleDeleteClick', this.props);
             this.props.onNoteDelete(this.props.note.noteId);
    }
    render() { 
        return (  
            <div className="card shadow note mb-5">
                <div className="card-body">
                    <span className="h3 mb-4">{this.props.noteTitle}</span>
                    <div className="note-text mb-4">{this.props.noteText}</div>
                    <button className="btn btn-outline-danger" onClick={this.handleDeleteClick}>Delete</button>
                </div> 
            </div>
        );
    }
}
 
export default Note;