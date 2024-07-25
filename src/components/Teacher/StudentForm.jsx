// src/components/Teacher/StudentForm.jsx
import React, { useState } from "react";

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    id: "",
    subject: "",
    score: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save student data to the database
    console.log("Student data submitted:", studentData);
    // Reset form
    setStudentData({
      name: "",
      id: "",
      subject: "",
      score: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Student</h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={studentData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        ID:
        <input
          type="text"
          name="id"
          value={studentData.id}
          onChange={handleChange}
        />
      </label>
      <label>
        Subject:
        <input
          type="text"
          name="subject"
          value={studentData.subject}
          onChange={handleChange}
        />
      </label>
      <label>
        Score:
        <input
          type="text"
          name="score"
          value={studentData.score}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
