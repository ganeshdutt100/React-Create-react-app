import logo from './logo.svg';
import './Deepika.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Sec1 } from './components/Sec1';
import { Sec2 } from './components/Sec2';
import { Sec3 } from './components/Sec3';
// import { Nav } from './components/Nav';
// import { Section1 } from './components/Section1';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Sec1></Sec1>
    <Sec2></Sec2>
    <Sec3></Sec3>
    </div>
  );
}

export default App;
