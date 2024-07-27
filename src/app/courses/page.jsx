"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import courses from "./courses";
import "./courses.css";
import scrollTopButton from "./assets/up-arrow.png";

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCards, setExpandedCards] = useState([]);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };
  // DESC SORT
  const sortedCourses = [...courses].sort((a, b) => b.id - a.id);

  const filteredCourses = sortedCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery) ||
      course.semester.toLowerCase().includes(searchQuery) ||
      course.description.toLowerCase().includes(searchQuery)
  );

  const handleReadMore = (id) => {
    setExpandedCards((prevExpandedCards) =>
      prevExpandedCards.includes(id)
        ? prevExpandedCards.filter((cardId) => cardId !== id)
        : [...prevExpandedCards, id]
    );
  };

  // Scroll to the card if it is being expanded
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200); // Show button after scrolling down 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search keywords..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="searchInput"
      />

      <div className="cardContainer1">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`card1 ${
                expandedCards.includes(course.id) ? "expanded" : "truncated"
              }`}
            >
              <h2 className="cardTitle">{course.title}</h2>
              <span className="cardShortcut">{course.semester}</span>
              <p className="cardDescription">
                {expandedCards.includes(course.id)
                  ? course.description
                  : course.title.length > 41
                  ? `${course.description.substring(0, 120)}....`
                  : `${course.description.substring(0, 200)}....`}
                <span
                  className="readMore"
                  onClick={() => handleReadMore(course.id)}
                >
                  {expandedCards.includes(course.id)
                    ? "Read less"
                    : "Read more"}
                </span>
              </p>
            </div>
          ))
        ) : (
          <p>No Result found</p>
        )}
      </div>
      {showScrollButton && (
        <button onClick={scrollToTop} className="scrollToTopButton">
          <Image
            src={scrollTopButton}
            alt="Scroll to top button"
            width={50}
            height={50}
          />
        </button>
      )}
    </div>
  );
}
