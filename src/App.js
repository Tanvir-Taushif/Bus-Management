import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Routes,Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin/UserLogin";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import AdminDashBoard from "./Components/AdminDashboard/AdminDashBoard";
import Register from "./Components/Register/Register";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import DriverList from "./Components/DriverList/DriverList";
import DriverRagistration from "./Components/DriverRagistration/DriverRagistration";


function App() {
  return (
    <div className="App app-screen">
      <Header></Header>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}/>
          <Route path="/homepage" element={<Homepage></Homepage>}/>
          <Route path="/userLogin" element={<UserLogin></UserLogin>}/>
          <Route path="/adminLogin" element={<AdminLogin></AdminLogin>}/>
          <Route path="/register" element={<Register></Register>}/>
          <Route path='/userDashboard'element={<UserDashboard></UserDashboard>}/>
          <Route path='/adminDashboard'element={<AdminDashBoard></AdminDashBoard>}/>
          <Route path='/driverList'element={<DriverList></DriverList>}/>
          <Route path='/driverRagistration'element={<DriverRagistration></DriverRagistration>}/>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
