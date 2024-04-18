import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meals</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
      <p>
        <Link href="/meals/type1">meals type1</Link>
      </p>
    </main>
  );
}
