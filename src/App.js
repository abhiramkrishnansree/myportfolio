
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Footer from './Components/Footer';
import Projects from './Pages/Projects';
import Example from './Pages/Example';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Projects" element={<Projects/>}></Route>
    </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
