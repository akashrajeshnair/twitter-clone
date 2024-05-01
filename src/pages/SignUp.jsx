import React, { useState } from 'react';
import { signUp } from '../firebase/logic';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [bio, setBio] = useState('');
    const navigate = useNavigate();

    let user = {
        username: username,
        displayName: displayName,
        email: email,
        password: password,
        bio: bio,
        profilePic: profilePic
    }

    const handleSignUp = () => {
        signUp(user);
        navigate('/home');
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="displayname">Display Name:</label>
                <input
                    type="text"
                    id="displayname"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="confpassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confpassword"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                />

                <label htmlFor="Bio">Bio:</label>
                <input
                    type="text"
                    id="password"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />

                <label htmlFor="profilePic">Profile Picture:</label>
                <input
                    type="file"
                    id="profilePic"
                    onChange={(e) => setProfilePic(e.target.value)}
                />
                <button type="button" onClick={handleSignUp}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;