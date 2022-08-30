import React from "react";

const Card = ({name, email, id}) => {
  return (
      <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
        <img alt='robots' src= {`https://robohash.org/${id}?size=200x200`}/>
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }

  export default Card;

  //must export default variable 
  //must import React becuase thebscript is not is JS but is actually in JSX which won't work unless react is imported in
  //can only return one element