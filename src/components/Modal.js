import React, { useState } from "react";
import "./Modal.css";
import { FiDelete } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
const Modal = ({ show, onClose, files, setFiles, id, refetch }) => {
  const [newFiles, setNewFiles] = useState([]);

  if (!show) return null;

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

    const taskId = id;

    fetch(`https://bt.musamolla.com/${taskId}`, {
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
    refetch();
    onClose();
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
            color: "#ff5c5c",
          }}
          onClick={onClose}
        >
          <IoCloseCircle size={25} />
        </span>
        <h2 style={{ textAlign: "center", color: "#333" }}>
          Uploaded Attachments
        </h2>
        <ul className="file-list">
          {newFiles.map((file, index) => (
            <li key={index} className="file-item">
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="file-preview"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
              <p
                className="file-name"
                style={{
                  marginTop: "10px",
                  color: "#555",
                  textAlign: "center",
                }}
              >
                {index + 1}
                {". "}
                {file.name}
              </p>
              <button
                onClick={() => handleRemoveFile(index, true)}
                className="remove-button"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#ff5c5c",
                }}
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
              width: "80%",
              maxWidth: "400px",
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="submit-button"
          style={{
            display: "block",
            margin: "20px auto",
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;
