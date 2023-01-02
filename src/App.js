import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/tatreez/embroidery/acre" element={<Acre />} />
          <Route path="/tatreez/embroidery/beersheba" element={<Beersheba />} />
          <Route path="/tatreez/embroidery/beisan" element={<Beisan />} />
          <Route path="/tatreez/embroidery/gaza" element={<Gaza />} />
          <Route path="/tatreez/embroidery/haifa" element={<Haifa />} />
          <Route path="/tatreez/embroidery/hebron" element={<Hebron />} />
          <Route path="/tatreez/embroidery/jaffa" element={<Jaffa />} />
          <Route path="/tatreez/embroidery/jenin" element={<Jenin />} />
          <Route path="/tatreez/embroidery/jerusalem" element={<Jerusalem />} />
          <Route path="/tatreez/embroidery/nablus" element={<Nablus />} />
          <Route path="/tatreez/embroidery/nazareth" element={<Nazareth />} />
          <Route path="/tatreez/embroidery/ramallah" element={<Ramallah />} />
          <Route path="/tatreez/embroidery/ramla" element={<Ramla />} />
          <Route path="/tatreez/embroidery/safad" element={<Safad />} />
          <Route path="/tatreez/embroidery/tiberias" element={<Tiberias />} />
          <Route path="/tatreez/embroidery/tulkarem" element={<Tulkarem />} />
          <Route path="/tatreez/palestinian-films" element={<PalestinianFilms />} />
          <Route path="/tatreez/support-palestine" element={<SupportPalestine />} />
        </Routes>
      </Router>
      <Loader />
      <Cursor />
    </>
  );
}

export default App;
