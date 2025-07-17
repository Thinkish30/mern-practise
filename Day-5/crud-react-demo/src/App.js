import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
