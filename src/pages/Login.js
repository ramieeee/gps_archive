import { useState } from "react";
import axios from "axios";
import WelcomeText from "../WelcomeText";
import { useNavigate } from 'react-router';

function Login() {
    const navigate = useNavigate();

    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userToken, setUserToken] = useState("");

    const eventChange = (event) => {
        setUserId(event.target.value);
        setUserPw(event.target.value);
        // console.log(userId);
        // console.log(userPw);
    }

    const handleClick = () => {
        axios.post("/login", {
                "username": userId,
                "password": userPw
        })
        .then(function(response) {
            console.log('**response is:'+response.status)
            setUserToken(response.headers.authorization)
            sessionStorage.setItem('Token', userToken)
            if (userToken && response.status === 200) {
                console.log('login successful');
                console.log("usertoken=>"+userToken);
                navigate("/api/card/list")
            }
        }).catch(function(error) {
            console.log('**error at post request** -> ' + error)
        });
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }

    return(
        <div>
            <WelcomeText />
            <form className='loginForm' onKeyDown={handleEnter}>
                <input type="text" onKeyUp={eventChange}  name="id" className='inputField' placeholder="ID" required="required"/>
                <input type="password" onKeyUp={eventChange}name="pw" className='inputField' placeholder="PW" required="required" autoComplete="off"/>
                <input type="button" className="submitButton" value="로그인" onClick={handleClick}/>
            </form>
        </div>
    )
}

export default Login;