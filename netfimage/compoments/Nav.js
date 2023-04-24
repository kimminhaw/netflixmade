import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <img src="logo.svg" />
      <Link href="/" legacyBehavior>
        <a>MAIN /</a>
      </Link>
      <Link href="/sub" legacyBehavior>
        <a> SUB /</a>
      </Link>
      <a> 아무기능없음</a>
      <style>
        {`
        a{
            color:red
        }
        nav{
            text-align : center
        }
        `}
      </style>
    </nav>
  );
}
