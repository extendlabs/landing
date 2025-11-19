"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		
		// Simulate form submission - replace with actual API call
		await new Promise((resolve) => setTimeout(resolve, 1500));
		
		setIsSubmitting(false);
		setIsSubmitted(true);
		
		// Reset form after 3 seconds
		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({ name: "", email: "", company: "", message: "" });
		}, 3000);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section className="w-full py-32 lg:py-40 max-w-7xl mx-auto px-6 lg:px-8" id="contact">
			<div className="mx-auto w-full max-w-4xl">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<span className="uppercase text-sm font-medium text-muted-foreground tracking-wider">
						Get Started
					</span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 mt-4 tracking-tight">
						Let's Build Something Amazing
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						Ready to accelerate your project? Get in touch and let's discuss how we can help bring your vision to life.
					</p>
				</motion.div>

				<motion.div
					className="rounded-2xl border border-border bg-card p-8 lg:p-12 shadow-xl"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{isSubmitted ? (
						<div className="text-center py-12">
							<CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
							<h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
							<p className="text-muted-foreground">
								We've received your message and will get back to you within 24 hours.
							</p>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label htmlFor="name" className="block text-sm font-medium mb-2">
										Name *
									</label>
									<input
										type="text"
										id="name"
										name="name"
										required
										value={formData.name}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
										placeholder="John Doe"
									/>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium mb-2">
										Email *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										value={formData.email}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
										placeholder="john@company.com"
									/>
								</div>
							</div>
							<div>
								<label htmlFor="company" className="block text-sm font-medium mb-2">
									Company
								</label>
								<input
									type="text"
									id="company"
									name="company"
									value={formData.company}
									onChange={handleChange}
									className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
									placeholder="Your Company"
								/>
							</div>
							<div>
								<label htmlFor="message" className="block text-sm font-medium mb-2">
									Project Details *
								</label>
								<textarea
									id="message"
									name="message"
									required
									rows={6}
									value={formData.message}
									onChange={handleChange}
									className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
									placeholder="Tell us about your project, timeline, and requirements..."
								/>
							</div>
							<Button
								type="submit"
								size="lg"
								variant="extend"
								className="w-full md:w-auto px-8 py-6 text-base font-medium"
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<>
										<Loader2 className="h-5 w-5 animate-spin" />
										Sending...
									</>
								) : (
									<>
										<Send className="h-5 w-5" />
										Send Message
									</>
								)}
							</Button>
						</form>
					)}
				</motion.div>

				<motion.div
					className="mt-12 text-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<p className="text-sm text-muted-foreground">
						Or reach out directly:{" "}
						<a href="mailto:hello@extendlabs.com" className="text-primary hover:underline">
							hello@extendlabs.com
						</a>
					</p>
				</motion.div>
			</div>
		</section>
	);
}

