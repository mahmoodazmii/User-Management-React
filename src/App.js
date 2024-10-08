import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
