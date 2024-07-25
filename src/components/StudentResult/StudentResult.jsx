// src/components/StudentResult/StudentResult.jsx

import React from "react";
import "./StudentResult.css";

const StudentResult = ({ student }) => {
  // Check if student is null or undefined
  if (!student) {
    return <p>No student selected</p>;
  }

  // Access student properties safely
  const { name, id, marks } = student;

  return (
    <div className="result-container">
      <h2>{name}'s Results</h2>
      <p>ID: {id}</p>
      <p>Marks: {marks}</p>
      {/* Additional result details can be added here */}
    </div>
  );
};

export default StudentResult;
