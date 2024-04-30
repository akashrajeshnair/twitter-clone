import React from 'react';
import "./Tweet.css";

const Tweet = ({ user, tweet }) => {
    return (
        <div className="tweet">
            <div className="profile-pic">
                <img alt="Profile Pic" />
            </div>
            <div className="tweet-content">
                <div className="username">{user.username}</div>
                <div className="text">{tweet.text}</div>
                <div className="date">{tweet.date}</div>
            </div>
        </div>
    );
};

export default Tweet;