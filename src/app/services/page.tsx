import Link from "next/link";
import { Check, Clock, Zap, Shield, HelpCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services & Pricing - Freelance Web Developer | Rishi Ramandwal",
    description: "Professional web development services for service professionals. Fixed pricing starting at $550. Custom design, SEO optimization, and fast delivery.",
    keywords: ["web development services", "freelance web developer pricing", "portfolio website package", "custom website development"],
};

const benefits = [
    "Custom Design (No Templates)",
    "5-10 Page Strategy-Driven Structure",
    "Mobile Responsive & Lightning Fast",
    "SEO Optimization Included",
    "Contact Form Integration",
    "30-Day Post-Launch Support",
    "2 Rounds of Revisions",
    "Google Analytics Setup",
];

const process = [
    {
        step: "1",
        title: "Discovery Call",
        description: "We discuss your business goals, target audience, and project requirements. This free 30-minute call helps us ensure we're a good fit."
    },
    {
        step: "2",
        title: "Strategy & Planning",
        description: "I create a detailed project plan including sitemap, wireframes, and content strategy tailored to your business objectives."
    },
    {
        step: "3",
        title: "Design & Development",
        description: "Your custom website is designed and built using modern technologies. You'll receive regular updates throughout the 2-3 week timeline."
    },
    {
        step: "4",
        title: "Launch & Support",
        description: "We launch your site, provide training on managing content, and offer 30 days of post-launch support for any issues or questions."
    }
];

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer: "Most portfolio websites are completed within 2-3 weeks from the initial deposit. This timeline includes design, development, revisions, and launch. Rush projects can be accommodated for an additional fee."
    },
    {
        question: "Do you offer payment plans?",
        answer: "Yes! Standard payment structure is 50% upfront to start the project and 50% upon completion before launch. For projects over $2,000, we can discuss milestone-based payments."
    },
    {
        question: "What if I need changes after launch?",
        answer: "All packages include 30 days of post-launch support for bug fixes and minor adjustments. Major changes or new features can be quoted separately. I also offer monthly maintenance packages starting at $100/month."
    },
    {
        question: "Can you help with content and copywriting?",
        answer: "I provide content strategy and structure guidance, but you'll need to provide the actual text and images. If you need professional copywriting, I can recommend trusted partners or add it as an additional service."
    },
    {
        question: "Will I be able to update the website myself?",
        answer: "Absolutely! I build sites with user-friendly content management systems. You'll receive training and documentation on how to update text, images, and basic content. Technical updates can be handled through ongoing support."
    },
    {
        question: "Do you provide hosting?",
        answer: "I recommend and can set up hosting through Vercel (free for most sites) or other premium providers. Hosting costs are separate from the development fee and typically range from $0-$20/month depending on your needs."
    },
    {
        question: "What makes your service different from cheaper options?",
        answer: "Unlike template-based solutions or budget developers, I focus on strategy and conversion. Every element is designed to attract your ideal clients and drive results. You're not just getting a website—you're getting a strategic asset for your business."
    },
    {
        question: "Do you work with clients outside your timezone?",
        answer: "Yes! I work with clients globally, primarily in the US and UK markets. I'm flexible with meeting times and maintain clear communication throughout the project regardless of timezone differences."
    }
];

export default function ServicesPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading mb-6">
                        Professional Web Development Services
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        I specialize in building high-converting portfolio websites for service professionals who want to attract premium clients. No templates, no hourly billing—just transparent, fixed-price packages that deliver results.
                    </p>
                </div>

                {/* Why Choose Me Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12 font-heading">Why Work With Me?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                            <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                                <Zap className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                            <p className="text-muted-foreground">
                                Most projects completed in 2-3 weeks. No endless timelines or missed deadlines—just professional work delivered on schedule.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                            <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Fixed Pricing</h3>
                            <p className="text-muted-foreground">
                                Know exactly what you'll pay upfront. No hourly billing surprises, no hidden fees—just transparent, fair pricing.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                            <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
                            <p className="text-muted-foreground">
                                30 days of post-launch support included. I'm here to help with any questions or issues after your site goes live.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pricing Package */}
                <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-white/10 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none mb-20">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-foreground font-heading">The Premium Portfolio Package</h3>
                        <p className="mt-6 text-base leading-7 text-muted-foreground">
                            Everything you need to showcase your work and convert visitors into high-paying clients. Designed specifically for photographers, consultants, lawyers, and creative professionals who want to stand out from the competition.
                        </p>
                        <p className="mt-4 text-base leading-7 text-muted-foreground">
                            This isn't a template-based solution. Every website I build is custom-designed to reflect your brand, speak to your ideal clients, and drive conversions. You're not just getting a website—you're getting a strategic marketing asset.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-400">What's included</h4>
                            <div className="h-px flex-auto bg-white/10" />
                        </div>
                        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-foreground sm:grid-cols-2 sm:gap-6">
                            {benefits.map((benefit) => (
                                <li key={benefit} className="flex gap-x-3">
                                    <Check className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-white/5 py-10 text-center ring-1 ring-inset ring-white/10 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-muted-foreground">Starting Investment</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-foreground">$550</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">USD</span>
                                </p>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    Final price depends on project scope
                                </p>
                                <Link
                                    href="/contact"
                                    className="mt-10 block w-full rounded-full bg-white px-3 py-3 text-center text-sm font-semibold text-black shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all hover:scale-105"
                                >
                                    Get Your Free Quote
                                </Link>
                                <p className="mt-6 text-xs leading-5 text-muted-foreground">
                                    50% deposit required to start. Balance due before launch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12 font-heading">How We'll Work Together</h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {process.map((item) => (
                            <div key={item.step} className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center text-black font-bold text-lg">
                                        {item.step}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-heading mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Got questions? Here are answers to the most common questions I receive about my web development services.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                                <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                                    <HelpCircle className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                    {faq.question}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed pl-8">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                    <h2 className="font-heading text-3xl font-bold mb-4">
                        Ready to Elevate Your Online Presence?
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
