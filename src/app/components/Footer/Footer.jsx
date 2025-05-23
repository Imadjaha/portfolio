'use client';
import { Fragment, useState, useEffect } from "react";
export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());
    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
      }, []);
  return (
  <Fragment>
    <div className="footer">
 
      <p>Designed and developed by Aimad Bouchouaf</p>
      <p>{`© ${year}. All Rights Reserved.`}</p>
    </div>
  </Fragment>
);
}
