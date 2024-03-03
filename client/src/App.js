import { Route, Routes, Link } from 'react-router-dom'

// Components
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
// import Header from "./component/Header"
// import Login from './component/Login';
import Register from './component/Register';

// Pages
// import Login_page from "./pages/Login_page";
// import Register_page from "./pages/Register";
// import NotFound_page from './pages/notFound'


function App() {
  return (
    <div className="App">
      {/* 
      <Routes>
        <Route path='/home' element={<app />} />
        <Route path='/' element={<App />} />
        <Route path='/Associates' element={<App />} />
        <Route path='/contact' element={<contact />} />
      </Routes> */}


      <Navbar />

      <Register />

      <Footer />

    </div>
  );
}

export default App;
