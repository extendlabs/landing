import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
	return (
		<Link
			href="/"
			className={cn("flex items-center justify-start gap-2 text-zinc-200 duration-200", className)}
		>
			<div className="flex items-center justify-center gap-2 py-2 font-bold">
				<Image
					src="/animated.svg"
					alt="logo"
					width={500}
					height={500}
					className={"h-5 w-auto max-w-[150px]"}
				/>
				<span className="sr-only">Animated</span>
			</div>
		</Link>
	);
}
