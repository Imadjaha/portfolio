"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./SideNavbar.css";

import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Toolbar, AppBar, Typography, Box } from '@mui/material';
import { Menu as MenuIcon, Home, Book, ContactMail } from '@mui/icons-material';

export default function SideNavbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const pathUrl = usePathname();

  return (
    <div className={`aside ${open ? "open" : ""}`} onMouseLeave={handleClose}>
      <div className="nav-toggler" onMouseEnter={handleOpen}>
        <span />
        <span />
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/" onClick={handleClose}>
            Aimad Bouchouaf
          </Link>
        </div>
        <List>
        {[
          { text: 'Home', icon: <Home />, link: '/' },
          { text: 'Courses', icon: <Book />, link: '/courses' },
          { text: 'Contact', icon: <ContactMail />, link: '/contact' },
        ].map((item) => (
          <ListItem button key={item.text} component="a" href={item.link}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

        
      </div>
    </div>
  );
}
