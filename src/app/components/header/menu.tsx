"use client";

import { useState } from "react";
import Button from "../button";
import Link from "next/link";

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Button onClick={toggleMenu}>{ !isOpen ? 'Menu' : 'X'}</Button>

      <nav className={`${isOpen ? "block" : "hidden"} z-10 absolute top-20 left-0 right-0 bottom-0 bg-background`}>
        <ul className="flex flex-col justify-around gap-5 items-center">
          <li>
            <Link href={"/create"} onClick={toggleMenu}>Create</Link>
          </li>
          <li>
            <Link href={"/"} onClick={toggleMenu}>Link 2</Link>
          </li>
          <li>
            <Link href={"/"} onClick={toggleMenu}>Link 3</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
