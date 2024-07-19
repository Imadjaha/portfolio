'use client'
import './Title.css'
import { useEffect, useState } from "react";

const TITLES = [
  "a computer science student",
  "an athletic fitness enthusiast",
  "a passionate programmer",
  "a creative coder",
  "a curious learner",
]

function Title() {

  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const animateTitles = () => {
      // Set an interval to update the title index every 4 seconds
    const titleInterval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % TITLES.length);
      setFadeIn(true);

      // Set a timeout to set fadeIn to false after 2 seconds
      const timeout = setTimeout(() => {
        setFadeIn(false);
      }, 2000);

       // Cleanup function to clear the timeout when the component unmounts
      return () => clearTimeout(timeout);
    }, 4000);
 // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(titleInterval);
  };

  animateTitles();

  const initialTimeout = setTimeout(() => {
    setFadeIn(false);
  }, 2000);

  return () => {clearTimeout(initialTimeout);
};
},[]); // Empty dependency array means this effect runs once on mount

 // Effect hook to handle the fade-out effect after the title index changes
useEffect(() => {
  const timeout = setTimeout(() => {
    setFadeIn(false);
  }, 2000);

  return () => clearTimeout(timeout); 
}, [titleIndex]);
 



  return (
    <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>I am {TITLES[titleIndex]}</p>
  )
}

export default Title
