//firestore db
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";//create an app instance
import {getAuth,signInWithRedirect,signInWithPopup,
    signInWithPhoneNumber,
    GoogleAuthProvider,
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

} from 'firebase/auth'

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
const Facebookprovider = new FacebookAuthProvider()
//use 不同的provider提供不同的auth，比如facebook，twitter等
provider.setCustomParameters(
    {
        prompt : "select_account"
    }
);

export const auth = getAuth();
export const signinwithgooglePopup = () => signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);
export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email||!password) return;
    
    console.log("email create success");
    return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthWithEmailAndPassword = async (email,password) => {
    if(!email||!password) return;
    
    console.log("sign in success");
    return await signInWithEmailAndPassword(auth, email, password)
}
export const SignoutUser = () =>{
    signOut(auth);
}
export const OnAuthstatecahngeListener = (callback) => {
    if(!callback) return;
    onAuthStateChanged(auth,callback);
}
////=---------firebase firestore db------------------///
//firestore based on Doc model
const db = getFirestore(); 
export const createUserDocFrom = async (userAuth,addtionalInfo = {}) =>{
    
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapshot = await getDoc(userDocRef)


    if(!userSnapshot.exists())
    {
        const {displayName,email} = userAuth;
        const createAt = new Date();
        try {
            await setDoc( userDocRef,
                {displayName,
                email,
                createAt,
                ...addtionalInfo },//passed username will overwrite default
            )
            console.log("create doc in db success");
            alert("register success");
        } catch (error) {
            console.log('create user error', error.message);
        }
    }
    
    return userDocRef;
};
