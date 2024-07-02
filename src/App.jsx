import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./features/form/Form";
import Navbar from "./features/navbar/Navbar";
import UserShowData from "./features/user-data-show/UserShowData";
import EditeUser from "./features/edite-user/EditeUser";
import UserData from "./withoutApiCurd/UserData";

function App() {
  return (
    <div>
     {/* <Navbar/>
     <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/show-all-user" element={<UserShowData/>} />
      <Route path="/edite/:id" element={<EditeUser/>} />
    </Routes> */}
    <UserData/>
    </div>
  );
}

export default App;
