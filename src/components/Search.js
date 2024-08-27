import React from "react"; 
import { MdSearch } from "react-icons/md";




const Search = ({handleSearchNote, colorMode}) =>{
    return(
        <div className="search">
          <span className={colorMode === "dark" ? "savedark" : "" }><MdSearch className="search-icons" size='1.3em'/></span>
            <input 
                onChange={(event)=>handleSearchNote(event.target.value)} 
                type='text' 
                placeholder="type to search..."/>
        </div>
    );
};

export default Search;