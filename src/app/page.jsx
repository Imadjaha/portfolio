import Image from "next/image";

import styles from "./page.module.css";
import Projects from "../app/components/Projects/Projects";
import Qualifications from "./components/Qualifications/Qualifications";
import SocialProfiles from "./components/SocialProfiles/SocialProfiles";
import Title from "./components/Title/Title";
import Profile from "./components/Profile/Profile";
const punycode = require('punycode/');


export default function Home() {
  return (
    <main >
    
      {" "}
      <div className="row">
      <Title />
      <div className="column">
        <Profile />
      </div>
      <div className="column">
        <Qualifications />
        <br />
      </div>
      <hr />
      </div>
      <Projects />
      <br />
      <hr />
      <SocialProfiles />
    </main>
  );
}
