import { MdDeleteForever} from 'react-icons/md';




const Note = ({id,text,date,handleDeleteNote}) =>{
    return(
        <div className="Note">
            <span>{text}</span>
            <div className="notefooter">
                <small>{date}</small>
                <MdDeleteForever className='deleteic' 
                                onClick={()=> handleDeleteNote(id)} 
                                size="1.3em"/>
            </div>
        </div>
    )
}
export default Note;