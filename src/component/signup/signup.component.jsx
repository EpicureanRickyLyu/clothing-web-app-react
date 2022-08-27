
import { useState } from "react";
import {createAuthUserWithEmailAndPassword, createUserDocFrom } from "../../utilities/firebase.utils";
import Forminput from "../form-input/form-input.component";
import './sign-up-form.scss'
import Button from "../cutombutton/custombutton.component";
const defaultformcontent = [{
    username : '',
    email :'',
    password : '',
    confirmPassword :'',
}]

const Signup = () => {
   
    //initialize formfields
    const [formfields,setformfields] = useState(defaultformcontent);
   
    //destrcuture formfields
    const {username,email,password,confirmPassword} = formfields;

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
        
        if(password === confirmPassword)
        {
            try{
                //存储auth信息
               const {user} = await createAuthUserWithEmailAndPassword(email,password);
               //const {user} = response;
               //存入数据库firestore
               await createUserDocFrom(user,{username});
               resetFormfields();//刷新表单 
            }
            catch(error)
            {
                if(error.code === 'auth/email-already-in-use') 
                {
                    alert("email already in use");
                }
                else if(error.code === 'auth/weak-password')
                {
                    alert("password at least 6")
                }
                else 
                {
                    console.log("submit failed",error);
                }
                resetFormfields();
                
            }
            
        }
        else
        {
            alert("confirm password failed");
            console.log("confirm password wrong");
            resetFormfields();  
        }

        

    }
    return(
        
        <div className="sign-up-container">
            
            <form onSubmit={SubmitHandler}>
                
                {/* <Forminput label="username" 
                inputoption = {{
                    type : "text" ,
                    required : true,
                    onChange : handleChange ,
                    name : "username" ,
                    value : "username" ,
                    }}></Forminput> */}
                
                <Forminput label="username" required onChange={handleChange} name = "username" value = {username}></Forminput>
                <Forminput label="Email"  type = "email" required onChange={handleChange} name = "email" value = {email}></Forminput>
               
                <Forminput label="Password"  type = "password" required onChange={handleChange} name = "password" value = {password}></Forminput>

                <Forminput label="confirmPassword"  type="password" required onChange={handleChange} name = "confirmPassword" value = {confirmPassword}></Forminput>
                <Button buttontype = "google" type="submit" >sign up</Button>
            </form>
            
        </div>
        
    )
}

export default Signup;