"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../button";

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Button onClick={toggleMenu}>{ !isOpen ? 'Menu' : 'X'}</Button>

      <nav className={`${isOpen ? "block" : "hidden"} z-10 absolute top-20 left-0 right-0 bottom-0`}>
        <ul className="flex flex-col justify-around gap-5 items-center">
          <li>
            <Link href={"/create"}>Create</Link>
          </li>
          <li>
            <Link href={"/"}>Link 2</Link>
          </li>
          <li>
            <Link href={"/"}>Link 3</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
