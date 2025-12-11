"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        title: "MÉMOIRE WEDDINGS",
        category: "Wedding Photography",
        image: "/images/photographer.png",
        slug: "memoire-weddings",
        description: "Minimizing bounce rate for high-end wedding inquiries.",
        isExternal: true,
        externalUrl: "https://wedding-photo-omega.vercel.app/"
    },
    {
        title: "LIVINGSTON & PARTNERS",
        category: "Legal Firm",
        image: "/images/lawyer.png",
        slug: "livingston-partners",
        description: "Building authority and trust for corporate clients.",
        isExternal: true,
        externalUrl: "https://lawyer-gray.vercel.app/"
    },
    {
        title: "Cleaning Service",
        category: "Cleaning Service",
        image: "/images/cleaning.png",
        slug: "cleaning-service",
        description: "Simplifying booking flow to increase conversion by 40%.",
        isExternal: true,
        externalUrl: "https://cleaning-lovat-tau.vercel.app/"
    },
];

export function FeaturedWork() {
    return (
        <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Selected Work
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        I don't just design pretty websites. I build strategic assets that solve business problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col items-start"
                        >
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                            </div>
                            <div className="mt-6">
                                <p className="text-sm font-medium text-muted-foreground">
                                    {project.category}
                                </p>
                                <h3 className="mt-2 text-xl font-bold text-foreground font-heading group-hover:text-white/80">
                                    <Link
                                        href={project.isExternal ? project.externalUrl! : `/work/${project.slug}`}
                                        target={project.isExternal ? "_blank" : undefined}
                                        rel={project.isExternal ? "noopener noreferrer" : undefined}
                                    >
                                        <span className="absolute inset-0" />
                                        {project.title}
                                    </Link>
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground/80">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <Link href="/work" className="text-sm font-medium text-white hover:underline underline-offset-4">
                        View All Projects &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
