import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import  Home  from './pages/Home';
import Footer from './components/Footer';
import User from './pages/User';
import About from './pages/About';

function App() {
  return (
    <div className="mx">
      <Navbar />
      <div className="app">
        <BrowserRouter>
          <ToastContainer
          />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user/:id' element={<User />} />
            <Route path='/about' element={<About />} />
            
            
          </Routes>

        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
