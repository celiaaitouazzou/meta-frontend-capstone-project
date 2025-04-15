import './App.css';
import Nav from './Nav.js'
import Main from './Main.js';
import Footer from './Footer.js';
//import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <div className="App w-full h-screen">
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
