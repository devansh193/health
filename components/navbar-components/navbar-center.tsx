"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/button";

const navCenterItem = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Service",
    href: "/service",
  },
];

export const NavCenter = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex items-center justify-between gap-x-4">
      {navCenterItem.map((item) => (
        <div key={item.title}>
          <Link href={item.href}>
            <Button
              variant={pathname === item.href ? "secondary" : "ghost"}
              size={"sm"}
              className="rounded-full"
            >
              {item.title}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};
