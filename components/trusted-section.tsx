"use client";

import React from "react";

export default function TrustedSection() {
	return (
		<section className="w-full py-12 lg:py-16 border-y border-border bg-muted/20">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="text-center">
					<p className="text-sm md:text-base font-medium text-muted-foreground">
						Trusted by <span className="text-foreground font-semibold">7,000+</span> top{" "}
						<span className="text-foreground">startups</span>,{" "}
						<span className="text-foreground">freelancers</span> and{" "}
						<span className="text-foreground">studios</span>
					</p>
				</div>
			</div>
		</section>
	);
}

