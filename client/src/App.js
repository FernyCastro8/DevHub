import { Route, Routes, } from 'react-router-dom';

// Components
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
// helper for testing **
import Header2 from './component/Header2';


// Pages
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import AssociatesPage from './pages/AssociatesPage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
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
        <Route path='*' element={<NotFoundPage />} />s
      </Routes>

      <Header2 />

      <Footer />
    </div>
  );
}

export default App;
