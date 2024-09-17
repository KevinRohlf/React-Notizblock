import Link from "next/link";
import MenuBar from "./menu";

export default function Header() {
  return (
    <header className="flex justify-between p-5 z-20">
        <Link href={"/"}><h1 className="text-3xl">Header</h1></Link>
      
      <MenuBar />
    </header>
  );
}
