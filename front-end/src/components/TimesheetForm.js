import React, { useState, useEffect } from "react";

function TimesheetForm({ onSave }) {
  const [formData, setFormData] = useState({
    emailId: "",
    weekStarting: "",
    weekEnding: "",
    hours: {
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
      Sun: 0,
    },
  });

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Auto-populate week start and end on mount
  useEffect(() => {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Calculate Monday
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((day + 6) % 7)); // shift to Monday

    // Calculate Sunday
    const friday = new Date(monday);
    friday.setDate(monday.getDate() + 4);

    // Format MM/DD/YYYY
    const formatDate = (d) =>
      ("0" + (d.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + d.getDate()).slice(-2) +
      "/" +
      d.getFullYear();

    setFormData((prev) => ({
      ...prev,
      weekStarting: formatDate(monday),
      weekEnding: formatDate(friday),
    }));
  }, []);

  const handleHourChange = (day, value) => {
    const newHours = { ...formData.hours, [day]: Number(value) || 0 };
    setFormData({ ...formData, hours: newHours });
  };

  const totalHours = Object.values(formData.hours).reduce((a, b) => a + b, 0);

  const handleSave = () => {
    const payload = {
      emailId: formData.emailId,
      weekStarting: formData.weekStarting,
      weekEndign: formData.weekEnding,
      hours: formData.hours,
      total: totalHours,
    };

    onSave(payload);

    // Reset form except week dates
    setFormData((prev) => ({
      emailId: "",
      weekStarting: prev.weekStart,
      weekEnding: prev.weekEnd,
      hours: { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 },
    }));
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "20px" }}>
      <h2>New Timesheet</h2>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.emailId}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label>Week Start:</label>
        <input type="text" value={formData.weekStarting} readOnly />
      </div>

      <div>
        <label>Week End:</label>
        <input type="text" value={formData.weekEnding} readOnly />
      </div>

      <table border="1" style={{ marginTop: "10px", borderCollapse: "collapse" }}>
        <thead>
        <tr>
          {days.map((day) => (
            <th key={day}>{day}</th>
          ))}
          <th>Total</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          {days.map((day) => (
            <td key={day}>
              <input
                type="number"
                value={formData.hours[day]}
                onChange={(e) => handleHourChange(day, e.target.value)}
                style={{ width: "50px" }}
              />
            </td>
          ))}
          <td>{totalHours}</td>
        </tr>
        </tbody>
      </table>

      <button style={{ marginTop: "10px" }} onClick={handleSave}>
        Save Timesheet
      </button>
    </div>
  );
}

export default TimesheetForm;
