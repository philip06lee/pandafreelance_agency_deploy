import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.container}>
      <Link href="/">PANDAFREELANCE</Link>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/construction">CONSTRUCTION</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/technology">TECHNOLOGY</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/others">OTHERS</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/construction">CONSTRUCTION</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/technology">TECHNOLOGY</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/others">OTHERS</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
