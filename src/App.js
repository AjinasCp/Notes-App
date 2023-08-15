import { useEffect, useState } from "react";
import {nanoid} from 'nanoid';
import { NotesList } from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [note,setNote]=useState([
    {  
    id:nanoid(),
    text:"This is my first note ",
    date:'12/11/2024' 
  },
    {  
      id:nanoid(),
      text:"this is my second note",
      date:'14/10/2025' 
    }, 
      {  
        id:nanoid(),
        text:"this is my third note",
        date:'15/12/2023' 
      }
  ]);

  const [searchText,setSearchText]=useState('')

  const [darkMode,setDarkMode]=useState(false)

useEffect(()=>{
const savedNotes =JSON.parse(localStorage.getItem('react-notes-app-data'));
if(savedNotes){
  setNote(savedNotes)
}
},[])

  useEffect(()=>{
    console.log('useEffect triggered!');
    localStorage.setItem('react-notes-app-data',JSON.stringify(note))
  },[note])

  const addNote =(text)=>{

    const date =new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes = [...note,newNote]
    setNote(newNotes)

  }
  const deleteNote =(id)=>{
   const newNotes= note.filter((notes)=>notes.id !== id);
   setNote(newNotes)

  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
     <div className="container">
    <Header handleDarkMode={setDarkMode}/>
    <Search handleSearchNote={setSearchText}/>
    <NotesList notes={note.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
  </div>
  </div>
  );
}

export default App;
