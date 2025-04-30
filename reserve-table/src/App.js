import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Navigation';
import Main from './Main';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <App />
    </div>
  );
}

export default App;
