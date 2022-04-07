import LoginButton from "./LoginButton";
import LoginField from "./LoginField";
import PasswordField from "./PasswordField";
import WelcomeText from "./WelcomeText";
import './styles.css';

function App() {
  const handleClick = () => {
  };

  return (
      <div>
        <WelcomeText/>
        <form className='loginForm'>
          <LoginField/>
          <PasswordField/>
          <LoginButton onClick={handleClick}/>
        </form>
      </div>
  );
}

export default App;