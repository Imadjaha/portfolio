import Image from "next/image";

import styles from "./page.module.css";
import Projects from "../app/components/Projects/Projects";
import Qualifications from "./components/Qualifications/Qualifications";
import SocialProfiles from "./components/SocialProfiles/SocialProfiles";
import Title from "./components/Title/Title";
import Profile from "./components/Profile/Profile";
import LightDarkMode from "../app/components/DarkMode/LightDarkMode";
import { DarkModeProvider } from "../app/components/DarkMode/DarkModeContext";


export default function Home() {
  return (
    <DarkModeProvider>
    
      <main>
        <LightDarkMode />{" "}
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
    </DarkModeProvider>
  );
}
