import { Route, Routes, } from 'react-router-dom';

// Components
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
// helper for testing **



// Pages
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import AssociatesPage from './pages/AssociatesPage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import About from './component/About';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/associates' element={< AssociatesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFoundPage />} />s
      </Routes>

      {/* Helpers */}

      <Footer />
    </div>
  );
}

export default App;
