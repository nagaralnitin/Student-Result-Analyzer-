// src/components/TeacherDashboard/TeacherDashboard.jsx

import React, { useState } from "react";
import DataEntryForm from "../DataEntryForm/DataEntryForm";
import Chart from "../Chart/Chart";

const TeacherDashboard = ({ studentsData, handleAddStudent }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div>
      <DataEntryForm handleAddStudent={handleAddStudent} />
      <div className="student-list">
        <h2>Student List</h2>
        <ul>
          {studentsData.map((student) => (
            <li key={student.id} onClick={() => handleSelectStudent(student)}>
              {student.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedStudent && (
        <>
          {/* <Chart data=Pass appropriate data for chart visualization /> */}
          {/* Add other functionalities as needed for teacher */}
        </>
      )}
    </div>
  );
};

export default TeacherDashboard;
