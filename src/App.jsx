import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    })
  }
  function deleteNote(id){
    setNotes((prevValue)=>{
      return prevValue.filter((item,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;