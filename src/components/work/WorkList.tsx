"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// In a real app, this would be fetched from a CMS or a data file
const projects = [
    {
        title: "Garcia's Taqueria",
        category: "Restaurant Website",
        image: "/images/restaurant.png",
        slug: "garcias-taqueria",
        description: "Modern restaurant website for Garcia's Taqueria in California, featuring online menu and location information.",
        year: "2025",
        isExternal: true,
        externalUrl: "https://garcias-taqueria.vercel.app/"
    },
    {
        title: "Atelier Photography",
        category: "Wedding Photography Portfolio",
        image: "/images/photography-portfolio.png",
        slug: "atelier-photography",
        description: "My personal photography portfolio showcasing timeless elegance in fine-art wedding photography.",
        year: "2025",
        isExternal: true,
        externalUrl: "https://my-website-delta-inky.vercel.app/"
    },
    {
        title: "MÉMOIRE WEDDINGS",
        category: "Wedding Photography",
        image: "/images/photographer.png",
        slug: "memoire-weddings",
        description: "Minimizing bounce rate for high-end wedding inquiries.",
        year: "2025",
        isExternal: true,
        externalUrl: "https://wedding-photo-omega.vercel.app/"
    },
    {
        title: "LIVINGSTON & PARTNERS",
        category: "Legal Firm",
        image: "/images/lawyer.png",
        slug: "livingston-partners",
        description: "Building authority and trust for corporate clients.",
        year: "2025",
        isExternal: true,
        externalUrl: "https://lawyer-gray.vercel.app/"
    },
    {
        title: "Cleaning Service",
        category: "Cleaning Service",
        image: "/images/cleaning.png",
        slug: "cleaning-service",
        description: "Simplifying booking flow to increase conversion by 40%.",
        year: "2025",
        isExternal: true,
        externalUrl: "https://cleaning-lovat-tau.vercel.app/"
    },
];

export function WorkList() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-20">
                    <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Selected Work
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        A showcase of strategic web design projects focused on conversion and brand positioning.
                    </p>
                </div>

                <div className="flex flex-col gap-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col gap-12 lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-3/5">
                                <Link
                                    href={project.isExternal ? project.externalUrl! : `/work/${project.slug}`}
                                    target={project.isExternal ? "_blank" : undefined}
                                    rel={project.isExternal ? "noopener noreferrer" : undefined}
                                    className="group block relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-muted"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                                </Link>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-2/5 flex flex-col justify-center">
                                <span className="text-sm font-medium text-indigo-400 mb-4">{project.category} — {project.year}</span>
                                <h3 className="text-3xl font-bold font-heading mb-6">{project.title}</h3>
                                <p className="text-lg text-muted-foreground mb-8">
                                    {project.description}
                                </p>
                                <div className="flex flex-col gap-4">
                                    {!project.isExternal && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Strategy</h4>
                                            <p className="text-sm text-muted-foreground">Focus on user journey and trust building signals.</p>
                                        </div>
                                    )}
                                    <Link
                                        href={project.isExternal ? project.externalUrl! : `/work/${project.slug}`}
                                        target={project.isExternal ? "_blank" : undefined}
                                        rel={project.isExternal ? "noopener noreferrer" : undefined}
                                        className="inline-flex items-center text-white font-medium hover:underline underline-offset-4 mt-4"
                                    >
                                        {project.isExternal ? "Visit Portfolio" : "View Case Study"} <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
