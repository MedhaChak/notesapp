import React from "react";
import { IconButton} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({handleColorMode,colorMode}) => {
    
    return(
        <div className="Header">
           
           
              <div className="hd">NoTeY-nOtE </div>
            <IconButton className="icon" icon={colorMode === "dark" ? <FaSun className="sun"/> : <FaMoon className="moon"/>} onClick={handleColorMode}>
                </IconButton>
        </div>
    )

};

export default Header;


