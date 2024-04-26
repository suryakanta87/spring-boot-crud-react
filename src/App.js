import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "../src/components/UserList";
import CreateUser from "../src/components/CreateUser";
import ViewUser from "../src/components/ViewUser";
import UpdateUser from "../src/components/UpdateUser";
function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<UserList />}></Route>
            <Route path="/users" element={<UserList />}></Route>
            <Route path="/add-user/:id" element={<CreateUser />}></Route>
            <Route path="/view-user/:id" element={<ViewUser />}></Route>
            {/* <Route path = "/update-user/:id" element = {UpdateUser}></Route> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
