import Home from "./Components/Home";
import ImageGenerator from "./Components/Image Generator Engine";
import Codex from "./Components/Codex Engine";
import TextWriter from "./Components/Text Writer Engine";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/image-generator" element={<ImageGenerator/>}/>
        <Route path="/codex" element={<Codex/>}/>
        <Route path="/text-writer" element={<TextWriter/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
