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
			{/* Content Container */}
			<div className="relative flex flex-col items-center justify-center flex-1 px-8 py-12 text-center">
				{/* Title */}
				<h3 className="text-xl md:text-3xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
					{title}
				</h3>

				{/* Description */}
				<p className="text-muted-foreground text-sm  max-w-md mb-8">{description}</p>

				{/* Image */}
				{imageSrc ? (
					<div className="mb-8 transition-transform duration-300 group-hover:scale-110">
						<Image
							src={imageSrc}
							alt={imageAlt || title}
							width={200}
							height={200}
							className="object-contain"
						/>
					</div>
				) : (
					<span className="text-muted-foreground text-sm">In progress... 🚧</span>
				)}
			</div>

			{/* Footer */}
			<div className="relative flex items-center justify-between px-8 py-6 border-t border-border/50 bg-background/50 backdrop-blur-sm">
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
