import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./SideNavbar.css";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, Book, ContactMail } from "@mui/icons-material";

export default function SideNavbar() {
  const [open, setOpen] = useState(false);
  const pathUrl = usePathname();

  const menuItems = [
    { text: "Home", icon: <Home />, link: "/" },
    { text: "Courses", icon: <Book />, link: "/courses" },
    { text: "Contact", icon: <ContactMail />, link: "/contact" },
  ];

  return (
    <div className={`aside ${open ? "open" : ""}`} onMouseLeave={() => setOpen(false)}>
      <div className="nav-toggler" onMouseEnter={() => setOpen(true)}>
        <span />
        <span />
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/" onClick={() => setOpen(false)}>
            Aimad Bouchouaf
          </Link>
        </div>

        <List>
          {menuItems.map((item) => (
            <Link href={item.link} key={item.text} passHref legacyBehavior>
              <ListItem button component="a" onClick={() => setOpen(false)}>
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
