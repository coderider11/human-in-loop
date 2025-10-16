import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Timesheets from "./components/Timesheets";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/timesheets" style={{ marginRight: "10px" }}>Timesheets</Link>
        </nav>

        <Routes>
          <Route path="/timesheets" element={<Timesheets />} />
          <Route path="/" element={<Timesheets />} /> {/* default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
