import Home from "./components/Home";
import About from "./components/About";
import "./index.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home pathname={location.pathname} />} />
          <Route path="about" element={<About />} />
        </Routes>
      </AnimatePresence>
      <Nav />
    </>
  );
}
