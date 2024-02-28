// import { Route, Routes } from 'react-router-dom'

import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Header from "./component/Header";



function App() {
  return (
    <div className="App">

      {/* <Routes>
        <Route path='/' element={<App />} />
      </Routes> */}


      <Navbar />

      <Header />

      <Footer />

    </div>
  );
}

export default App;
