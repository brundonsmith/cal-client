
import React from 'react';
import api from 'api';

import Note from './Note';

const Notes = React.createClass({

  getInitialState: function() {
    return {
      writingNewNote: false,
      newNoteTitle: '',
      newNoteBody: '',

      notes: [ ],
    };
	},

  componentDidMount: function() {
    this.refreshNotes();
  },

  render: function() {
    return (
      <div className={`component-notes ${this.state.writingNewNote ? 'writing-new-note' : ''}`}>
        <div className="new-note" onClick={() => this.setState({ writingNewNote: true })}>
          New note

          <div className="new-note-fields">
            <input autoFocus
              value={this.state.newNoteTitle}
              onChange={(e) => this.setState({newNoteTitle: e.target.value})}></input>
            <textarea
              value={this.state.newNoteBody}
              onChange={(e) => this.setState({newNoteBody: e.target.value})}></textarea>
            <button onClick={this.handleCreateNoteButtonClick}>Create</button>
          </div>

        </div>

        {this.state.notes.map((note) => <Note key={note._id} note={note} />)}
      </div>
    );
	},

  handleCreateNoteButtonClick: function() {
    api.note.createNote({
        title: this.state.newNoteTitle,
        body: this.state.newNoteBody,
      })
      .then(() => {
        this.refreshNotes()
        this.setState({
          writingNewNote: false,
          newNoteTitle: '',
          newNoteBody: '',
        });;
      });
  },

  refreshNotes: function() {
    return api.note.getAllNotes()
      .then((notes) => {
        this.setState({
          notes: notes
        });
      });
  },

})
export default Notes;
