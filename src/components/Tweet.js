import React from 'react';


const Tweet = (props) => {

  return (
    <div>
      <h3>{props.tweet}</h3>
      <h4>{props.name}</h4>
    </div>
  );
}

export default Tweet;