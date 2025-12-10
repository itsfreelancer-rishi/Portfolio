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
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const distance = Math.sqrt(x * x + y * y);

                if (distance < 150) {
                    (square as HTMLElement).style.backgroundColor = "rgba(99, 102, 241, 0.1)";
                    (square as HTMLElement).style.borderColor = "rgba(99, 102, 241, 0.3)";
                } else {
                    (square as HTMLElement).style.backgroundColor = "transparent";
                    (square as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.05)";
                }
            });
        };

        grid.addEventListener("mousemove", handleMouseMove);
        return () => grid.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={gridRef}
            className="absolute inset-0 -z-10 grid grid-cols-12 grid-rows-12"
        >
            {Array.from({ length: 144 }).map((_, i) => (
                <div
                    key={i}
                    className="grid-square h-full w-full border border-white/5 transition-all duration-300"
                />
            ))}
        </div>
    );
}
