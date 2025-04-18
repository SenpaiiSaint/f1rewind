" use client ";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 mb-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-semibold">F1 Rewind</span>
        </Link>
        <div className="space-x-4">
            <Link href="/races">Races</Link>
            <Link href="/fantasy">Fantasy</Link>
            <Link href="/community">Community</Link>
        </div>
      </div>
    </nav>
  );
}
