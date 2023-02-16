import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className="Nav">
        <Image alt="logo" src={"/images/spiral.png"} width={50} height={50} />
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/About-us">About us</Link></li>
          </ul>
        </nav>
      </div>
      <p className="Title">Next.js Events App</p>
    </header>
  );
};
