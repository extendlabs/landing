"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DecorativeCubes from "./decorative-cubes";
import { LineShadowText } from "./ui/line-shadow-text";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-dvh w-full relative flex items-center justify-center bg-background pt-20">
      <div className="pb-20 lg:py-32">
        <div className="relative mx-auto flex max-w-7xl flex-col lg:flex-row px-6 lg:px-8 lg:gap-16 items-center w-full">
          <div className="mx-auto w-full text-center lg:ml-0 lg:text-left lg:flex-[1.3] lg:max-w-none">
            <h1 className="mt-8 w-full text-5xl md:text-6xl lg:text-7xl font-semibold lg:mt-0 leading-[1.1] tracking-tight">
              <motion.span
                className="inline-block lg:whitespace-nowrap"
                initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                Ship{" "}
                <LineShadowText className="italic inline" shadowColor={"white"}>
                  Faster
                </LineShadowText>
              </motion.span>
              <br />
              <motion.span
                initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              >
                with Extend Labs
              </motion.span>
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-xl text-muted-foreground leading-relaxed">
              <motion.span
                initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
              >
                Hire an experienced and talented team of developers to build
                your next project.
              </motion.span>
            </p>

            <motion.div
              className="lg:flex-1 flex items-center justify-center w-full mx-auto md:hidden mt-6"
              initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
            >
              <DecorativeCubes />
            </motion.div>

            <motion.div
              className="mt-6 md:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            >
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-base font-medium rounded-full"
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
                className="px-8 py-6 text-base font-medium rounded-full"
              >
                <Link href="#contact">
                  <span className="text-nowrap">Book a call</span>
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="lg:flex-1 items-center justify-center w-full lg:w-auto hidden lg:block"
            initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
          >
            <DecorativeCubes />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
