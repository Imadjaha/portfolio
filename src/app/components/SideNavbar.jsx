'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import "./SideNavbar.css"
export default function SideNavbar() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const pathUrl = usePathname()

  return (
    <aside className={`aside ${open ? 'open' : ''}`}      onMouseLeave={handleClose}>
      <div 
        className='nav-toggler' 
        onMouseEnter={handleOpen} 
   
      >
        <span />
        <span />
        <span />
      </div>
      <div className='aside-inner'>
        <div className="logo">
          <Link href="/" onClick={handleClose}>Aimad Bouchouaf</Link>
        </div>
        <ul className="nav">
          <li onClick={handleClose}>
            <Link href="/">
              <i className="fas fa-home"></i>
              Home
            </Link>
          </li>
          
          <li onClick={handleClose}>
            <Link href="/courses">
              <i className="fas fa-courses"></i>
              Courses
            </Link>
          </li>
        
          <li onClick={handleClose}>
            <Link href="/contact">
              <i className="fas fa-contact"></i>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
