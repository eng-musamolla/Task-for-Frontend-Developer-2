import React, { useState } from "react";
import "./Card.css";
// Import Font Awesome or use any other icon library
import { FaComments, FaPaperclip, FaCalendarAlt } from "react-icons/fa";
import { HiClipboardList } from "react-icons/hi";
import { RiStackFill } from "react-icons/ri";
import Modal from "./Modal";

const Card = ({ refetch, task }) => {
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [id, setId] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        onClose={closeModal}
        files={files}
        id={id}
        refetch={refetch}
      />
      <div className="card">
        <div className="card-header">
          <div className="user-info">
            <img src={task.client.photo} alt="Client" className="user-photo" />
            <span className="user-name">{task.client.Name}</span>
          </div>
          <div className="user-info">
            <img
              src={task.assignee.assigneePhoto}
              alt="assignee"
              className="user-photo"
            />
            <span className="user-name">{task.assignee.assigneeName}</span>
          </div>
        </div>
        <div className="assigned-info">
          <div style={{ display: "flex", alignItems: "center" }}>
            <RiStackFill className="icon" />
            <p>{task.description}</p>
          </div>
          <span className="task-count">
            <HiClipboardList className="icon" />
            <span>
              {task.task.Completed}/{task.task.total}
            </span>
          </span>
        </div>

        <div className="card-footer">
          <div className="user-group">
            {task.likes.user.slice(0, 3).map((photo, i) => (
              <img src={photo} alt={`User ${i}`} className="user-photo-small" />
            ))}
            <span className="more-users">{task.likes.total}+</span>
          </div>

          <div className="icon-group">
            <span>
              <FaComments className="icon" /> {task.comments.total}
            </span>
            <span>
              <FaPaperclip
                className="icon"
                onClick={() => {
                  openModal();
                  setFiles(task.attachments);
                  setId(task._id);
                }}
                style={{ cursor: "pointer" }}
              />{" "}
              {task.attachments.length}
            </span>
            <span>
              <FaCalendarAlt className="icon" /> {task.dueDate.split("T")[0]}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
