"use client";
import React from "react";
import IsometricGrid from "./isometric-grid";

export default function FeaturesSection() {
	const features = [
		{
			id: "auth",
			label: "Auth & Identity",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
					<path d="M7 11V7a5 5 0 0 1 10 0v4" />
				</svg>
			),
			description:
				"Handle authentication and user identity management with ease. Secure, scalable, and ready to use.",
		},
		{
			id: "payments",
			label: "Payments",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<rect width="20" height="14" x="2" y="5" rx="2" />
					<line x1="2" x2="22" y1="10" y2="10" />
				</svg>
			),
			description:
				"Handle invoices and automated renewals seamlessly. Accept payments from customers worldwide.",
		},
		{
			id: "storage",
			label: "Data Storage",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<ellipse cx="12" cy="5" rx="9" ry="3" />
					<path d="M3 5V19A9 3 0 0 0 21 19V5" />
					<path d="M3 12A9 3 0 0 0 21 12" />
				</svg>
			),
			description:
				"Store and retrieve data efficiently with our unified storage solution. Fast, reliable, and secure.",
		},
		{
			id: "analytics",
			label: "Analytics",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M3 3v18h18" />
					<path d="m19 9-5 5-4-4-3 3" />
				</svg>
			),
			description:
				"Track performance, engagement, and usage with one API. Get insights into your product in real-time.",
		},
	];

	return (
		<section className="relative w-full bg-black overflow-hidden">
			<IsometricGrid items={features} />
		</section>
	);
}
