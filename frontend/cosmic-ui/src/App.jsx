import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import About from './pages/About'; 
import NotFound from './pages/NotFound'; 

function App() {
  return (
    <>
      <div id='main'>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
