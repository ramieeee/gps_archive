import { useState } from "react";
import LoginButton from "./LoginButton";

function Login() {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");

    function eventChange(event) {
        setUserId(event.target.value);
        setUserPw(event.target.value);
    }

    return(
        <form className='loginForm'>
            <input type="text" onChange={eventChange}  name="id" className='inputField' placeholder="ID" required="required"/>
            <input type="password" onChange={eventChange}name="pw" className='inputField' placeholder="PW" required="required" autoComplete="off"/>
            <LoginButton valueId={userId} valuePw={userPw}/>
        </form>
    )
}

export default Login;