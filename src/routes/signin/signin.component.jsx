import { auth,signinwithgooglePopup, signInWithGoogleRedirect } from "../../utilities/firebase.utils";
import { createUserDocFrom } from "../../utilities/firebase.utils"; //distingguish import funtion and component
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import Signup from "../signup/signup.component";
import Button from "../../component/cutombutton/custombutton.component";
////////开头大写才能被识别成component
const Signin = () => {

    useEffect(() => {
        async function fetchRedirectResult()
        {
            const response = await getRedirectResult(auth);
            if(response)
            {
                const {user} = response
                const userDocRef = await createUserDocFrom(user);
            } 
        }
        fetchRedirectResult();
    },[]);

    const signinGooglePopup = async () => {
        //获取google给的auth信息，内部有一个user参数，里面包含uid
        const {user}= await signinwithgooglePopup();

        const userDocRef = await createUserDocFrom(user);
        console.log("userdoc",userDocRef);
    }
   
       

 
    return(
        <div>
            <Button onClick={signinGooglePopup}>google</Button>
            <Button onClick={signInWithGoogleRedirect}>google redirect</Button>
            <h1>Sign in</h1>
            <Signup/>
        </div>
    )

}

export default Signin;