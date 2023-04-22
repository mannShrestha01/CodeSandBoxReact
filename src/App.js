import "./styles.css";
import Card from "./components/Card";
import Login from "./containers/Login";
import Register from "./containers/Register";

import { Route, Routes } from "react-router-dom";
//useState
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
