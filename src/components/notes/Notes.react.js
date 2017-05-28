
import React from 'react';
import Model from 'mutable-model';
import api from 'js/api';

import Nav from '../Nav';

import NotePreview from './NotePreview';
import NoteFull from './NoteFull';

class Notes extends React.Component {

  constructor(props) {
    super(props);

    this.model = new Model(this, {
      searchString: '',
      listOpen: false,
      selectedNoteIndex: 0,
      notes: [
        {
          _id: 1,
          title: 'My Note',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }
      ],
    });
	}

  componentDidMount() {
    this.refreshNotes();
  }

  render() {
    return (
      <div className={`component-notes ${this.model.listOpen ? 'list-open' : ''}`}>
        <Nav
          title="Notes"
          onMenuButtonClick={() => this.model.listOpen = !this.model.listOpen}
          searchValue={this.model.searchString}
          onSearchChange={(val) => this.model.searchString = val} />

        <div className="main-container">
          <div className="notes-list">
            {this.model.notes.map((note, index) =>
              <NotePreview note={note} key={note._id} onSelect={(note) => {
                  this.model.selectedNoteIndex = index;
                  this.model.listOpen = false;
                }} /> )}
          </div>
          <div className="current-note" onClick={() => this.model.listOpen = false}>
            {this.model.notes[this.model.selectedNoteIndex] ?
              <NoteFull note={this.model.notes[this.model.selectedNoteIndex]} />
              : null }
          </div>
        </div>
      </div>
    );
	}

  handleCreateNoteButtonClick() {
    /*
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
      });*/
  }

  refreshNotes() {
    return api.note.getAllNotes()
      .then((notes) => {
        this.model.notes = notes;
      });
  }

}

export default Notes;
