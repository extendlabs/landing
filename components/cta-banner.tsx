"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="w-full py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 lg:p-16 text-center overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px] opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Let&apos;s discuss how we can help bring your vision to life. Get
              a free consultation and project estimate today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="extend"
                className="px-8 py-6 text-base font-medium rounded-full"
              >
                <Link href="#contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-medium rounded-full"
              >
                <Link href="#projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
