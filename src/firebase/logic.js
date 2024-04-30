import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import { addDoc, doc, setDoc } from '@firebase/firestore';
import {firestore} from '../firebase/firebase-config.js';



async function signIn(email, password){
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error signing in", error);
    }
}

async function signOutTwitter(){
    await signOut(auth);
}

async function signUp(user) {
    try {
        if (user.profileImg === "") {
            console.log("No profile image");
        } else {
        await createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const currentUser = userCredential.user;
            const userDocRef = doc(firestore, "users", currentUser.uid);
            setDoc(userDocRef, {
                username: user.username,
                name: user.displayName,
                bio: user.bio,
                profileImg: "",
                followers: [],
                following: [],
                tweets: [],
                bookmarks: [],
                likedTweets: [],
            }).then(() => {
                console.log("Document successfully written!");
            }).catch((error) => {
                console.error("Error writing document: ", error);
            });
        })
        }
    } catch (error) {
        console.error("Error signing up", error);
    }
}

export {signIn, signOutTwitter, signUp};