import Link from "next/link";
import { Mail, Instagram, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                {/* Top Section - CTA */}
                <div className="mb-16 text-center">
                    <h3 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                        Ready to Elevate Your Brand?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's create a portfolio that converts visitors into high-paying clients.
                    </p>
                    <Link
                        href="/contact"
                        className="group inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-all hover:bg-white/90 hover:scale-105"
                    >
                        Start Your Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Middle Section - Navigation */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 mb-12 pb-12 border-b border-white/10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h4 className="font-heading text-xl font-bold text-white mb-4">
                            Rishi Ramandwal
                        </h4>
                        <p className="text-sm text-muted-foreground max-w-md">
                            Freelance web developer specializing in high-converting portfolio websites for service professionals.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Navigation
                        </h5>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/work" className="text-sm text-muted-foreground hover:text-white transition-colors">
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-sm text-muted-foreground hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-muted-foreground hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Connect
                        </h5>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:itsfreelancer.rishi@gmail.com"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
                                >
                                    <Mail className="h-4 w-4" />
                                    Email
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/itsfreelancer.rishi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
                                >
                                    <Instagram className="h-4 w-4" />
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Rishi Ramandwal. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
