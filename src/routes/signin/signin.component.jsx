import { signinwithgooglePopup } from "../../utilities/firebase.utils";
import { createUserDocFrom } from "../../utilities/firebase.utils"; //distingguish import funtion and component
const signin = () => {
    const logGoogleUser = async () => {
        const response = await signinwithgooglePopup();
        const userDocRef = await createUserDocFrom(response);
    }
    return(
        <div>
            <button onClick={logGoogleUser}> sign in with google</button>
            <h1>heelo</h1>
        </div>
    )
}

export default signin;