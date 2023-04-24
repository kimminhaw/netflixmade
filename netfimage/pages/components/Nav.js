import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === "/" ? "active" : ""}>SUB </a>
      </Link>
      <Link href="/sub" legacyBehavior>
        <a className={router.pathname === "/sub" ? "active" : ""}>MAIN</a>
      </Link>
      <style jsx>
        {`
          a {
            color: red;
            margin: 50px;
          }
          nav {
            background-color: black;
            text-align: center;
            height: 50px;
          }
        `}
      </style>
    </nav>
  );
}
