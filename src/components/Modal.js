import React, { useState } from "react";
import "./Modal.css";
import { FiDelete } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
const Modal = ({ show, onClose, files, setFiles }) => {
  const [newFiles, setNewFiles] = useState([
    { name: "document1.pdf" },
    { name: "image1.png" },
    { name: "presentation1.pptx" },
  ]);

  if (!show) return null;

  console.log("fille....:", files);
  // Handle file input change
  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setNewFiles([...newFiles, ...uploadedFiles]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    newFiles.forEach((file) => {
      formData.append("files", file); // Append each file to FormData
    });

    const taskId = "your-task-id-here"; // Replace with the actual task ID

    fetch(`http://localhost:5000/${taskId}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setFiles([...files, ...newFiles]); // Update the state with new files
        setNewFiles([]); // Clear new files
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    onClose(); // Close the modal after submission
  };

  // Handle file removal
  const handleRemoveFile = (index, isNewFile) => {
    if (isNewFile) {
      setNewFiles(newFiles.filter((_, i) => i !== index));
    } else {
      setFiles(files.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          <IoCloseCircle size={25} />
        </span>
        <h2>Uploaded Attachments</h2>
        <ul className="file-list">
          {newFiles.map((file, index) => (
            <li key={index} className="file-item">
              <p className="file-name">
                {index + 1}
                {". "}
                {file.name}
              </p>
              <button
                onClick={() => handleRemoveFile(index, true)}
                className="remove-button"
              >
                <FiDelete size={15} />
              </button>
            </li>
          ))}
        </ul>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="file-input"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;
