import React from "react";
import "./Card.css";
// Import Font Awesome or use any other icon library
import { FaComments, FaPaperclip, FaCalendarAlt } from "react-icons/fa";
import { HiClipboardList } from "react-icons/hi";
import { RiStackFill } from "react-icons/ri";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="user-info">
          <img
            src="https://media.licdn.com/dms/image/v2/C560BAQFDsTXu-YsCpg/company-logo_200_200/company-logo_200_200/0/1631380362357?e=1738800000&v=beta&t=AVfjyNyO7dp-8eIhXr6jjAdGOOUwPZ4wzQY85IMctss"
            alt="Client"
            className="user-photo"
          />
          <span className="user-name">SEOPage1</span>
        </div>
        <div className="user-info">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHfdqb6cTbWRQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724248771093?e=1736380800&v=beta&t=5mTNcobi-VMlh1bNe0doNv1iPx3yhpY6xEy9M8wJMeA"
            alt="Client"
            className="user-photo"
          />
          <span className="user-name">Client Name</span>
        </div>
      </div>
      <div className="assigned-info">
        <div style={{ display: "flex", alignItems: "center" }}>
          <RiStackFill className="icon" />
          <p>Lorem ipsum dolor sit amet curn...</p>
        </div>
        <span className="task-count">
          <HiClipboardList className="icon" />
          <span>1/2</span>
        </span>
      </div>

      <div className="card-footer">
        <div className="user-group">
          <img
            src="https://media.licdn.com/dms/image/v2/C5103AQF6zjAPjyG7Ig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1537346125803?e=1736380800&v=beta&t=KpsFNmtdhZOpryksA-vq_VA4jcL__Bchzgsi_VM_mrg"
            alt="User 1"
            className="user-photo-small"
          />
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHfdqb6cTbWRQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724248771093?e=1736380800&v=beta&t=5mTNcobi-VMlh1bNe0doNv1iPx3yhpY6xEy9M8wJMeA"
            alt="User 2"
            className="user-photo-small"
          />
          <span className="more-users">12+</span>
        </div>

        <div className="icon-group">
          <FaComments className="icon" /> 15
          <FaPaperclip className="icon" /> 25
          <FaCalendarAlt className="icon" /> 30-12-2022
        </div>
      </div>
    </div>
  );
};

export default Card;
