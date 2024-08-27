
import { useState } from "react";


const Addnote = ({handleAddNote,colorMode}) => {
    const [noteText, setNoteText]=useState('');
    
    const characterLimit = 200;

    const handleChange=(event)=>{
        if(characterLimit-event.target.value.length>=0){
            setNoteText(event.target.value);}


    };
    const handleSaveClick =() =>{
        if (noteText.trim().length > 0){
        handleAddNote(noteText);}
        setNoteText('');
    };

    
    return(
        <div className='Note new'>
            <textarea rows="8"
                       cols='10'
                      placeholder="Type to add a note...
                      -----------------------------------------------------------------------------------------------------------------------------"

                      value={noteText}
                      onChange={handleChange}></textarea>
                      
                      <div className="notefooter">
                        <small>{characterLimit - noteText.length} Remaining</small>
                        <button className="save" onClick={handleSaveClick}>
                                <span className={colorMode === "dark" ? "savedark" : "" }>Save</span>
                                </button>
                      </div>
        </div>
    );

    };
export default Addnote;












