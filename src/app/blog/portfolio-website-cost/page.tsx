import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
    title: "Portfolio Website Cost: What You Should Expect to Pay in 2026",
    description: "Complete breakdown of portfolio website costs. Learn what affects pricing, what's included at each price point, and how to budget for your professional website.",
    keywords: ["portfolio website cost", "website pricing", "portfolio site price", "how much does a website cost", "website development cost"],
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
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm font-medium text-indigo-400">
                            <Tag className="h-3 w-3" />
                            Pricing
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            December 11, 2024
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            9 min read
                        </span>
                    </div>

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                        Portfolio Website Cost: What You Should Expect to Pay in 2026
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        A transparent breakdown of portfolio website costs, from DIY options to premium custom development, and what you get at each price point.
                    </p>
                </header>

                <div className="prose prose-invert prose-lg max-w-none">
                    <div className="space-y-8">
                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-4">The Real Cost of a Portfolio Website</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                "How much does a portfolio website cost?" is one of the most common questions I get. The answer? It depends on what you need and the value you expect to get from it.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                In this guide, I'll break down the actual costs at each tier, what's included, and help you determine which option is right for your business.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h2 className="font-heading text-3xl font-bold mb-6">Portfolio Website Cost Breakdown</h2>

                            <div className="space-y-6">
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">DIY / Template</h3>
                                            <p className="text-muted-foreground">Wix, Squarespace, WordPress themes</p>
                                        </div>
                                        <span className="text-2xl font-bold text-indigo-400">$0-$300</span>
                                    </div>

                                    <div className="space-y-3 mb-4">
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>Cheapest option upfront</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>Quick to set up (1-2 days)</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-red-400 mt-1">✗</span>
                                            <span>Generic design, looks like everyone else</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-red-400 mt-1">✗</span>
                                            <span>Limited customization and features</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-red-400 mt-1">✗</span>
                                            <span>Ongoing monthly fees ($15-$50/month)</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-red-400 mt-1">✗</span>
                                            <span>Poor SEO and conversion optimization</span>
                                        </p>
                                    </div>

                                    <p className="text-sm text-yellow-400 italic">Best for: Hobbyists or those testing an idea</p>
                                </div>

                                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">Budget Freelancer</h3>
                                            <p className="text-muted-foreground">Entry-level developers, offshore teams</p>
                                        </div>
                                        <span className="text-2xl font-bold text-indigo-400">$300-$800</span>
                                    </div>

                                    <div className="space-y-3 mb-4">
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>More affordable than agencies</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>Some customization possible</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-red-400 mt-1">✗</span>
                                            <span>Often template-based with minor tweaks</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-red-400 mt-1">✗</span>
                                            <span>Communication challenges</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-red-400 mt-1">✗</span>
                                            <span>Limited strategy or business understanding</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-red-400 mt-1">✗</span>
                                            <span>May disappear after project completion</span>
                                        </p>
                                    </div>

                                    <p className="text-sm text-yellow-400 italic">Best for: Very tight budgets, simple needs</p>
                                </div>

                                <div className="p-6 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2 text-indigo-400">Professional Freelancer</h3>
                                            <p className="text-muted-foreground">Experienced developer with proven track record</p>
                                        </div>
                                        <span className="text-2xl font-bold text-indigo-400">$1,000-$3,500</span>
                                    </div>

                                    <div className="space-y-3 mb-4">
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>Custom design tailored to your brand</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>Strategic approach to conversion</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>SEO optimization included</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>Mobile-responsive, fast loading</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>Clear communication and process</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>Post-launch support (30 days)</span>
                                        </p>
                                    </div>

                                    <p className="text-sm text-green-400 italic">Best for: Service professionals who want to attract premium clients</p>
                                </div>

                                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">Agency</h3>
                                            <p className="text-muted-foreground">Full-service web design agency</p>
                                        </div>
                                        <span className="text-2xl font-bold text-indigo-400">$5,000-$20,000+</span>
                                    </div>

                                    <div className="space-y-3 mb-4">
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>Full team (designer, developer, strategist)</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>Comprehensive branding and strategy</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>Advanced features and integrations</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-red-400 mt-1">✗</span>
                                            <span>Highest cost option</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-red-400 mt-1">✗</span>
                                            <span>Longer timelines (2-4 months)</span>
                                        </p>
                                        <p className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-red-400 mt-1">✗</span>
                                            <span>Often overkill for portfolio sites</span>
                                        </p>
                                    </div>

                                    <p className="text-sm text-yellow-400 italic">Best for: Large businesses, complex projects, enterprise needs</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-4">What's Included at Each Price Point?</h2>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="py-4 pr-4 text-sm font-semibold">Feature</th>
                                            <th className="py-4 px-4 text-sm font-semibold text-center">DIY</th>
                                            <th className="py-4 px-4 text-sm font-semibold text-center">Budget</th>
                                            <th className="py-4 px-4 text-sm font-semibold text-center bg-indigo-500/10">Professional</th>
                                            <th className="py-4 pl-4 text-sm font-semibold text-center">Agency</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-muted-foreground">
                                        <tr className="border-b border-white/10">
                                            <td className="py-3 pr-4">Custom Design</td>
                                            <td className="py-3 px-4 text-center">❌</td>
                                            <td className="py-3 px-4 text-center">⚠️</td>
                                            <td className="py-3 px-4 text-center bg-indigo-500/5">✅</td>
                                            <td className="py-3 pl-4 text-center">✅</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="py-3 pr-4">Mobile Responsive</td>
                                            <td className="py-3 px-4 text-center">✅</td>
                                            <td className="py-3 px-4 text-center">✅</td>
                                            <td className="py-3 px-4 text-center bg-indigo-500/5">✅</td>
                                            <td className="py-3 pl-4 text-center">✅</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="py-3 pr-4">SEO Optimization</td>
                                            <td className="py-3 px-4 text-center">⚠️</td>
                                            <td className="py-3 px-4 text-center">⚠️</td>
                                            <td className="py-3 px-4 text-center bg-indigo-500/5">✅</td>
                                            <td className="py-3 pl-4 text-center">✅</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="py-3 pr-4">Conversion Strategy</td>
                                            <td className="py-3 px-4 text-center">❌</td>
                                            <td className="py-3 px-4 text-center">❌</td>
                                            <td className="py-3 px-4 text-center bg-indigo-500/5">✅</td>
                                            <td className="py-3 pl-4 text-center">✅</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="py-3 pr-4">Content Strategy</td>
                                            <td className="py-3 px-4 text-center">❌</td>
                                            <td className="py-3 px-4 text-center">❌</td>
                                            <td className="py-3 px-4 text-center bg-indigo-500/5">⚠️</td>
                                            <td className="py-3 pl-4 text-center">✅</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="py-3 pr-4">Post-Launch Support</td>
                                            <td className="py-3 px-4 text-center">❌</td>
                                            <td className="py-3 px-4 text-center">❌</td>
                                            <td className="py-3 px-4 text-center bg-indigo-500/5">30 days</td>
                                            <td className="py-3 pl-4 text-center">90 days</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 pr-4">Timeline</td>
                                            <td className="py-3 px-4 text-center">1-2 days</td>
                                            <td className="py-3 px-4 text-center">1-2 weeks</td>
                                            <td className="py-3 px-4 text-center bg-indigo-500/5">2-3 weeks</td>
                                            <td className="py-3 pl-4 text-center">2-4 months</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h2 className="font-heading text-3xl font-bold mb-4">Hidden Costs to Consider</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Domain Name: $10-$20/year</h3>
                                    <p>Your website address (e.g., yourname.com)</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Hosting: $5-$50/month</h3>
                                    <p>Where your website files are stored. Premium hosting = faster speeds.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">SSL Certificate: $0-$100/year</h3>
                                    <p>Security certificate (often included with hosting)</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Email: $5-$15/month</h3>
                                    <p>Professional email address (you@yourdomain.com)</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Maintenance: $50-$200/month</h3>
                                    <p>Updates, backups, security monitoring (optional but recommended)</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-4">How to Choose the Right Option</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p className="leading-relaxed">
                                    <strong className="text-white">Choose DIY if:</strong> You're just starting out, have no budget, and don't mind a generic look.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-white">Choose Budget Freelancer if:</strong> You have very limited funds and just need something basic online.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-white">Choose Professional Freelancer if:</strong> You're a service professional who wants to attract high-paying clients and need a website that converts.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-white">Choose Agency if:</strong> You're a large business with a substantial budget and need comprehensive branding and strategy.
                                </p>
                            </div>
                        </section>

                        <section className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                            <h2 className="font-heading text-3xl font-bold mb-4">💡 Pro Tip: Think ROI, Not Just Cost</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                A $2,500 website that brings in 5 new clients at $5,000 each = $25,000 revenue. That's a 10x return on investment.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                A $300 website that brings in zero clients = $300 wasted.
                            </p>
                            <p className="text-white font-semibold mt-4">
                                Your website is an investment, not an expense. Choose based on the value it will create for your business.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-heading text-3xl font-bold mb-4">Conclusion</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Portfolio website costs range from $0 (DIY) to $20,000+ (agency). For most service professionals, a professional freelancer in the $1,000-$3,500 range offers the best balance of quality, customization, and ROI.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Remember: your website is often the first impression potential clients have of your business. Invest accordingly.
                            </p>
                        </section>
                    </div>
                </div>

                <div className="mt-16 p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 text-center">
                    <h3 className="font-heading text-3xl font-bold mb-4">
                        Get a Professional Portfolio Website
                    </h3>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Fixed pricing starting at $550. Custom design, SEO optimization, and 30-day support included.
                    </p>
                    <Link
                        href="/services"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-all hover:bg-white/90 hover:scale-105"
                    >
                        View Packages
                    </Link>
                </div>
            </article>
        </div>
    );
}
