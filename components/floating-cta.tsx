"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
	const [isVisible, setIsVisible] = useState(false);
	const [isDismissed, setIsDismissed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Show after scrolling 300px
			if (window.scrollY > 300 && !isDismissed) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isDismissed]);

	const handleDismiss = () => {
		setIsDismissed(true);
		setIsVisible(false);
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 100 }}
					transition={{ duration: 0.3 }}
					className="fixed bottom-6 right-6 z-50"
				>
					<div className="relative bg-card border border-border rounded-2xl shadow-2xl p-4 max-w-sm">
						<button
							onClick={handleDismiss}
							className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
							aria-label="Close"
						>
							<X className="h-4 w-4" />
						</button>
						<div className="pr-6">
							<div className="flex items-center gap-3 mb-3">
								<div className="rounded-lg bg-primary/10 p-2">
									<MessageCircle className="h-5 w-5 text-primary" />
								</div>
								<div>
									<h4 className="font-semibold text-sm">Need Help?</h4>
									<p className="text-xs text-muted-foreground">Let's discuss your project</p>
								</div>
							</div>
							<Button asChild size="sm" variant="extend" className="w-full rounded-full">
								<Link href="#contact">Get Started</Link>
							</Button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

