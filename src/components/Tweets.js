import React from 'react';
import Tweet from './Tweet'

const Tweets = () => {

  const tweets = [{name: "michael jackson", tweet: "Be kind"}, {
    name: "Ed sheeran", tweet: "shape of you!"
  }]

  return (
    <div>
    <h3>Tweets</h3>
    <h4>you have {tweets.length} tweets!</h4>
      {
        tweets.map((tweet)=>(
          <Tweet tweet={tweet.tweet} name={tweet.name}/>
  ))
      }
      <Tweet />
    </div>
  );
}

export default Tweets;