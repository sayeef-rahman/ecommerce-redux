import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import Loading from "./components/Shared/Loading/Loading";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
