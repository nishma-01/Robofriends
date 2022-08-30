import React from "react";

const SearchBox = ({ searchfield, searchChange}) => {
return (
  <div className="pa2"> 
  <input 
    className="pa3 ba b--green bg-lightest-blue"
    type='search' 
    placeholder='search robots' 
    onChange = {searchChange}
    />
  </div>
);
}
export default SearchBox;

//good practice to wrap in div in case want to add more to it