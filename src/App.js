import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Footer from "./components/Footer/Footer";
import Livro from "./views/Livro/Livro";
import Gruta from "./views/Gruta/Gruta";
import Testemunho from "./views/Testemunho/Testemunho";
import TestemunhoMain from "./views/TestemunhoMain/TestemunhoMain";
import TestemunhoGroup from "./views/TestemunhoGroup/TestemunhoGroup";
import Cura from "./views/Cura/Cura";

function App() {
  return (
      <Router>
          <Navbar/>
          <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/livro' element={<Livro/>} />
              <Route path='/gruta' element={<Gruta/>} />
              <Route path='/test' element={<TestemunhoMain/>} />
              <Route path='/cura' element={<Cura/>} />
              <Route path='/testemunho' element={<Testemunho/>} />
              <Route path='/testgr' element={<TestemunhoGroup/>} />
          </Routes>
          <Footer/>
      </Router>
  );
}

export default App;
