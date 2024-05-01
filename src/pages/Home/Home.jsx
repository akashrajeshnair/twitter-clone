import {React, useEffect, useState} from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import { useNavigate } from 'react-router';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../firebase/firebase-config';
import './Home.css';

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
        <div className='home'>
            <Sidebar/>
            <Feed/>
        </div>
    );
};

export default Home;
