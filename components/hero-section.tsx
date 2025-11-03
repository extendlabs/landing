"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/logo.png";
import FloatingShapes from "./floating-shapes";
import DecorativeCubes from "./decorative-cubes";
import { LineShadowText } from "./ui/line-shadow-text";
import { motion } from "framer-motion";

export default function HeroSection() {
	return (
		<section className="min-h-dvh w-full relative flex items-center justify-center">
			<div
				className="absolute inset-0 z-0"
				style={{
					background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #072607 100%)",
				}}
			/>

			<div className="py-12">
				<div className="relative mx-auto flex max-w-5xl flex-col lg:flex-row px-6 gap-8 items-center">
					<div className="mx-auto max-w-lg text-center lg:ml-0 flex-1 lg:text-left lg:w-1/2">
						<h1 className="mt-8 max-w-2xl text-balance text-5xl font-semibold md:text-6xl lg:mt-16  leading-tightest">
							<motion.span
								initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
								animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								Ship
							</motion.span>
							<motion.span
								initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
								animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								<LineShadowText className="italic" shadowColor={"white"}>
									Faster
								</LineShadowText>
							</motion.span>
							<br />
							<motion.span
								initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
								animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								with Extend Labs
							</motion.span>
						</h1>
						<p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">
							<motion.span
								initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
								animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								Hire a experienced andtalented team of developers to build your next project.
							</motion.span>
						</p>

						<motion.div
							className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start"
							initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
							animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
							transition={{ duration: 0.5, ease: "easeOut" }}
						>
							<Button
								asChild
								size="lg"
								className="px-5 text-base text-white rounded-2xl"
								variant="extend"
							>
								<Link href="#projects">
									<span className="text-nowrap">Our work</span>
								</Link>
							</Button>
							<Button
								key={2}
								asChild
								size="lg"
								variant="ghost"
								className="px-5 text-base rounded-2xl"
							>
								<Link href="#contact">
									<span className="text-nowrap">Book a call</span>
								</Link>
							</Button>
						</motion.div>
					</div>
					<motion.div
						className="lg:w-1/2 flex-1 flex items-center justify-center"
						initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
						animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<DecorativeCubes />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
