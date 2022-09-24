import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Routes,Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin/UserLogin";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import SelectRoute from "./Components/SelectRoute/SelectRoute";


function App() {
  return (
    <div className="App app-screen">
      <Header></Header>
      {/*<Routes>
        <Route path="/" element={<Homepage></Homepage>}/>
        <Route path="/userLogin" element={<UserLogin></UserLogin>}/>
        <Route path="/adminLogin" element={<AdminLogin></AdminLogin>}/>
  </Routes>*/}
      <SelectRoute></SelectRoute>
      <Footer></Footer>
    </div>
  );
}

export default App;
