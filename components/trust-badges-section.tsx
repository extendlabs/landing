"use client";

import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateLab", logo: "IL" },
  { name: "CloudScale", logo: "CS" },
  { name: "DataFlow", logo: "DF" },
  { name: "StartupHub", logo: "SH" },
  { name: "NextGen", logo: "NG" },
];

export default function TrustBadgesSection() {
  return (
    <section className="w-full py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm md:text-base font-medium text-muted-foreground">
            Trusted by innovative companies worldwide
          </p>
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="rounded-lg border border-border bg-card px-6 py-4 w-full text-center">
                <span className="text-xl font-bold text-foreground">
                  {client.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
