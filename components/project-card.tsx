"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

interface ProjectCardProps {
	title: string;
	description: string;
	stars?: number;
	link: string;
	imageSrc?: string;
	imageAlt?: string;
	className?: string;
}

export function ProjectCard({
	title,
	description,
	stars,
	link,
	imageSrc,
	imageAlt,
	className,
}: ProjectCardProps) {
	return (
		<Link
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				"group relative flex flex-col overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-background/95 to-muted/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-emerald-500",
				className,
			)}
		>
			{/* Title */}
			<div className="px-8 pt-8 pb-4">
				<h3 className="text-xl md:text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
					{title}
				</h3>
			</div>

			{/* Description */}
			<div className="px-8 pb-6">
				<p className="text-muted-foreground text-sm">{description}</p>
			</div>

			{/* Image */}
			{imageSrc ? (
				<div className="relative w-full h-[200px] overflow-hidden">
					<Image
						src={imageSrc}
						alt={imageAlt || title}
						fill
						sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
						className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
						priority={false}
					/>
				</div>
			) : (
				<div className="relative w-full h-[200px] flex items-center justify-center bg-muted/20">
					<span className="text-muted-foreground text-sm">In progress... 🚧</span>
				</div>
			)}

			{/* Footer */}
			<div className="relative flex items-center justify-between px-8 py-6 border-t border-border/50 bg-background/50 backdrop-blur-sm mt-auto">
				<div className="flex items-center gap-2">
					{stars !== undefined && (
						<>
							<Icons.sparkles className="w-6 h-6" />
							<span className="text-lg font-semibold font-mono">{stars.toLocaleString()}</span>
						</>
					)}
				</div>

				<div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-background/80 border border-border/50 transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
					<span className="text-base font-medium">Check it out</span>
					<ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
				</div>
			</div>

			{/* Gradient Overlay on Hover */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
		</Link>
	);
}
