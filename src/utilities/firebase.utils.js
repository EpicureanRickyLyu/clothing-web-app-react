import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";//create an app instance
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import signin from "../routes/signin/signin.component";
import { async } from '@firebase/util';
import { useReducer } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8FvXvvHKJ3ax1iOArErBJwePdfWO7DBE",
  authDomain: "crown-clothing-db-39d8e.firebaseapp.com",
  projectId: "crown-clothing-db-39d8e",
  storageBucket: "crown-clothing-db-39d8e.appspot.com",
  messagingSenderId: "233166638813",
  appId: "1:233166638813:web:a2842dbd48732568c09534"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters(
    {
        prompt : "select_account"
    }
);

export const auth = getAuth();
export const signinwithgooglePopup = () => signInWithPopup(auth,provider);

////=---------firebase db

const db = getFirestore(); 
export const createUserDocFrom = async (userAuth) =>{
    console.log("db :",db);
    console.log(userAuth);
    const userDocRef = doc(db,'users',userAuth.user.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)
    //console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists())
    {
        const {displayName,email} = userAuth.user;
        const createAt = new Date();
        try {
            await setDoc( userDocRef,
                {displayName,
                email,
                createAt,},
            )
        } catch (error) {
            console.log('create user error', error.message);
        }
    }
    else
    {

    }
    return userDocRef;
};
