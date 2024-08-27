
import Noteslist from "./components/Noteslist";
import { useState } from "react";
import { nanoid } from 'nanoid';
import Search from "./components/Search";
import Header from "./components/Header";
import { useColorMode } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";





const App = () => {
  const [notes, setNotes]=useState([{
    id: nanoid(),
    text:"first note",
    date: "16/03/2024"
  },
  {
    id: nanoid(),
    text:"second note",
    date: "17/03/2024"
  },
  {
    id: nanoid(),
    text:"third note",
    date: "15/03/2024"
  }]);

const {colorMode, toggleColorMode} = useColorMode();


const [searchText,setSearchText] = useState('');


  const addNote = (text) =>{
    const date = new Date();
    const newNote={
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);

  };
const deleteNote = (id) =>{

 const newNotes = notes.filter((note)=> note.id !== id);
 setNotes(newNotes);

}


   return( 
   <ChakraProvider>
    <div className="whole">
    <div className="sidebar">
        <Sidebar/>
    </div>
    
   <div className="container">
    <Header handleColorMode={toggleColorMode} colorMode={colorMode}/>
    <Search handleSearchNote={setSearchText}  colorMode={colorMode}/>
    <Noteslist 
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      colorMode={colorMode}
      />

    
  </div>
  </div>
  </ChakraProvider>
   );

};

export default App;