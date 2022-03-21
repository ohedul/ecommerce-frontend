import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Registration from './components/Registration/Registration';
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<LandingPage/>} />
              <Route path="/register" element={<Registration/>} /> 
          </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;
