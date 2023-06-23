import './App.css';
import Blogs from './Blogs';
import Contact from './Contact';
import NoPage from './NoPage';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    // <Home />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
