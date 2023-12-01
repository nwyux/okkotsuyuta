import './App.css';
import './scss/style.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  
  return (
    <div className="App h-full w-full">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
