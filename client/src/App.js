import { Route, Routes, } from 'react-router-dom';

// Components
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";


// Pages
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import JobsPage from './pages/JobsPage';
import AssociatesPage from './pages/AssociatesPage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import About from './component/About';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import DeveloperForms from './component/forms/DeveloperForm';
import EmployerForm from './component/forms/EmployerForm';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/associates' element={< AssociatesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/developer-form' element={<DeveloperForms />} />
        <Route path='/employer-form' element={<EmployerForm />} />
        <Route path='*' element={<NotFoundPage />} />s
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
