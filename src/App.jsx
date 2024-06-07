import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import CreatePoll from "./components/CreatePoll";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/signup">Signup</Link>
        <Link to="/create-poll">Create Poll</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-poll" element={<CreatePoll />} />
      </Routes>
    </div>
  );
}

export default App;
