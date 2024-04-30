import {React, useEffect, useState} from 'react';
import Tweet from './Tweet';
import { useNavigate } from 'react-router';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../firebase/firebase-config';

const Home = () => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/');
            } else {
                setUser(user1);
                console.log(user1)
            }
        })
    }) 
    // Assuming you have a user object with details of the currently logged in user

    const [user1, setUser] = useState(null);

    const user = {
        name: 'John Doe',
        username: 'johndoe',
        bio: 'Software Developer',
        // ... other user details
    };
    const tweets = [
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
    const navigate = useNavigate();

    if (!user) {
        navigate('/');
    }

    return (
        <div>
            <div>
                <h1>Welcome, {user.name}!</h1>
                <p>Username: {user.username}</p>
                <p>Bio: {user.bio}</p>
                {/* Add more user details as needed */}
            </div>
            <div>
                {/* Render a list of tweet components */}
                {/* Assuming you have an array of tweet objects */}
                {tweets.map((tweet) => (
                    <Tweet key={tweet.id} user={user} tweet={tweet} />
                ))}
            </div>
        </div>
    );
};

export default Home;
