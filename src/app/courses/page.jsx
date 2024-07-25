'use client';
import { useState } from 'react';

import courses from './courses'; 
import './courses.css'; 

export default function Courses() {



const [searchQuery, setSearchQuery] = useState('');
const handleSearchChange = (event) => {
  setSearchQuery(event.target.value.toLowerCase());
}
// DESC SORT
const sortedCourses = [...courses].sort((a, b) => b.id - a.id);


const filteredCourses = sortedCourses.filter((course) =>
  course.title.toLowerCase().includes(searchQuery) ||
course.semester.toLowerCase().includes(searchQuery) ||
course.description.toLowerCase().includes(searchQuery)
);



  return (
    <div>

    <input
      type="text"
      placeholder="Search keywords..."
      value={searchQuery}
      onChange={handleSearchChange}
      className="searchInput"
    />

<div className='cardContainer1'>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="card1">
              <h2 className="cardTitle">{course.title}</h2>
              <span className='cardShortcut'>{course.semester}</span>
              <p className="cardDescription">{course.description}</p>
            </div>
          ))
        ) : (
          <p>No Result found</p>
        )}
    </div>

    </div>
  );
}
