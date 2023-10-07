import "./header.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container">
      <Link href={"/"}>GALLERY</Link>
      <Link href={"/admin"}>
        <div></div>
      </Link>
    </header>
  );
}
