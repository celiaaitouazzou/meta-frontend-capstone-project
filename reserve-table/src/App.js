import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Navigation';
import Main from './Main';
import Footer from'./Footer.js'
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
