"use client";

import Link from "next/link";
import { navigationItems } from "./Navbar";

export default function Footer() {
  return (
    <footer className="my-12">
      <ul className="flex flex-wrap justify-center">
        {navigationItems.map((item, index) => (
          <div key={index} className="px-5 py-2">
            <Link href={item.href} className="text-muted-foreground">{item.name}</Link>
          </div>
        ))}
      </ul>
      <p className="text-center text-muted-foreground mt-2">&copy; 2024 Farrukh Shahzad. All Rights Reserved</p>
    </footer>
  );
}
