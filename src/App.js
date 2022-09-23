import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Routes,Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin/UserLogin";
import AdminLogin from "./Components/AdminLogin/AdminLogin";


function App() {
  return (
    <div className="App app-screen">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}/>
        <Route path="/userLogin" element={<UserLogin></UserLogin>}/>
        <Route path="/adminLogin" element={<AdminLogin></AdminLogin>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
