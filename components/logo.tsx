import Image from "next/image";
import logo from "@/public/logo.png";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt="Extend Labs Logo"
      height="4000"
      width="3000"
      priority
      className={cn(
        "rounded-(--radius) ring-foreground/10 size-10 border border-transparent shadow ring-1",
        className
      )}
    />
  );
}
