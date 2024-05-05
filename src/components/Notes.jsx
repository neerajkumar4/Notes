import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
const Notes = () => {
    const [notes, setNotes] = useState([]);
    function addNote(note) {
        setNotes((prevValue) => {
            return [...prevValue, note];
        })
    }
    function deleteNote(id) {
        setNotes((prevValue) => {
            return prevValue.filter((item, index) => {
                return index !== id;
            })
        })
    }
    return (
        <div>
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => {
                return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
            })}

        </div>
    )
}

export default Notes;