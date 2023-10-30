"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links: { href: string; text: string }[] = [
    { href: "/", text: "home" },
    { href: "/clients", text: "clients" },
    { href: "/contact", text: "contact" },
  ];

  return (
    <nav className="underline mb-4 ">
      {links.map((l, index) => (
        <Link key={index}
          href={l.href}
          className={clsx("mr-2 p-1", {
            "bg-gray-100 rounded": pathname === l.href,
          })}
        >
          {l.text}
        </Link>
      ))}
    </nav>
  );
}
