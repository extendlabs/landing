"use client";

interface FloatingShapesProps {
  className?: string;
  variant?: "emerald" | "purple" | "blue";
}

export default function FloatingShapes({
  className = "",
  variant = "emerald",
}: FloatingShapesProps) {
  const colors = {
    emerald: {
      shape1: "bg-emerald-200/20 dark:bg-emerald-500/10",
      shape2: "bg-emerald-300/20 dark:bg-emerald-400/10",
      shape3: "bg-emerald-200/20 dark:bg-emerald-500/10",
    },
    purple: {
      shape1: "bg-purple-200/20 dark:bg-purple-500/10",
      shape2: "bg-purple-300/20 dark:bg-purple-400/10",
      shape3: "bg-purple-200/20 dark:bg-purple-500/10",
    },
    blue: {
      shape1: "bg-blue-200/20 dark:bg-blue-500/10",
      shape2: "bg-blue-300/20 dark:bg-blue-400/10",
      shape3: "bg-blue-200/20 dark:bg-blue-500/10",
    },
  };

  const selectedColors = colors[variant];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Shape 1 - Top Left */}
      <div
        className={`absolute top-20 left-10 w-32 h-32 ${selectedColors.shape1} rounded-full blur-3xl animate-pulse`}
        aria-hidden="true"
      />

      {/* Shape 2 - Top Right */}
      <div
        className={`absolute top-40 right-20 w-40 h-40 ${selectedColors.shape2} rounded-full blur-3xl animate-pulse`}
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      />

      {/* Shape 3 - Bottom Left */}
      <div
        className={`absolute bottom-40 left-1/4 w-36 h-36 ${selectedColors.shape3} rounded-full blur-3xl animate-pulse`}
        style={{ animationDelay: "0.5s" }}
        aria-hidden="true"
      />
    </div>
  );
}
