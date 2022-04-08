import { useState } from "react";
import axios from "axios";

function Login() {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [tocken, setTocken] = useState("");

    function eventChange(event) {
        setUserId(event.target.value);
        setUserPw(event.target.value);
    }

    const handleClick = () => {
        axios.post("/login", {
                "username": userId,
                "password": userPw
        })
        .then(function(response) {
            // when successful
            setTocken(response.headers.authorization)
            console.log(tocken);
            
            axios.get("/api/card/list", tocken)
            .then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log('**ERROR**:' + error.response.data);
            });

        }).catch(function(error) {
            console.log('**ERROR:' + error.response + '**');
        });
    };

    return(
        <form className='loginForm'>
            <input type="text" onChange={eventChange}  name="id" className='inputField' placeholder="ID" required="required"/>
            <input type="password" onChange={eventChange}name="pw" className='inputField' placeholder="PW" required="required" autoComplete="off"/>
            <input type="button" className="submitButton" value="로그인" onClick={handleClick}/>
        </form>
    )
}

export default Login;