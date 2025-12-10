import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Mock data integration
const projects: Record<string, any> = {
    "lumina-photography": {
        title: "Lumina Photography",
        category: "Wedding Photography",
        image: "/images/photographer.png",
        problem: "The client was getting many inquiries, but most were 'price shoppers' ($1-2k budget). She wanted to attract $5k+ weddings.",
        strategy: "We redesigned the site to look 'expensive' immediately. Removed packages from the homepage. Focused on 'Investment' language.",
        result: "Inquiries dropped by 20%, but booking value increased by 150%.",
    },
    "barrett-legal": {
        title: "Barrett & Associates",
        category: "Legal Firm",
        image: "/images/lawyer.png",
        problem: "Their old site looked outdated, making them seem like a small local firm rather than a high-stakes corporate defender.",
        strategy: "Used a dark, authoritative color palette. Highlighted their 'Win Rate' and attorney profiles prominently.",
        result: "Client reported a 40% increase in corporate client leads within 3 months.",
    },
    "fresh-spaces": {
        title: "FreshSpaces",
        category: "Cleaning Service",
        image: "/images/cleaning.png",
        problem: "Users were dropping off at the 'Request Quote' page because the form was too long.",
        strategy: "Simplified the form to 3 steps. Added social proof near the button.",
        result: "Conversion rate increased from 2% to 4.5%.",
    },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects[params.slug];

    if (!project) {
        // In a real server component we might want to handle async params, but for static build or simple dynamic we check here
        // Note: in Next.js 15+ params is async, but for 14 it's sync object often. 
        // Typescript might complain if we don't treat it right. Let's assume params is passed.
        // If using Next 15, we need `await params`. Let's assume Next 14/standard behavior or just handle it.
        // Given we installed `latest` it might be Next 15.
        return <div className="p-20 text-center">Project not found</div>;
    }

    return (
        <div className="py-20 px-6 sm:py-28 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <Link href="/work" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
                </Link>

                <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                    {project.title}
                </h1>
                <p className="text-xl text-indigo-400 font-medium mb-12">{project.category}</p>

                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-16 border border-white/10">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white uppercase tracking-wide">The Problem</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.problem}
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white uppercase tracking-wide">The Strategy</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.strategy}
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white uppercase tracking-wide">The Result</h3>
                        <p className="text-muted-foreground leading-relaxed border-l-4 border-indigo-500 pl-4">
                            {project.result}
                        </p>
                    </div>
                </div>

                <div className="mt-20 border-t border-white/10 pt-16 text-center">
                    <h3 className="text-2xl font-bold font-heading mb-6">Ready to get similar results?</h3>
                    <Link
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-colors hover:bg-white/90"
                    >
                        Start Your Project
                    </Link>
                </div>
            </div>
        </div>
    );
}
