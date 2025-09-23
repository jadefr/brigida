import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Footer from "./components/Footer/Footer";
import Livro from "./views/Livro/Livro";
import Gruta from "./views/Gruta/Gruta";
import TestemunhoMain from "./views/TestemunhoMain/TestemunhoMain";
import TestemunhoGroup from "./views/TestemunhoGroup/TestemunhoGroup";
import DonaMalvina from "./views/TestemunhoIndividual/DonaMalvina";
import SeuLele from "./views/TestemunhoIndividual/SeuLele";
import Cura from "./views/Cura/Cura";
import CookiesModal from "./components/CookiesModal/CookiesModal";
import CookiesPolicy from "./views/CookiesPolicy/CookiesPolicy";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
      <Router>
          <ScrollToTop/>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/livro' element={<Livro/>} />
              <Route path='/gruta' element={<Gruta/>} />
              <Route path='/test' element={<TestemunhoMain/>} />
              <Route path='/cura' element={<Cura/>} />
              <Route path='/testemunho/dona-malvina' element={<DonaMalvina/>} />
              <Route path='/testemunho/sr-lele' element={<SeuLele/>} />
              <Route path='/cookies-policy' element={<CookiesPolicy/>} />
              <Route path='/testemunhos' element={<TestemunhoGroup/>} />
          </Routes>
          <Footer/>
          <CookiesModal/>
      </Router>
  );
}

export default App;
