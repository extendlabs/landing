"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Code2, Rocket, CheckCircle2 } from "lucide-react";

const processSteps = [
	{
		icon: Search,
		title: "Discovery",
		description:
			"We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
	},
	{
		icon: Code2,
		title: "Development",
		description:
			"Our team builds your solution using modern technologies and best practices, with regular updates and transparent communication throughout.",
	},
	{
		icon: CheckCircle2,
		title: "Testing & QA",
		description:
			"Rigorous testing ensures your product is bug-free, performant, and ready for production deployment.",
	},
	{
		icon: Rocket,
		title: "Launch & Support",
		description:
			"We handle deployment and provide ongoing support to ensure your product continues to perform optimally as you scale.",
	},
];

export default function ProcessSection() {
	return (
		<section className="w-full py-32 lg:py-40 max-w-7xl mx-auto px-6 lg:px-8" id="process">
			<motion.div
				className="text-center mb-16"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				<span className="uppercase text-sm font-medium text-muted-foreground tracking-wider">
					Our Process
				</span>
				<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 mt-4 tracking-tight">
					How We Work
				</h2>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
					A proven methodology that ensures your project is delivered on time, on budget, and exceeds expectations.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{processSteps.map((step, index) => {
					const Icon = step.icon;
					return (
						<motion.div
							key={index}
							className="relative"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="relative rounded-2xl border border-border bg-card p-8 h-full hover:border-primary/30 transition-all duration-300">
								<div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
									<Icon className="h-7 w-7" />
								</div>
								<div className="absolute top-8 right-8 text-6xl font-bold text-muted-foreground/10">
									{String(index + 1).padStart(2, "0")}
								</div>
								<h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
								<p className="text-muted-foreground leading-relaxed">{step.description}</p>
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}

