import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
    title: "How to Choose the Right Freelance Web Developer | Complete Guide 2024",
    description: "Learn how to find and hire the perfect freelance web developer for your business. Expert tips on evaluating portfolios, pricing, and ensuring quality work.",
    keywords: ["freelance web developer", "hire web developer", "choose web developer", "web developer portfolio", "freelance website designer"],
};

export default function BlogPost() {
    return (
        <div className="relative py-24 sm:py-32">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50" />

            <article className="mx-auto max-w-4xl px-6 lg:px-8">
                {/* Back button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center text-muted-foreground hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-12 pb-8 border-b border-white/10">
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm font-medium text-indigo-400">
                            <Tag className="h-3 w-3" />
                            Hiring Guide
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            December 11, 2024
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            8 min read
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                        How to Choose the Right Freelance Web Developer for Your Business
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        A comprehensive guide to finding and hiring the perfect web developer for your portfolio website project.
                    </p>
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none">
                    <div className="space-y-8">
                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-4">Why Hiring the Right Freelance Web Developer Matters</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Your website is often the first impression potential clients have of your business. Choosing the wrong freelance web developer can result in a site that looks unprofessional, loads slowly, or fails to convert visitors into clients.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                In this guide, I'll walk you through exactly what to look for when hiring a freelance web developer, based on my years of experience building high-converting websites for service professionals.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h2 className="font-heading text-3xl font-bold mb-4">1. Review Their Portfolio Carefully</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                A freelance web developer's portfolio tells you everything you need to know about their capabilities. Look for:
                            </p>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    <span><strong className="text-white">Relevant experience:</strong> Have they built websites for businesses similar to yours?</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    <span><strong className="text-white">Design quality:</strong> Do their sites look modern and professional?</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    <span><strong className="text-white">Functionality:</strong> Are the sites fast, mobile-friendly, and easy to navigate?</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    <span><strong className="text-white">Results:</strong> Do they showcase metrics like conversion rates or client testimonials?</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-4">2. Understand Their Process</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                A professional freelance web developer should have a clear, structured process. Red flags include:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                                    <p className="text-red-400 font-medium">❌ No discovery call or requirements gathering</p>
                                </div>
                                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                                    <p className="text-red-400 font-medium">❌ Jumping straight to design without strategy</p>
                                </div>
                                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                                    <p className="text-red-400 font-medium">❌ Unclear timelines or deliverables</p>
                                </div>
                                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                                    <p className="text-red-400 font-medium">❌ Poor communication or slow response times</p>
                                </div>
                            </div>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h2 className="font-heading text-3xl font-bold mb-4">3. Evaluate Their Technical Skills</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Make sure your freelance web developer is proficient in modern technologies:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                                    <p className="text-green-400 font-medium">✓ Responsive design (mobile-first)</p>
                                </div>
                                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                                    <p className="text-green-400 font-medium">✓ SEO basics & optimization</p>
                                </div>
                                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                                    <p className="text-green-400 font-medium">✓ Fast loading & performance</p>
                                </div>
                                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                                    <p className="text-green-400 font-medium">✓ Security best practices</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-4">4. Understand Pricing and Value</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Freelance web developer pricing varies widely. Here's what to expect:
                            </p>
                            <div className="space-y-4">
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-bold mb-2">Budget ($300-$800)</h3>
                                    <p className="text-muted-foreground">Template-based sites, limited customization, basic features</p>
                                </div>
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-bold mb-2">Mid-range ($800-$2,500)</h3>
                                    <p className="text-muted-foreground">Semi-custom design, moderate features, some strategy</p>
                                </div>
                                <div className="p-6 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                    <h3 className="text-xl font-bold mb-2 text-indigo-400">Premium ($2,500+)</h3>
                                    <p className="text-muted-foreground">Fully custom, strategic, conversion-focused, ongoing support</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mt-6 italic">
                                Remember: the cheapest option often costs more in the long run through lost clients and required fixes.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-4">Conclusion</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Hiring the right freelance web developer is an investment in your business's future. Take your time, ask the right questions, and choose someone who understands your goals and can deliver results.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Looking for a freelance web developer who checks all these boxes? I specialize in building high-converting portfolio websites for service professionals.
                            </p>
                        </section>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 text-center">
                    <h3 className="font-heading text-3xl font-bold mb-4">
                        Ready to Build Your High-Converting Website?
                    </h3>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        I'm a freelance web developer specializing in portfolio websites that attract premium clients. Let's discuss your project.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-all hover:bg-white/90 hover:scale-105"
                    >
                        Get Started
                    </Link>
                </div>
            </article>
        </div>
    );
}
