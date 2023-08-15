import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'


export const NotesList = ({notes,handleAddNote,handleDeleteNote}) => {
  return (
    <div className='note-list'>
        {notes.map((note)=>(
            <Notes key={note.id} id={note.id} text ={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
        ))}
        <AddNote handleAddNote={handleAddNote} handleDeleteNote={handleDeleteNote}/>
       
    </div>
  )
}
