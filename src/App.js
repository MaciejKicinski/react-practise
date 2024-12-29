import Home from "./components/Home/Home";
import About from "./components/About/About";
import Favorite from "./components/Favorite/Favorite";
import Container from "./components/Container/Container.js";
import NotFound from "./components/NotFound/NotFound";

import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
