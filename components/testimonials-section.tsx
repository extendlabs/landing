"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
	{
		id: 1,
		content:
			"Extend Labs transformed our vision into reality faster than we imagined. Their team's expertise in modern technologies and attention to detail is unmatched. The project was delivered on time and exceeded our expectations.",
		author: "Sarah Chen",
		role: "CTO, TechStart Inc.",
		avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
	},
	{
		id: 2,
		content:
			"Working with Extend Labs was a game-changer. They understood our complex requirements and built a scalable solution that's already handling 10x the traffic we expected. Professional, responsive, and results-driven.",
		author: "Michael Rodriguez",
		role: "Founder, DataFlow Solutions",
		avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
	},
	{
		id: 3,
		content:
			"The quality of code and architecture they delivered is exceptional. Our development team was impressed by how clean and maintainable everything was. Extend Labs doesn't just build features—they build foundations.",
		author: "Emily Watson",
		role: "Product Manager, CloudScale",
		avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
	},
];

export default function TestimonialsSection() {
	return (
		<section className="w-full py-32 lg:py-40 bg-muted/20">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<span className="uppercase text-sm font-medium text-muted-foreground tracking-wider">
						Testimonials
					</span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 mt-4 tracking-tight">
						What Our Clients Say
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						Don't just take our word for it. Here's what our clients have to say about working with us.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.id}
							className="relative rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="absolute top-6 right-6 text-primary/20">
								<Quote className="h-8 w-8" />
							</div>
							<p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
								"{testimonial.content}"
							</p>
							<div className="flex items-center gap-4">
								<Avatar className="size-12 border border-border">
									<AvatarImage src={testimonial.avatar} alt={testimonial.author} />
									<AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
								</Avatar>
								<div>
									<div className="font-semibold text-foreground">{testimonial.author}</div>
									<div className="text-sm text-muted-foreground">{testimonial.role}</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

