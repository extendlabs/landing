"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  stars?: number;
  link: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  stars,
  link,
  imageSrc,
  imageAlt,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:border-primary/20",
        className
      )}
    >
      {/* Title */}
      <div className="px-8 pt-8 pb-4">
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

      {/* Image */}
      {imageSrc ? (
        <div className="relative w-full h-[240px] overflow-hidden bg-muted/30">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
        </div>
      ) : (
        <div className="relative w-full h-[240px] flex items-center justify-center bg-muted/20">
          <span className="text-muted-foreground text-sm">
            In progress... 🚧
          </span>
        </div>
      )}

      {/* Footer */}
      <div className="relative flex items-center justify-between px-8 py-6 border-t border-border mt-auto">
        <div className="flex items-center gap-2">
          {stars !== undefined && (
            <>
              <Icons.sparkles className="w-5 h-5 text-muted-foreground" />
              <span className="text-base font-medium font-mono text-muted-foreground">
                {stars.toLocaleString()}
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
          <span className="text-sm font-medium">Check it out</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}
