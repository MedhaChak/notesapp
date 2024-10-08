import Note from './Note';
import Addnote from './Addnote';


const Noteslist = ({notes, handleAddNote, handleDeleteNote, colorMode}) =>{
    return(
        <div className='noteslist'>
            {notes.map((note)=>(
                <Note id={note.id} 
                      text={note.text} 
                      date={note.date}
                      handleDeleteNote={handleDeleteNote}
                      />
                      ))}
            <Addnote handleAddNote={handleAddNote} colorMode={colorMode} />
        </div>
    );
};
export default Noteslist;