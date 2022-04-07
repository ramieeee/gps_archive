import axios from "axios";



function LoginButton() {
    const handleClick = () => {
        axios.post("/login", {
                "username": "test",
                "password": "1234"
        })
        .then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log('**ERROR**:' + error.response.data);
        });
    };

    return(
      <input type="button" className="submitButton" value="로그인" onClick={handleClick}/>
    );
}

export default LoginButton;