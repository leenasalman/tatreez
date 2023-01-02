import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Acre from "./components/pages/embroidery/Acre";
import Beersheba from "./components/pages/embroidery/Beersheba";
import Beisan from "./components/pages/embroidery/Beisan";
import Gaza from "./components/pages/embroidery/Gaza";
import Haifa from "./components/pages/embroidery/Haifa";
import Hebron from "./components/pages/embroidery/Hebron";
import Jaffa from "./components/pages/embroidery/Jaffa";
import Jenin from "./components/pages/embroidery/Jenin";
import Jerusalem from "./components/pages/embroidery/Jerusalem";
import Nablus from "./components/pages/embroidery/Nablus";
import Nazareth from "./components/pages/embroidery/Nazareth";
import Ramallah from "./components/pages/embroidery/Ramallah";
import Ramla from "./components/pages/embroidery/Ramla";
import Safad from "./components/pages/embroidery/Safad";
import Tiberias from "./components/pages/embroidery/Tiberias";
import Tulkarem from "./components/pages/embroidery/Tulkarem";
import PalestinianFilms from "./components/pages/PalestinianFilms";
import SupportPalestine from "./components/pages/SupportPalestine";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/tatreez" element={<Home />} />
          <Route path="/embroidery/acre" element={<Acre />} />
          <Route path="/embroidery/beersheba" element={<Beersheba />} />
          <Route path="/embroidery/beisan" element={<Beisan />} />
          <Route path="/embroidery/gaza" element={<Gaza />} />
          <Route path="/embroidery/haifa" element={<Haifa />} />
          <Route path="/embroidery/hebron" element={<Hebron />} />
          <Route path="/embroidery/jaffa" element={<Jaffa />} />
          <Route path="/embroidery/jenin" element={<Jenin />} />
          <Route path="/embroidery/jerusalem" element={<Jerusalem />} />
          <Route path="/embroidery/nablus" element={<Nablus />} />
          <Route path="/embroidery/nazareth" element={<Nazareth />} />
          <Route path="/embroidery/ramallah" element={<Ramallah />} />
          <Route path="/embroidery/ramla" element={<Ramla />} />
          <Route path="/embroidery/safad" element={<Safad />} />
          <Route path="/embroidery/tiberias" element={<Tiberias />} />
          <Route path="/embroidery/tulkarem" element={<Tulkarem />} />
          <Route path="/palestinian-films" element={<PalestinianFilms />} />
          <Route path="/support-palestine" element={<SupportPalestine />} />
        </Routes>
      </Router>
      <Loader />
      <Cursor />
    </>
  );
}

export default App;
