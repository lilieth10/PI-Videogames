import React, { useState } from "react";
import { connect } from "react-redux"
import { searchVideogame } from "../../actions/videogames/searchVideogames.action";

 function SearchBar({searchVideogames}) {
    const [name, setName] = useState("");

    function handleName(e){
        e.preventDefault();
        setName(e.target.value)
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
          handleSubmit(e);
        }
      };

    function handleSubmit(e){
        e.preventDefault();
        if(!name){
            return alert("SearchBar is empty")
        } 
        if(name){
            searchVideogames(name)
        }
        setName("");
    }

    return(
        <div>
            <input
            type = "text"
            placeholder= "Search name..."
            value={name || ""}
            onChange={(e) => handleName(e)}
            onKeyPress={handleEnter}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}

export const mapDispatchToProps = (dispatch) => {
    return {
      searchVideogames: (name) => dispatch(searchVideogame(name)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(SearchBar);