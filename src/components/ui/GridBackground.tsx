"use client";

import { useEffect, useRef } from "react";

export function GridBackground() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const handleMouseMove = (e: MouseEvent) => {
            const squares = grid.querySelectorAll(".grid-square");

            squares.forEach((square) => {
                const rect = square.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const distance = Math.sqrt(
                    Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
                );

                if (distance < 120) {
                    const intensity = 1 - distance / 120;
                    (square as HTMLElement).style.backgroundColor = `rgba(99, 102, 241, ${intensity * 0.15})`;
                    (square as HTMLElement).style.borderColor = `rgba(99, 102, 241, ${intensity * 0.4})`;
                } else {
                    (square as HTMLElement).style.backgroundColor = "transparent";
                    (square as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.05)";
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={gridRef}
            className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none"
            style={{ zIndex: 0 }}
        >
            {Array.from({ length: 144 }).map((_, i) => (
                <div
                    key={i}
                    className="grid-square h-full w-full border border-white/5 transition-all duration-200 ease-out"
                />
            ))}
        </div>
    );
}
