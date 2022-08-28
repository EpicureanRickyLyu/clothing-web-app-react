
import Signup from "../../component/signup/signup.component";
import Signin from "../../component/signin/signinform.component";
import './authentication.scss'
////////开头大写才能被识别成component
const Authentication = () => {
 
    return(
        <div className="authentication-container">
        <Signin/>
        <Signup/>
        </div>       
    )

}

export default Authentication;