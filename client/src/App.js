// import { Route, Routes } from 'react-router-dom'

import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
// import Header from "./component/Header"
// import Login from "./pages/Login";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
      {/* 
      <Routes>
        <Route path='/' element={<App />} />
      </Routes> */}


      <Navbar />

      <Login />

      <Footer />

    </div>
  );
}

export default App;
