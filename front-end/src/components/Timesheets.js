import React, { useEffect, useState } from "react";
import TimesheetForm from "./TimesheetForm";

function Timesheets() {
  const [ timesheets, setTimesheets ] = useState([]);

  // Get Monday of the current week
  const getMonday = () => {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Calculate Monday
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((day + 6) % 7));
    return monday;
  };

// Get Friday of the current week
  const getFriday = () => {
    const monday = getMonday();
    const friday = new Date(monday);
    friday.setDate(monday.getDate() + 4);
    return friday; // FIXED: return friday instead of monday
  };

// Format Date as MM/DD/YYYY
  const formatDate = (d) =>
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + d.getDate()).slice(-2) +
    "/" +
    d.getFullYear();

// Create URLSearchParams with formatted dates
  const params = new URLSearchParams({
    submitted: false,
    weekStarting: formatDate(getMonday()),
    weekEnding: formatDate(getFriday()),
  });

  const fetchTimesheets = async () => {
    try {
      const res = await fetch(`http://localhost:8080/timesheets?${params.toString()}`);
      const data = await res.json();
      setTimesheets([data]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTimesheets();
  }, []);

  const saveTimesheet = async (payload) => {
    try {
      const res = await fetch("http://localhost:8080/timesheets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) fetchTimesheets();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Timesheets</h1>

      {/* Existing timesheets */}
      <ul>
        {timesheets.map((t) => (
          <li key={t.id}>
            {t.email} ({t.weekStart} - {t.weekEnd}) - Total Hours: {t.total}
          </li>
        ))}
      </ul>

      {/* Timesheet Form */}
      <TimesheetForm onSave={saveTimesheet} />
    </div>
  );
}

export default Timesheets;
