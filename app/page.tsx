import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/services"}>Services</Link>
      <Link href={"/faq"}>FAQ</Link>
      <Link href={"/about"}>About</Link>
    </div>
  );
}
