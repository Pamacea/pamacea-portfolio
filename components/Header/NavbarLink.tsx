import { cn } from "@/lib/utils";
import { TypeNavbarLink } from "@/types/TypeNavbarLink";
import Link from "next/link";

export function NavbarLink({
  href,
  children,
  className = "",
}: TypeNavbarLink) {
  return (
    <li
      className={cn(
        "relative mb-0.5 font-bold uppercase text-staticblack",
        className
      )}
    >
      <Link href={href} className="hover:text-staticblack-foreground">
        {children}
      </Link>
    </li>
  );
}