"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";

interface ApplicationTypeCardProps {
  title: string;
  description: string;
  useCases: string[];
  icon: React.ComponentType<LucideProps>;
  className?: string;
}

export function ApplicationTypeCard({
  title,
  description,
  useCases,
  icon: Icon,
  className,
}: ApplicationTypeCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:border-primary/20",
        className
      )}
    >
      {/* Icon */}
      <div className="px-8 pt-8 pb-4">
        <div className="mb-4 flex items-center justify-start">
          <div className="rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="px-8 pb-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
          {title}
        </h3>
      </div>

      {/* Description */}
      <div className="px-8 pb-6">
        <p className="text-muted-foreground text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Use Cases */}
      <div className="px-8 pb-8 mt-auto">
        <div className="flex flex-wrap gap-2">
          {useCases.map((useCase, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-muted/50 px-3 py-1.5 text-sm font-medium text-muted-foreground border border-border transition-all duration-300 group-hover:bg-muted group-hover:border-primary/20"
            >
              {useCase}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
