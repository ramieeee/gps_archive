import Login from "./pages/Login";
import Board from "./pages/Board";
import './styles.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

// const Main = () => {
//   return (
//       <>
//           <Routes>
//               <Route path='/helloWorld' component={HelloWorld} />
//               <Route exact path='/helloReact' component={HelloReact} />
//           </Routes>
//       </>
//   )
// }

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/api/card/list" element={<Board/>} />
      </Routes>
    </Router>
  );
}

export default Main;