"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Users, Rocket, Award } from "lucide-react";

const stats = [
	{
		icon: Code,
		value: "50+",
		label: "Projects Delivered",
		description: "Successfully completed projects across various industries",
	},
	{
		icon: Users,
		value: "30+",
		label: "Happy Clients",
		description: "Companies that trust us with their development needs",
	},
	{
		icon: Rocket,
		value: "99%",
		label: "On-Time Delivery",
		description: "Projects delivered on schedule without compromising quality",
	},
	{
		icon: Award,
		value: "4.9/5",
		label: "Client Satisfaction",
		description: "Average rating from our satisfied clients",
	},
];

export default function StatsSection() {
	return (
		<section className="w-full py-20 lg:py-24 bg-muted/10">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					{stats.map((stat, index) => {
						const Icon = stat.icon;
						return (
							<motion.div
								key={index}
								className="text-center"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-4 mb-4">
									<Icon className="h-6 w-6 text-primary" />
								</div>
								<div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
									{stat.value}
								</div>
								<div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
								<div className="text-sm text-muted-foreground">{stat.description}</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
