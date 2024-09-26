import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Screens/Home';
import Somos from './Screens/Somos';
import Docs from './Screens/Docs';
import CRA from './Screens/CRA';
import CLIF from './Screens/CLIF';
import Pedagogia from './Screens/Pedagogia';
import Kumanagotos from './Screens/Kumanagotos';
import SimbolosPatrios from './Screens/SimbolosPatrios';
import Footer from './Components/Footer';

function App() {

  return (
    <>
     <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Somos" element={<Somos/>}/>
          <Route path="/Formatos" element={<Docs/>}/>
          <Route path="/CRA" element={<CRA/>}/>
          <Route path="/CLIF" element={<CLIF/>}/>
          <Route path="/Pedagogia" element={<Pedagogia/>}/>
          <Route path="/Kumanagotos" element={<Kumanagotos/>}/>
          <Route path="/SimbolosPatrios" element={<SimbolosPatrios/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
};

export default App;
