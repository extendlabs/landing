"use client";
import React from "react";
import { Icons } from "./icons";
import { ProjectCard } from "./project-card";

interface Project {
	id: number;
	title: string;
	description: string;
	stars?: number;
	link: string;
	icon?: React.ReactNode;
	imageSrc?: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: "Extend UI",
		description:
			"Enterprise-grade financial analytics platform with advanced charting and real-time market data integration.",
		stars: 64,
		link: "https://github.com",
		imageSrc: "/ui-image.png",
	},
	{
		id: 2,
		title: "Animated",
		description:
			"Comprehensive health monitoring dashboard with real-time data visualization and patient management system.",
		stars: 2,
		link: "https://github.com",
		imageSrc: "/animated.svg",
	},

	{
		id: 3,
		title: "Classcat",
		description:
			"Cross-platform mobile app for tracking workouts, nutrition, and progress with AI-powered recommendations.",
		stars: 1,
		link: "https://github.com",
		imageSrc: "/classcat-image.png",
	},
	{
		id: 4,
		title: "Infloodie",
		description:
			"A modern e-commerce solution built with React Native, featuring real-time inventory management and seamless checkout experience.",
		stars: 1,
		link: "https://github.com",
	},
];

export default function ProjectsSection() {
	return (
		<section className="w-full py-24 lg:py-28 max-w-5xl mx-auto px-8" id="projects">
			<div className="text-center mb-16">
				<span className="uppercase text-sm font-medium text-muted-foreground ">Projects</span>
				<h2 className="text-4xl md:text-5xl font-semibold mb-4">Our work</h2>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Showcasing our expertise in building cutting-edge applications across various industries.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						stars={project.stars}
						link={project.link}
						imageSrc={project.imageSrc}
					/>
				))}
			</div>
		</section>
	);
}
