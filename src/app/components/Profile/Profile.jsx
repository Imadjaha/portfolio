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
        <p className="text-start">
        As a Computer Science professional, I specialize in <strong className="highlight">database management</strong>, <strong className="highlight">frontend development</strong>, and <strong className="highlight">system integration</strong>. Proficient in <strong className="highlight">MySQL</strong>, <strong className="highlight">PostgreSQL</strong>, <strong className="highlight">Python</strong>, <strong className="highlight">Java</strong>, <strong className="highlight">Spring Boot</strong>, and <strong className="highlight">object-oriented programming</strong>, I excel in building interactive web applications using <strong className="highlight">JavaScript</strong>, <strong className="highlight">TypeScript</strong>, <strong className="highlight">React.js</strong>, and <strong className="highlight">Next.js</strong>. Additionally, I have expertise in <strong className="highlight">Docker</strong>, <strong className="highlight">CI/CD with GitLab</strong>, and integrating <strong className="highlight">machine learning models</strong> with <strong className="highlight">Dash</strong>. My commitment to <strong className="highlight">continuous learning</strong> drives my passion for creating scalable and efficient software solutions.
        </p>
      </div>
      <button onClick={toggle} className="btn1">
        {displayBio ? "Hide Bio" : "Show Bio"}
      </button>
    </div>
  );
}

export default Profile;
