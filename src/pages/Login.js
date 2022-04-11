import { useState } from "react";
import axios from "axios";
import WelcomeText from "../WelcomeText";
import { useNavigate } from 'react-router';

// axios.post(url , formData)
// .then(res => {
//    if (res.status === 200)
//      toast.success("Success!");

//    history.push('/login')
           
//    } )
// .catch(err => {
//    console.log(err);
           
// });


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
            console.log('**response is:'+response.headers)
            setUserToken(response.headers.authorization)
            sessionStorage.setItem('Token', userToken)
            if (userToken) {
                console.log('login successful');
                console.log("usertoken=>"+userToken);
            }
            navigate("/api/card/list")
        }).catch(function(error) {
            console.log('**error at post request** -> ' + error)
        });
        // axios.get("/api/card/list", {
        //     headers: {
        //         Authorization: userToken}
        //     })
        // .then(function(response) {
        //     console.log(response);
        // }).catch(function(error) {
        //     console.log('**ERROR at get request**:' + error.response)
        // })
    };

    return(
        <div>
            <WelcomeText />
            <form className='loginForm'>
                <input type="text" onKeyUp={eventChange}  name="id" className='inputField' placeholder="ID" required="required"/>
                <input type="password" onKeyUp={eventChange}name="pw" className='inputField' placeholder="PW" required="required" autoComplete="off"/>
                <input type="button" className="submitButton" value="로그인" onClick={handleClick}/>
            </form>
        </div>
    )
}

export default Login;