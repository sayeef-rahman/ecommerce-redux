import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Shared/Footer/Footer";
import Loading from "./components/Shared/Loading/Loading";
import Navbar from "./components/Shared/Navbar/Navbar";
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
