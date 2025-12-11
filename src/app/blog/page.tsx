import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog - Web Development Tips & Insights | Rishi Ramandwal",
    description: "Expert insights on web development, portfolio design, and attracting high-paying clients. Learn from a professional freelance web developer.",
};

const blogPosts = [
    {
        title: "How to Choose the Right Freelance Web Developer for Your Business",
        slug: "choose-freelance-web-developer",
        excerpt: "A comprehensive guide to finding and hiring the perfect web developer for your portfolio website project.",
        date: "December 2024",
        category: "Hiring Guide"
    },
    {
        title: "5 Mistakes Service Professionals Make on Their Websites",
        slug: "website-mistakes-service-professionals",
        excerpt: "Avoid these common pitfalls that are costing you high-paying clients and learn how to fix them.",
        date: "December 2024",
        category: "Web Design"
    },
    {
        title: "Portfolio Website Cost: What to Expect When Hiring a Developer",
        slug: "portfolio-website-cost-guide",
        excerpt: "Transparent breakdown of portfolio website pricing and what you should expect to pay for quality work.",
        date: "December 2024",
        category: "Pricing"
    },
];

export default function BlogPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                        Web Development Insights
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Expert tips on building high-converting websites and growing your service business online.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl space-y-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.slug}
                            className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-sm font-medium text-indigo-400">{post.category}</span>
                                <span className="text-sm text-muted-foreground">{post.date}</span>
                            </div>
                            <h2 className="font-heading text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                {post.excerpt}
                            </p>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center text-white font-medium hover:underline underline-offset-4"
                            >
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Coming Soon Notice */}
                <div className="mt-16 text-center p-8 rounded-2xl border border-white/10 bg-white/5">
                    <p className="text-muted-foreground">
                        More articles coming soon! Subscribe to my newsletter to get notified.
                    </p>
                </div>
            </div>
        </div>
    );
}
