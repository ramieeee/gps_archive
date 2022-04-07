function LoginButton() {
    const handleClick = () => {
        console.log('hello');
    }
    return(
        <input type="submit" value="로그인" className="submitButton" onClick={handleClick}/>
    )
}

export default LoginButton;