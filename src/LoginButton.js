import axios from "axios";
import { useState } from "react";

function LoginButton({ valueId="", valuePw="" }) {
    const [tocken, setTocken] = useState("");

    const handleClick = () => {
        axios.post("/login", {
                "username": valueId,
                "password": valuePw
        })
        .then(function(response) {
            // when successful
            setTocken(response.headers.authorization)
            console.log(tocken);

            // axios.get("/user/list", tocken)
            // .then(function(response) {
            //     console.log(response);
            // }).catch(function(error) {
            //     console.log('**ERROR**:' + error.response.data);
            // });

        }).catch(function(error) {
            console.log('**ERROR:' + error.response + '**');
        });
    };

    return(
      <input type="button" className="submitButton" value="로그인" onClick={handleClick}/>
    );
}

export default LoginButton;