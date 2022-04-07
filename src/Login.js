// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import Axios from "axios";

import LoginButton from "./LoginButton";

function Login() {

    return(
        <form className='loginForm'>
            <input type="text" name="userId" className='inputField' placeholder="아이디"/>
            <input type="password" name="password" className='inputField' placeholder="비밀번호"/>
            <LoginButton/>
        </form>
    )
}

export default Login;