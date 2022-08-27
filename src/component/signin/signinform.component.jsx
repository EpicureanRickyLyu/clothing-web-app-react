import { useState ,useEffect} from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, createUserDocFrom } from "../../utilities/firebase.utils"; //distingguish import funtion and component
import { signinwithgooglePopup, signInWithGoogleRedirect,signInAuthWithEmailAndPassword} from "../../utilities/firebase.utils";
import Forminput from "../../component/form-input/form-input.component";
import Button from "../../component/cutombutton/custombutton.component";
import './sign-in-form.scss'
const defaultformcontent = [{
    email :'',
    password : '',
}]

const Signin  = () => {
   
    //initialize formfields
    const [formfields,setformfields] = useState(defaultformcontent);
   
    //destrcuture formfields
    const {email,password} = formfields;
    //console.log(formfields);
    useEffect(() => {
        async function fetchRedirectResult()
        {
            const response = await getRedirectResult(auth);
            if(response)
            {
                const {user} = response
                await createUserDocFrom(user);
            } 
        }
        fetchRedirectResult();
    },[]);

    const signinGooglePopup = async () => {
        //获取google给的auth信息，内部有一个user参数，里面包含uid
        try
        {
            const {user}= await signinwithgooglePopup();
            await createUserDocFrom(user);
        }
        catch(error)
        {
            alert(error.code);
        }
    }
   

    const resetFormfields = () =>
    {
        setformfields(null);
        //do not refresh page?????????????
        setformfields(defaultformcontent);
    }
    //console.log(formfields);
    const resetPasswordFormfields = () =>
    {
        formfields.password = '';
        formfields.confirmPassword = '';
        //console.log(formfields);
    }

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setformfields({...formfields,[name]:value});
    }
    const SubmitHandler = async (event) =>
    {
        //alert("submit sucess");
        event.preventDefault();///阻止所有默认的表单操作，自动刷新页面等
        try{
            const response = await signInAuthWithEmailAndPassword(email,password);
            console.log(response);
            //resetFormfields();//刷新表单 
        }
        catch(error)
        {
            switch(error.code)
            {
                case "auth/wrong-password":
                alert("wrong password");
                break;
                case "auth/too-many-requests":
                alert("Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later")
                break;
                case "auth/user-not-found":
                alert("user does not exist");
                break;
                default:
                console.log(error);
            }

         
   
        }
    }
    return(
        
        <div className="sign-in-container">           
            <form onSubmit={SubmitHandler}>
                
                <Forminput label="email" required onChange={handleChange} name = "email" value = {email}></Forminput>
               
                <Forminput label="Password"  type = "password" required onChange={handleChange} name = "password" value = {password}></Forminput>

                <div className="buttons-container">
                <Button buttontype="inverted" type="submit" >sign in</Button>
                <Button buttontype="google" type="button" onClick={signinGooglePopup}>google</Button>
                </div>
                <h3 className="sign-page-text">Don`t have an account? </h3>
                <span className="sign-page-text">sign up with your e-mail</span>
            </form>         
        </div>
        
    )
}

export default Signin;