// src/components/Teacher/StudentList.jsx
import React, { useState, useEffect } from "react";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from the database and update the state
    // Replace the following with your actual API call or database query
    const fetchData = async () => {
      // Example API endpoint: '/api/students'
      const response = await fetch("/api/students");
      const data = await response.json();
      setStudents(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>Student List</h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} (ID: {student.id}) - {student.subject}:{" "}
            {student.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
