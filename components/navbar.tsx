"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
	{
		title: "Features",
		href: "#features",
	},
	{
		title: "Projects",
		href: "#projects",
	},
	{
		title: "Team",
		href: "#team",
	}
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 lg:px-6">
			<motion.div
				className={`mx-auto flex h-16 items-center justify-between transition-all duration-500 ease-out ${
					isScrolled
						? "rounded-full bg-background/40 backdrop-blur-xl border border-slate-500/30 shadow-lg shadow-black/10 px-6 lg:px-8"
						: "px-6 lg:px-8"
				}`}
				initial={false}
				animate={{
					maxWidth: isScrolled ? "48rem" : "72rem", // max-w-4xl = 56rem, max-w-7xl = 80rem
				}}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				{/* Logo */}
				<Link href="/" className="flex items-center gap-3 z-10">
					<Logo className="size-8" />
					<span className="text-xl font-semibold tracking-tight">Extend Labs</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap"
						>
							{link.title}
						</Link>
					))}
				</div>

				{/* CTA Button */}
				<div className="hidden md:flex items-center gap-3 z-10">
					<Button asChild variant="extend" size="sm" className="rounded-full">
						<Link href="#contact">Contact</Link>
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden p-2 text-foreground z-10"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
				</button>
			</motion.div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
						className="md:hidden mx-auto mt-4 max-w-7xl rounded-2xl bg-background/40 backdrop-blur-xl border border-border/20 shadow-lg overflow-hidden"
					>
						<div className="flex flex-col gap-4 p-6">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{link.title}
								</Link>
							))}
							<div className="flex flex-col gap-3 pt-4 border-t border-border">
								<Button asChild variant="extend" size="sm" className="rounded-full w-full">
									<Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
										Contact
									</Link>
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}

