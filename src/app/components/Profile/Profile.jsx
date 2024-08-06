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
        <p className="text-start" >
          As a dedicated Computer Science student with expertise in database
          management, frontend development, and specification handling. My
          practical experience at ZWILLING J.A. Henckels LLC has significantly
          enhanced my skills in SQL, frontend setup, and data maintenance. I am
          proficient in MySQL, C, C++, Python, PostgreSQL, and object-oriented
          programming (OOP). My commitment to continual learning drives my
          passion for innovation. Proficient in JavaScript, React.js, and
          Next.js, I specialize in building interactive web applications with
          efficient user interfaces..
        </p>
      </div>
      <button onClick={toggle} className="btn1">
        {displayBio ? "Hide Bio" : "Show Bio"}
      </button>
    </div>
  );
}

export default Profile;
