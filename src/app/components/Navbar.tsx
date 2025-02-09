import Link from "next/link";

export default function Navbar() {
  return (
    <div className={"navbar bg-base-100  "}>
      <div className="navbar-start"></div>
      <div className={"navbar-center "}>
        <Link href={"/"} className="btn btn-ghost text-2xl">
          Translatory
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
