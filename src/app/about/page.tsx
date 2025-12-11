import { Metadata } from "next";
import { Check, Zap, Target, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Me | Rishi Ramandwal",
    description: "I build websites that pay for themselves. Learn about my strategy-first design process.",
};

export default function AboutPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                        I Don't Just Build Websites.
                        <br />
                        <span className="text-indigo-400">I Build Client Magnets.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Most designers focus on making things "pretty." I focus on making things profitable.
                    </p>
                </div>

                {/* Why Me Section */}
                <div className="mb-20">
                    <h2 className="font-heading text-3xl font-bold mb-8">Why Work With Me?</h2>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-muted-foreground mb-6">
                            Here's the truth: Your website isn't a digital business card. It's a 24/7 sales machine that should be converting visitors into paying clients while you sleep.
                        </p>
                        <p className="text-lg text-muted-foreground mb-6">
                            I've spent years studying what makes service professionals successful online. It's not flashy animations or trendy designs. It's <strong className="text-white">strategic positioning, clear messaging, and conversion-focused layouts</strong> that speak directly to your ideal client's pain points.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            When you work with me, you're not just getting a website. You're getting a strategic partner who understands that every pixel, every word, and every button needs to earn its place by driving results.
                        </p>
                    </div>
                </div>

                {/* What Makes Me Different */}
                <div className="mb-20">
                    <h2 className="font-heading text-3xl font-bold mb-8">What Makes Me Different</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                            <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                                <Target className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Strategy First, Design Second</h3>
                            <p className="text-muted-foreground">
                                I start by understanding your business goals, target audience, and competitive landscape. The design comes after we nail the strategy.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                            <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                                <Zap className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Conversion-Focused</h3>
                            <p className="text-muted-foreground">
                                Every element is designed to guide visitors toward booking a call, requesting a quote, or making a purchase. No fluff, just results.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                            <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
                            <p className="text-muted-foreground">
                                Most projects are delivered within 2-3 weeks. No endless revisions, no ghosting, just professional work delivered on time.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                            <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                                <Check className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Transparent Process</h3>
                            <p className="text-muted-foreground">
                                Clear pricing, regular updates, and no technical jargon. You'll know exactly what you're getting and when.
                            </p>
                        </div>
                    </div>
                </div>

                {/* My Process */}
                <div className="mb-20">
                    <h2 className="font-heading text-3xl font-bold mb-8">How We'll Work Together</h2>
                    <div className="space-y-6">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-black font-bold">
                                    1
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Discovery Call (Free)</h3>
                                <p className="text-muted-foreground">
                                    We'll discuss your business goals, target audience, and what success looks like for you. This helps me understand if we're a good fit.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-black font-bold">
                                    2
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Strategy & Planning</h3>
                                <p className="text-muted-foreground">
                                    I'll create a strategic plan for your website, including sitemap, messaging framework, and conversion strategy.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-black font-bold">
                                    3
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Design & Development</h3>
                                <p className="text-muted-foreground">
                                    I'll design and build your website using modern technologies, keeping you updated throughout the process.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-black font-bold">
                                    4
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Launch & Support</h3>
                                <p className="text-muted-foreground">
                                    We'll launch your site, and I'll provide training on how to manage it. Plus, you get 30 days of post-launch support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                    <h2 className="font-heading text-3xl font-bold mb-4">
                        Ready to Attract Premium Clients?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's build a website that positions you as the obvious choice in your market and converts visitors into high-paying clients.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-all hover:bg-white/90 hover:scale-105"
                    >
                        Book Your Free Discovery Call
                    </Link>
                </div>
            </div>
        </div>
    );
}
