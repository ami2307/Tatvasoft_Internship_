// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';

function App() {

  const fun = ()=>{
    alert("Aapka Swagat Hai!!");
  }

  const name = "DARSHAK"
  return (
    <div className="App">
      <Home name={name} fun={fun}/>
    </div>
  );
}

export default App;