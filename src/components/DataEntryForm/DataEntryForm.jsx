// src/components/DataEntryForm/DataEntryForm.js

import React, { useState } from "react";
import "./DataEntryForm.css";

const DataEntryForm = ({ handleAddStudent }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = () => {
    const newStudent = { name, id, marks: parseInt(marks) };
    handleAddStudent(newStudent);
  };

  return (
    <div className="data-entry-form">
      <h2>Data Entry Form</h2>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>ID:</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <label>Marks:</label>
      <input
        type="number"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DataEntryForm;
