"use client";
import React, { useState } from "react";
import {
	MessageSquare,
	Palette,
	Warehouse,
	Code,
	Smartphone,
	BarChart3,
	ShoppingCart,
	Cloud,
	ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ApplicationType {
	id: number;
	title: string;
	description: string;
	useCases: string[];
	icon: React.ComponentType<{ className?: string }>;
}

const applicationTypes: ApplicationType[] = [
	{
		id: 1,
		title: "AI Chats",
		description:
			"Build intelligent conversational interfaces powered by modern AI that understand context, learn from interactions, and provide seamless user experiences across multiple channels.",
		useCases: [
			"Customer support chatbots",
			"AI-powered documentation assistants",
			"Virtual sales representatives",
			"Personalized learning tutors",
		],
		icon: MessageSquare,
	},
	{
		id: 2,
		title: "UI Libraries",
		description:
			"Create beautiful, accessible, and performant component libraries and design systems that accelerate development and ensure design consistency across teams and projects.",
		useCases: [
			"React component libraries",
			"Design system implementations",
			"Custom UI frameworks",
			"Themeable component suites",
		],
		icon: Palette,
	},
	{
		id: 3,
		title: "Warehouse",
		description:
			"Design and implement scalable data warehousing solutions that transform raw data into actionable business insights with real-time processing and advanced analytics capabilities.",
		useCases: [
			"Enterprise data warehouses",
			"ETL pipeline systems",
			"Business intelligence platforms",
			"Data lake architectures",
		],
		icon: Warehouse,
	},
	{
		id: 4,
		title: "API Development",
		description:
			"Build robust, scalable APIs and microservices that power modern applications with RESTful endpoints, GraphQL schemas, and comprehensive documentation.",
		useCases: [
			"RESTful API backends",
			"GraphQL services",
			"Microservices architecture",
			"Third-party integrations",
		],
		icon: Code,
	},
	{
		id: 5,
		title: "Mobile Applications",
		description:
			"Develop native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences with modern frameworks and best practices.",
		useCases: [
			"Native iOS apps",
			"Android applications",
			"React Native solutions",
			"Flutter cross-platform apps",
		],
		icon: Smartphone,
	},
	{
		id: 6,
		title: "Data Analytics",
		description:
			"Create real-time dashboards, reporting tools, and business intelligence platforms that transform complex data into clear, actionable insights for decision-makers.",
		useCases: [
			"Real-time analytics dashboards",
			"Business intelligence tools",
			"Custom reporting systems",
			"Data visualization platforms",
		],
		icon: BarChart3,
	},
	{
		id: 7,
		title: "E-commerce Platforms",
		description:
			"Build comprehensive e-commerce solutions and marketplace platforms with secure payment processing, inventory management, and seamless shopping experiences.",
		useCases: [
			"Online storefronts",
			"Marketplace platforms",
			"Subscription commerce",
			"Multi-vendor systems",
		],
		icon: ShoppingCart,
	},
	{
		id: 8,
		title: "SaaS Applications",
		description:
			"Develop scalable Software-as-a-Service products with subscription management, multi-tenancy, and enterprise-grade features that grow with your business.",
		useCases: [
			"B2B SaaS platforms",
			"Subscription management systems",
			"Multi-tenant applications",
			"Enterprise software solutions",
		],
		icon: Cloud,
	},
];

export default function ProjectsSection() {
	const [selectedId, setSelectedId] = useState<number>(1);
	const selectedType = applicationTypes.find((type) => type.id === selectedId) || applicationTypes[0];
	const Icon = selectedType.icon;



	return (
		<section className="w-full py-32 lg:py-40 max-w-7xl mx-auto px-6 lg:px-8" id="projects">
			<div className="text-center mb-12">
				<span className="uppercase text-sm font-medium text-muted-foreground tracking-wider">
					What We Build
				</span>
				<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 mt-4 tracking-tight">
					Our Expertise
				</h2>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
					We specialize in building cutting-edge applications across various domains, from AI-powered
					solutions to scalable enterprise platforms.
				</p>
			</div>

			<motion.div
				className="mb-8 flex justify-center"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				<Button asChild variant="outline" size="lg" className="rounded-full">
					<Link href="#contact">Need a Custom Solution? Let&apos;s Talk</Link>
				</Button>
			</motion.div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
				{/* Left Column - Application Types List */}
				<div className="flex flex-col">

					<div className="flex-1 rounded-xl border border-border bg-card overflow-hidden">
						<div className="divide-y divide-border">
							{applicationTypes.map((type) => {
								const TypeIcon = type.icon;
								const isSelected = type.id === selectedId;
								return (
									<button
										key={type.id}
										onClick={() => setSelectedId(type.id)}
										className={cn(
											"w-full px-6 py-4 text-left transition-all duration-200",
											"flex items-center gap-4 group relative",
											"hover:bg-primary/10 hover:shadow-sm",
											!isSelected && "hover:border-l-2 hover:border-l-primary/50",
											isSelected && "bg-primary/5 border-l-4 border-l-primary shadow-sm",
										)}
									>
										<div
											className={cn(
												"rounded-lg p-2.5 transition-all duration-200",
												isSelected
													? "bg-primary/10 text-primary scale-110"
													: "bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:scale-110",
											)}
										>
											<TypeIcon className="h-5 w-5" />
										</div>
										<div className="flex-1 min-w-0">
											<h4
												className={cn(
													"font-semibold text-base mb-0.5 transition-colors",
													isSelected
														? "text-foreground"
														: "text-foreground group-hover:text-primary",
												)}
											>
												{type.title}
											</h4>
											<p
												className={cn(
													"text-sm line-clamp-1 transition-colors",
													isSelected
														? "text-muted-foreground"
														: "text-muted-foreground group-hover:text-foreground/80",
												)}
											>
												{type.description}
											</p>
										</div>
										<ChevronRight
											className={cn(
												"h-5 w-5 transition-all duration-200",
												isSelected
													? "text-primary translate-x-1"
													: "text-muted-foreground group-hover:text-primary group-hover:translate-x-1",
											)}
										/>
									</button>
								);
							})}
						</div>
					</div>
				</div>

				{/* Right Column - Selected Application Type Details */}
				<div className="flex flex-col">
					<div className="rounded-xl border border-border bg-card p-8 lg:p-10 flex-1">
						<div className="mb-6">
							<div className="mb-4 flex items-center justify-between">
								<h3 className="text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">
									{selectedType.title}
								</h3>
								<div className="rounded-xl bg-primary/10 p-4 w-fit mb-4">
									<Icon className="h-10 w-10 text-primary" />
								</div>
							</div>
							<p className="text-lg text-muted-foreground leading-relaxed">
								{selectedType.description}
							</p>
						</div>
						<div className="mt-8">
							<h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
								Example Use Cases
							</h4>
							<div className="grid grid-cols-2 gap-3">
								{selectedType.useCases.map((useCase, index) => (
									<div
										key={index}
										className="rounded-lg border border-border bg-muted/30 p-4 hover:bg-muted/50 transition-colors"
									>
										<div className="flex items-start gap-3">
											<div className="rounded-md bg-primary/10 p-1.5 mt-0.5">
												<div className="h-1.5 w-1.5 rounded-full bg-primary" />
											</div>
											<p className="text-sm font-medium text-foreground leading-snug">
												{useCase}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
