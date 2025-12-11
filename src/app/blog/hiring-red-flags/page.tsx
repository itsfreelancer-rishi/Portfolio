import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
    title: "How to Hire a Freelance Web Developer: Red Flags to Avoid",
    description: "Learn the warning signs when hiring a freelance web developer. Avoid costly mistakes by recognizing these red flags before signing a contract.",
    keywords: ["hire freelance web developer", "web developer red flags", "hiring mistakes", "freelance developer warning signs", "avoid bad developers"],
};

export default function BlogPost() {
    return (
        <div className="relative py-24 sm:py-32">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50" />

            <article className="mx-auto max-w-4xl px-6 lg:px-8">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-muted-foreground hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Blog
                </Link>

                <header className="mb-12 pb-8 border-b border-white/10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-sm font-medium text-red-400">
                            <Tag className="h-3 w-3" />
                            Warning Guide
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            December 11, 2024
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            7 min read
                        </span>
                    </div>

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                        How to Hire a Freelance Web Developer: Red Flags to Avoid
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        Protect yourself from costly mistakes. Learn the warning signs that indicate a freelance web developer might not be the right choice for your project.
                    </p>
                </header>

                <div className="prose prose-invert prose-lg max-w-none">
                    <div className="space-y-8">
                        <section className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                            <div className="flex items-start gap-4">
                                <AlertTriangle className="h-8 w-8 text-red-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h2 className="font-heading text-2xl font-bold mb-3 text-red-400">Why This Matters</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Hiring the wrong freelance web developer can cost you thousands in wasted money, months of lost time, and damage to your professional reputation. I've seen businesses lose entire budgets to developers who disappeared mid-project or delivered unusable websites.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mt-3">
                                        This guide will help you spot the warning signs before it's too late.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-6">🚩 Red Flag #1: No Portfolio or Vague Examples</h2>
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3">Warning Signs:</h3>
                                <ul className="space-y-2 text-muted-foreground mb-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>"I can't share my work due to NDAs" (for every project)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Portfolio shows only template screenshots</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>No live website links to review</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Work samples don't match your project type</span>
                                    </li>
                                </ul>
                                <p className="text-white font-semibold">What to do instead:</p>
                                <p className="text-muted-foreground">Look for developers with public portfolios showing live websites similar to what you need. Ask for 3-5 relevant examples with working links.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-6">🚩 Red Flag #2: Unrealistic Promises</h2>
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3">Warning Signs:</h3>
                                <ul className="space-y-2 text-muted-foreground mb-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>"I can build anything in 2 days"</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>"Guaranteed #1 Google ranking"</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>"Your site will go viral"</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>"No revisions needed, perfect first time"</span>
                                    </li>
                                </ul>
                                <p className="text-white font-semibold">What to do instead:</p>
                                <p className="text-muted-foreground">Professional developers set realistic expectations. They'll explain timelines, potential challenges, and what's actually achievable.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-6">🚩 Red Flag #3: Poor Communication</h2>
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3">Warning Signs:</h3>
                                <ul className="space-y-2 text-muted-foreground mb-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Takes 3+ days to respond to messages</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Vague answers to specific questions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Doesn't ask about your business goals</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Uses excessive technical jargon without explanation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Defensive when you ask questions</span>
                                    </li>
                                </ul>
                                <p className="text-white font-semibold">What to do instead:</p>
                                <p className="text-muted-foreground">Choose developers who respond within 24 hours, explain things clearly, and show genuine interest in understanding your needs.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-6">🚩 Red Flag #4: No Clear Process or Contract</h2>
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3">Warning Signs:</h3>
                                <ul className="space-y-2 text-muted-foreground mb-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>"Let's just start and see what happens"</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>No written proposal or scope of work</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Unclear deliverables or timeline</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Refuses to sign a contract</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>No revision policy stated upfront</span>
                                    </li>
                                </ul>
                                <p className="text-white font-semibold">What to do instead:</p>
                                <p className="text-muted-foreground">Insist on a detailed contract covering scope, timeline, deliverables, payment terms, and revision policy before starting work.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-6">🚩 Red Flag #5: Suspiciously Low Prices</h2>
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3">Warning Signs:</h3>
                                <ul className="space-y-2 text-muted-foreground mb-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>$200 for a "professional custom website"</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Significantly cheaper than all other quotes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>"Limited time offer" pressure tactics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Hidden fees revealed later</span>
                                    </li>
                                </ul>
                                <p className="text-white font-semibold">Reality check:</p>
                                <p className="text-muted-foreground">A professional portfolio website takes 40-80 hours of work. If someone charges $200, they're either using templates, cutting corners, or will disappear mid-project. You get what you pay for.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-6">🚩 Red Flag #6: No Reviews or References</h2>
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3">Warning Signs:</h3>
                                <ul className="space-y-2 text-muted-foreground mb-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>No testimonials on their website</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Refuses to provide client references</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>All reviews are generic or suspiciously perfect</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>No presence on platforms like Upwork or LinkedIn</span>
                                    </li>
                                </ul>
                                <p className="text-white font-semibold">What to do instead:</p>
                                <p className="text-muted-foreground">Look for specific testimonials with results ("increased conversions by 40%"), and ask to speak with 1-2 past clients directly.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-6">🚩 Red Flag #7: Demands Full Payment Upfront</h2>
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3">Warning Signs:</h3>
                                <ul className="space-y-2 text-muted-foreground mb-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>"Pay 100% before I start"</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>No milestone-based payments</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Pressure to pay immediately</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Only accepts wire transfer or cryptocurrency</span>
                                    </li>
                                </ul>
                                <p className="text-white font-semibold">What to do instead:</p>
                                <p className="text-muted-foreground">Standard payment structure: 50% upfront, 50% on completion. Or milestone-based: 30% to start, 30% at design approval, 40% at launch.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-6">🚩 Red Flag #8: No Post-Launch Support</h2>
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3">Warning Signs:</h3>
                                <ul className="space-y-2 text-muted-foreground mb-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>"Once it's live, you're on your own"</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>No training on how to update content</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Charges extra for bug fixes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Disappears after final payment</span>
                                    </li>
                                </ul>
                                <p className="text-white font-semibold">What to do instead:</p>
                                <p className="text-muted-foreground">Look for developers offering 30-90 days of post-launch support, training documentation, and a clear process for handling issues.</p>
                            </div>
                        </section>

                        <section className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                            <h2 className="font-heading text-3xl font-bold mb-4">✅ Green Flags: What to Look For</h2>
                            <p className="text-muted-foreground mb-4">On the flip side, here's what a professional freelance web developer should have:</p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Professional portfolio with live website examples</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Clear, documented process from discovery to launch</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Responsive communication (within 24 hours)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Detailed contract and scope of work</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Client testimonials with specific results</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Fair pricing (not too cheap, not overpriced)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Milestone-based payment structure</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Post-launch support included</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span>Asks strategic questions about your business</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-4">Conclusion</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Hiring a freelance web developer is a significant investment. By watching for these red flags, you can avoid costly mistakes and find a professional who will deliver real results for your business.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Trust your instincts. If something feels off during the initial conversations, it probably is. A good developer will be transparent, professional, and focused on understanding your needs—not just making a quick sale.
                            </p>
                        </section>
                    </div>
                </div>

                <div className="mt-16 p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 text-center">
                    <h3 className="font-heading text-3xl font-bold mb-4">
                        Work With a Transparent, Professional Developer
                    </h3>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Clear process, fixed pricing, portfolio of real results, and 30-day post-launch support included. No red flags here.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-all hover:bg-white/90 hover:scale-105"
                    >
                        Let's Talk About Your Project
                    </Link>
                </div>
            </article>
        </div>
    );
}
