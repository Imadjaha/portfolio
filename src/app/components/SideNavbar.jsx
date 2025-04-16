"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./SideNavbar.css";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
  AppBar,
  Typography,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, Home, Book, ContactMail } from "@mui/icons-material";

export default function SideNavbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const pathUrl = usePathname();

  const menuItems = [
    { text: "Home", icon: <Home />, link: "/" },
    { text: "Courses", icon: <Book />, link: "/courses" },
    { text: "Contact", icon: <ContactMail />, link: "/contact" },
  ];

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
          {menuItems.map((item) => (
            <Link href={item.link} key={item.text} passHref>
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </div>
  );
}
