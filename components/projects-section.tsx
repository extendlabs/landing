"use client";
import React from "react";
import { ProjectCard } from "./project-card";

interface Project {
	id: number;
	title: string;
	description: string;
	stars?: number;
	link: string;
	imageSrc?: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: "Extend UI",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		stars: 64,
		link: "https://github.com",
		imageSrc: "/ui-image.png",
	},
	{
		id: 2,
		title: "Animated",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		stars: 2,
		link: "https://github.com",
		imageSrc: "/animated.svg",
	},

	{
		id: 3,
		title: "Classcat",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		stars: 1,
		link: "https://github.com",
		imageSrc: "/classcat-image.png",
	},
	{
		id: 4,
		title: "Infloodie",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
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
