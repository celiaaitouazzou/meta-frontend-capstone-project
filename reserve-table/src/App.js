import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Navigation';
import Main from './Main';
import Footer from'./Footer.js'

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
