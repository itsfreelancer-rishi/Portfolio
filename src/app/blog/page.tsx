import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";

export const metadata: Metadata = {
    title: "Blog - Web Development Tips & Insights | Rishi Ramandwal",
    description: "Expert insights on web development, portfolio design, and attracting high-paying clients. Learn from a professional freelance web developer.",
};

const blogPosts = [
    {
        title: "How to Choose the Right Freelance Web Developer for Your Business",
        slug: "choose-freelance-web-developer",
        excerpt: "A comprehensive guide to finding and hiring the perfect web developer for your portfolio website project. Learn what to look for, red flags to avoid, and how to ensure quality work.",
        date: "December 11, 2024",
        category: "Hiring Guide",
        readTime: "8 min read"
    },
    {
        title: "5 Mistakes Service Professionals Make on Their Websites",
        slug: "website-mistakes-service-professionals",
        excerpt: "Avoid these common pitfalls that are costing you high-paying clients. From poor messaging to confusing navigation, learn how to fix them.",
        date: "Coming Soon",
        category: "Web Design",
        readTime: "6 min read"
    },
    {
        title: "Portfolio Website Cost: What to Expect When Hiring a Developer",
        slug: "portfolio-website-cost-guide",
        excerpt: "Transparent breakdown of portfolio website pricing and what you should expect to pay for quality work. Understand the difference between budget, mid-range, and premium options.",
        date: "Coming Soon",
        category: "Pricing",
        readTime: "7 min read"
    },
];

export default function BlogPage() {
    return (
        <div className="relative py-24 sm:py-32">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center mb-20">
                    <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                        Web Development <br />
                        <span className="text-indigo-400">Insights</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Expert tips on building high-converting websites and growing your service business online.
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 gap-8">
                        {blogPosts.map((post, index) => (
                            <Link
                                key={post.slug}
                                href={post.slug === "choose-freelance-web-developer" ? `/blog/${post.slug}` : "#"}
                                className="group"
                            >
                                <article className="relative p-8 md:p-10 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative">
                                        {/* Meta info */}
                                        <div className="flex flex-wrap items-center gap-4 mb-4">
                                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm font-medium text-indigo-400">
                                                <Tag className="h-3 w-3" />
                                                {post.category}
                                            </span>
                                            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                                                <Calendar className="h-4 w-4" />
                                                {post.date}
                                            </span>
                                            <span className="text-sm text-muted-foreground">
                                                {post.readTime}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                                            {post.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        {/* Read more */}
                                        <div className="inline-flex items-center text-white font-medium group-hover:text-indigo-400 transition-colors">
                                            Read Article
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Newsletter CTA */}
                <div className="mt-20 mx-auto max-w-3xl">
                    <div className="relative p-10 md:p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
                        <div className="relative">
                            <h3 className="font-heading text-3xl font-bold mb-4">
                                Get Web Development Tips
                            </h3>
                            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                                Join my newsletter for exclusive insights on building high-converting websites and attracting premium clients.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-all hover:bg-white/90 hover:scale-105"
                            >
                                Subscribe Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
