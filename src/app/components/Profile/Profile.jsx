"use client";
import "./Profile.css";
import Image from "next/image";
import { useState } from "react";
import profilePicture from "../../Assets/profilePic.jpeg";

function Profile() {
  const [displayBio, setDisplayBio] = useState(false);

  const toggle = () => {
    setDisplayBio((prevDisplayBio) => !prevDisplayBio);
  };

  return (
    <div>
      <Image src={profilePicture} className="profile" alt="profile picture" />

      <h1>Hello There</h1>
      <p>My Name is Aimad Bouchouaf</p>
      <p>Computer science student</p>
      <div className={`text-container ${displayBio ? "show" : ""}`}>
        <p style={{ textAlign: "center" }}>
          As a versatile computer science student, I excel in database
          management, frontend development, and specification handling.
          Proficient in MySQL, C, C++, Python, PostgreSQL, and OOP. Practical
          experience at ZWILLING J.A. Henckels LLC enhanced my skills in SQL,
          frontend setup, and data maintenance. Strong in HTML, CSS, JavaScript
          and React. Committed to continual learning, I offer expertise and
          adaptability to drive innovation
        </p>
      </div>
      <button onClick={toggle} className="btn1">
        {displayBio ? "Hide Bio" : "Show Bio"}
      </button>
    </div>
  );
}

export default Profile;
