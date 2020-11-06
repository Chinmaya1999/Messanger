import React from "react";
import "./Login.css";
import { IconButton,Button} from "@material-ui/core";
import { auth,provider } from "./firebase";
import mainleft from "./icons/main-left.svg";
import mainmiddle from "./icons/main-middle.svg";
import mainright from "./icons/main-right.svg";
import {FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

function Login(){

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));

    };

return (
    <div className="login">
        <div className="login__logo">

            <div className="login__logo__img">
            <img src={mainleft} alt=""/>
            <img src={mainmiddle} alt=""/>
            <img src={mainright} alt=""/>


            </div>

            <div className="login_text">
          <p>CONNECT</p>
          <p>COLLABRATE</p>
          <p>STAY UP TO DATE</p>
        </div>
            
           
            
            
        </div>
        

        <Button onClick={signIn}>Sign in</Button>


        <div className="login__icon">
        <div>
            <IconButton> <FaGoogle size="25px" /> </IconButton>
            
            
        </div>
        <div  >
            <IconButton> <FaFacebook size="25px" /></IconButton>
            
        </div>
        
        <div >
            <IconButton> <FaTwitter size="25px"/> </IconButton>
            
        </div>


        </div>

        


        


    </div>
);

}

export default Login;