import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me | Sumit",
    description: "I build websites that pay for themselves. Learn about my strategy-first design process.",
};

export default function AboutPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image/Visual Side */}
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative">
                            {/* Placeholder for Profile Pic */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-heading text-4xl font-bold">
                                SUMIT
                            </div>
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="text-white font-bold text-lg">Rishi Ramandwal</div>
                                <div className="text-white/60 text-sm">Freelance Web Designer</div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
                            I build websites that <br /><span className="text-indigo-400">pay for themselves.</span>
                        </h1>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Most designers focus on making things "pretty". I focus on making things "profitable".
                            </p>
                            <p>
                                With a background in Conversion-Focused Design, I understand that a website is an investment, not an expense. It needs to capture leads, build trust, and sell your services while you sleep.
                            </p>
                            <p>
                                My process is simple and transparent. No jargon, no ghosting, just high-quality work delivered on time.
                            </p>
                        </div>

                        <div className="mt-12 space-y-8">
                            <h3 className="text-xl font-bold text-white mb-6">Why work with me?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Fast Turnaround</h4>
                                    <p className="text-sm text-muted-foreground">Most projects delivered in 2 weeks or less.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Strategy First</h4>
                                    <p className="text-sm text-muted-foreground">Design informed by marketing psychology.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-colors hover:bg-white/90"
                            >
                                Work With Me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
