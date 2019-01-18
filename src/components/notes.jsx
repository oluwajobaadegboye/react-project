import React, { Component } from 'react';
import Note from './../components/Note';
import axios  from 'axios';

class Notes extends Component {
    state = {  
        userName:'me',
        myNotes : []
    }

    constructor(){
        super();
        // const note = [{
        //     key:1, title:'My First Note', text:'My Note Text'
        // }]
        // this.state.myNotes = note; 
    }

    onHandleDelete  = (id) =>{
        console.log('Delete Button Clicked ' , id)
        
    }
    render() { 
        return (  
            <div className="notes w-75 p3 h-75 d-inline-block">
                <button className="btn btn-outline-primary btn-small m-2">
                    Add Note
                </button>

                <div className="notes-container">
                    {
                        this.state.myNotes.map(
                            note => (
                                <div key={note.noteId}>
                                    <Note key={note.noteId}
                                    noteTitle={note.title}
                                    noteText ={note.text}
                                    onNoteDelete={this.onHandleDelete}
                                    note = {note}
                                    />
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        );
    }
    componentDidMount() {
        const uri = `https://us-central1-pka-forms-fef14.cloudfunctions.net/getNotes?userName=${this.state.userName}`;
        axios.get(uri)
        .then(noteData => {
            console.log('Note Get Data ',noteData);
            this.setState({...this.state, myNotes:noteData.data})
        });
    }
}
export default Notes;