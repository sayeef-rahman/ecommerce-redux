import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import Loading from "./components/Shared/Loading/Loading";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
