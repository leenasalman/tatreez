import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Acre from "./components/pages/Acre";
import Beersheba from "./components/pages/Beersheba";
import Beisan from "./components/pages/Beisan";
import Gaza from "./components/pages/Gaza";
import Haifa from "./components/pages/Haifa";
import Hebron from "./components/pages/Hebron";
import Jaffa from "./components/pages/Jaffa";
import Jenin from "./components/pages/Jenin";
import Jerusalem from "./components/pages/Jerusalem";
import Nablus from "./components/pages/Nablus";
import Nazareth from "./components/pages/Nazareth";
import Ramallah from "./components/pages/Ramallah";
import Ramla from "./components/pages/Ramla";
import Safad from "./components/pages/Safad";
import Tiberias from "./components/pages/Tiberias";
import Tulkarem from "./components/pages/Tulkarem";
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
          <Route path="/acre" element={<Acre />} />
          <Route path="/beersheba" element={<Beersheba />} />
          <Route path="/beisan" element={<Beisan />} />
          <Route path="/gaza" element={<Gaza />} />
          <Route path="/haifa" element={<Haifa />} />
          <Route path="/hebron" element={<Hebron />} />
          <Route path="/jaffa" element={<Jaffa />} />
          <Route path="/jenin" element={<Jenin />} />
          <Route path="/jerusalem" element={<Jerusalem />} />
          <Route path="/nablus" element={<Nablus />} />
          <Route path="/nazareth" element={<Nazareth />} />
          <Route path="/ramallah" element={<Ramallah />} />
          <Route path="/ramla" element={<Ramla />} />
          <Route path="/safad" element={<Safad />} />
          <Route path="/tiberias" element={<Tiberias />} />
          <Route path="/tulkarem" element={<Tulkarem />} />
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
