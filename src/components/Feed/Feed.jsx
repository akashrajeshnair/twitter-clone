import React, { useState, useEffect } from "react";
import TweetBox from "../TweetBox/TweetBox";
import Tweet from "../Tweet/Tweet";
import "./Feed.css";
import FlipMove from "react-flip-move";

function Feed() {
  /*const [posts, setPosts] = useState([]);

  /*useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);*/

  const posts = [
    {
        id: 1,
        text: "hello",
        date: Date("2024-04-26")
    },
    {
        id: 2,
        text: "this is a test",
        date: Date("2024-04-26")
    }
]

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Tweet
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
