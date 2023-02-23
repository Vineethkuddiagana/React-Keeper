import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "../notes";
import CreateArea from "./CreateArea";
function App() {
  const [noteList, setNoteList] = useState([]);
  function getNote(note) {
    setNoteList((prevValues) => {
      return [...prevValues, note];
    });
  }
  function deleteNote(id) {
    setNoteList((prevValues) => {
      return prevValues.filter((noteItems, index) => {
        return index !== id;
      });
    });
  }
  function displayNote(noteItem, index) {
    return (
      <Note
        key={index}
        id={index}
        removeNote={deleteNote}
        title={noteItem.title}
        content={noteItem.content}
      />
    );
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={getNote} />
      {noteList.map(displayNote)}
      <Footer />
    </div>
  );
}

export default App;
