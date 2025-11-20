"use client";

interface DecorativeCubesProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "emerald" | "purple" | "blue";
}

export default function DecorativeCubes({
  children,
  className = "",
  variant = "emerald",
}: DecorativeCubesProps) {
  const colors = {
    emerald: {
      cube1: "border-white dark:border-white",
      cube2: "border-emerald-500 dark:border-emerald-500",
      cube3: "border-emerald-500 dark:border-emerald-500",
      cube4: "border-emerald-500 dark:border-emerald-500",
      glow: "from-emerald-400 to-emerald-600",
    },
    purple: {
      cube1: "border-purple-400 dark:border-purple-500",
      cube2: "border-purple-500 dark:border-purple-400",
      cube3: "border-purple-300 dark:border-purple-600",
      cube4: "border-purple-600 dark:border-purple-300",
      grid: "text-purple-600 dark:text-purple-400",
      glow: "from-purple-400 to-purple-600",
      connection: "stroke-purple-500 dark:stroke-purple-400",
    },
    blue: {
      cube1: "border-blue-400 dark:border-blue-500",
      cube2: "border-blue-500 dark:border-blue-400",
      cube3: "border-blue-300 dark:border-blue-600",
      cube4: "border-blue-600 dark:border-blue-300",
      grid: "text-blue-600 dark:text-blue-400",
      glow: "from-blue-400 to-blue-600",
      connection: "stroke-blue-500 dark:stroke-blue-400",
    },
  };

  const selectedColors = colors[variant];

  return (
    <div className={`relative ${className}`}>
      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${selectedColors.glow} blur-3xl opacity-20 rounded-full scale-150 -z-10`}
        aria-hidden="true"
      />

      {/* Main content container */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
        {/* Center content (logo or image) */}
        <div className="relative z-10 animate-float">{children}</div>

        {/* Decorative Cube 1 - Top Right (Closer) */}
        <div
          className={`absolute top-6 right-6 md:top-22 md:right-22 w-10 h-10 md:w-14 md:h-14 lg:w-22 lg:h-22 border-2 ${selectedColors.cube1} rounded-lg animate-float-delayed-rotated opacity-60 backdrop-blur-sm`}
          style={{ animationDelay: "1s", rotate: "45deg" }}
          aria-hidden="true"
        ></div>

        {/* Decorative Cube 2 - Bottom Left (Closer) */}
        <div
          className={`absolute bottom-6 left-6 md:bottom-22 md:left-22 w-10 h-10 md:w-14 md:h-14 lg:w-22 lg:h-22 border-2 ${selectedColors.cube2} rounded-lg animate-float-delayed opacity-60 backdrop-blur-sm`}
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        ></div>

        {/* Decorative Cube 3 - Top Left (Closer) */}
        <div
          className={`absolute top-6 left-6 md:top-22 md:left-22 w-10 h-10 md:w-14 md:h-14 lg:w-22 lg:h-22 border-2 ${selectedColors.cube3} rounded-lg animate-float-delayed opacity-60 backdrop-blur-sm`}
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        ></div>

        {/* Decorative Cube 4 - Bottom Right (Closer) */}
        <div
          className={`absolute bottom-6 right-6 md:bottom-22 md:right-22 w-10 h-10 md:w-14 md:h-14 lg:w-22 lg:h-22 border-2 ${selectedColors.cube4} rounded-lg animate-float-delayed opacity-60 backdrop-blur-sm`}
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}
