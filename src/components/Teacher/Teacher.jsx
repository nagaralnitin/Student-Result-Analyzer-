// src/components/Teacher/TeacherDashboard.jsx
import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

const TeacherDashboard = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <button onClick={handleToggleForm}>
        {showForm ? "Hide Student Form" : "Add New Student"}
      </button>
      {showForm && <StudentForm />}
      <StudentList />
    </div>
  );
};

export default TeacherDashboard;
