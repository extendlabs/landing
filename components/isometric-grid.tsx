"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GridItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
}

interface IsometricGridProps {
  items: GridItem[];
  className?: string;
}

const IsometricCard = ({
  item,
  isHovered,
  onHover,
  itemIndex,
}: {
  item: GridItem;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  itemIndex: number;
}) => {
  // Define rotation values for each item (you can customize these)
  const rotations = [
    { rotateX: 45, rotateY: 0, skewY: -15 }, // Item 0 (Top-Left)
    { rotateX: 45, rotateY: 0, skewY: -15 }, // Item 1 (Top-Right)
    { rotateX: 45, rotateY: 0, skewY: -15 }, // Item 2 (Bottom-Left)
    { rotateX: 45, rotateY: 0, skewY: -15 }, // Item 3 (Bottom-Right)
  ];

  const rotation = rotations[itemIndex] || rotations[0];
  return (
    <div
      className="relative group cursor-pointer transition-all duration-500 "
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        filter: isHovered
          ? "drop-shadow(0 30px 60px rgba(16, 185, 129, 0.4))"
          : "drop-shadow(0 5px 10px rgba(0, 0, 0, 0.2))",
      }}
    >
      {/* Main rectangle face */}
      <div
        className={cn(
          "relative h-50 w-40 transition-all duration-500 ease-out",
          "border border-white/10",
          isHovered
            ? "bg-gradient-to-br from-emerald-600/80 to-emerald-700/80"
            : "bg-gradient-to-br from-zinc-800/90 to-zinc-900/90"
        )}
        style={{
          transform: isHovered
            ? `skewY(${rotation.skewY}deg) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) translateZ(50px)`
            : `skewY(${rotation.skewY}deg) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) translateZ(0px)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Content */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{
            transform: `rotateY(${-rotation.rotateY}deg) rotateX(${-rotation.rotateX}deg) skewY(${-rotation.skewY}deg)`,
          }}
        >
          {item.icon && (
            <div className="mb-2 text-white/60 group-hover:text-white transition-colors">
              {item.icon}
            </div>
          )}
          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
            {item.label}
          </span>
        </div>

        {/* Side faces for depth */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500",
            isHovered
              ? "bg-gradient-to-br from-emerald-700/60 to-emerald-800/60"
              : "bg-gradient-to-br from-zinc-900/60 to-black/60"
          )}
          style={{
            transform: isHovered ? "translateZ(-30px)" : "translateZ(-20px)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        />

        {/* Cube edge lines - connecting front to back face corners */}
        {isHovered && (
          <>
            {/* Top-left edge - connects front corner to back corner */}
            <div
              className="absolute bg-emerald-400/80 transition-all duration-500"
              style={{
                left: "0",
                top: "0",
                width: "1px",
                height: "30px",
                transformOrigin: "top left",
                transform: "rotateX(-90deg)",
              }}
            />
            {/* Top-right edge */}
            <div
              className="absolute bg-emerald-400/80 transition-all duration-500"
              style={{
                right: "0",
                top: "0",
                width: "1px",
                height: "30px",
                transformOrigin: "top right",
                transform: "rotateX(-90deg)",
              }}
            />
            {/* Bottom-left edge */}
            <div
              className="absolute bg-emerald-400/80 transition-all duration-500"
              style={{
                left: "0",
                bottom: "0",
                width: "1px",
                height: "30px",
                transformOrigin: "bottom left",
                transform: "rotateX(90deg)",
              }}
            />
            {/* Bottom-right edge */}
            <div
              className="absolute bg-emerald-400/80 transition-all duration-500"
              style={{
                right: "0",
                bottom: "0",
                width: "1px",
                height: "30px",
                transformOrigin: "bottom right",
                transform: "rotateX(90deg)",
              }}
            />
          </>
        )}
      </div>

      {/* Description tooltip */}
      {item.description && isHovered && (
        <div className="absolute left-full ml-8 top-1/2 -translate-y-1/2 z-50 w-64 p-4 bg-zinc-900/95 border border-white/10 rounded-lg backdrop-blur-sm">
          <p className="text-sm text-white/70">{item.description}</p>
        </div>
      )}
    </div>
  );
};

export default function IsometricGrid({
  items,
  className,
}: IsometricGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const indexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Ensure we have exactly 4 items for 2x2 grid
  const gridItems = items.slice(0, 4);

  // Auto-hover animation cycling through all items
  useEffect(() => {
    const interval = setInterval(() => {
      const currentItem = gridItems[indexRef.current];

      if (currentItem) {
        setHoveredId(currentItem.id);

        // Clear any existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Clear hover after 1 second
        timeoutRef.current = setTimeout(() => {
          setHoveredId(null);
        }, 1000);

        // Move to next item
        indexRef.current = (indexRef.current + 1) % gridItems.length;
      }
    }, 15000); // 15000ms = 15 seconds

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [gridItems]);

  return (
    <div className={cn("relative w-full py-20", className)}>
      {/* Header */}
      <div className="text-center mb-20">
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          Features
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Build Every SaaS Component,
          <br />
          from One Unified Core.
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Each service connects seamlessly through our unified core.
        </p>
      </div>

      {/* Isometric Grid */}
      <div
        className="relative mx-auto flex items-center justify-center"
        style={{
          minHeight: "500px",
        }}
      >
        <div
          className="relative"
          style={{
            transform: "scale(0.9)",
            width: "400px",
            height: "400px",
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          {gridItems.map((item, index) => {
            // Position in 2x2 grid
            const positions = [
              { left: "0px", top: "0px" }, // Top-Left (Auth)
              { left: "160px", top: "0px" }, // Top-Right (Payments)
              { left: "0px", top: "160px" }, // Bottom-Left (Storage)
              { left: "160px", top: "160px" }, // Bottom-Right (Analytics)
            ];
            return (
              <div
                key={item.id}
                className="absolute"
                style={{
                  ...positions[index],
                }}
              >
                <IsometricCard
                  item={item}
                  isHovered={hoveredId === item.id}
                  onHover={setHoveredId}
                  itemIndex={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
