import Link from "next/link";
import { Mail, MessageSquare, Instagram, Linkedin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Start a Project | Sumit",
    description: "Ready to upgrade your online presence? Book a discovery call today.",
};

export default function ContactPage() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            {/* Left Data Side */}
            <div className="flex flex-col justify-center p-10 lg:p-20 bg-muted/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
                <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl mb-6">
                    Let's build your <br />
                    <span className="text-indigo-400">new website.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-12 max-w-md">
                    I'm currently accepting new projects for Q1 2026.
                    Fill out the form to book a free discovery call.
                </p>

                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                            <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Email me at</p>
                            <a href="mailto:itsfreelancer.rishi@gmail.com" className="text-lg font-bold text-white hover:underline">itsfreelancer.rishi@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                            <MessageSquare className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Follow my work</p>
                            <div className="flex gap-4 mt-1">
                                <Link href="#" className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors">
                                    <Instagram className="h-4 w-4" /> Instagram
                                </Link>
                                <Link href="#" className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors">
                                    <Linkedin className="h-4 w-4" /> LinkedIn
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Form Side */}
            <div className="flex flex-col justify-center p-10 lg:p-20 bg-background">
                <form className="max-w-md w-full mx-auto space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-foreground">First name</label>
                            <div className="mt-2">
                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-4" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-foreground">Last name</label>
                            <div className="mt-2">
                                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-4" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">Email</label>
                        <div className="mt-2">
                            <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-4" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="budget" className="block text-sm font-medium leading-6 text-foreground">Budget Range</label>
                        <div className="mt-2">
                            <select id="budget" name="budget" className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-4 [&>option]:bg-black">
                                <option>$500 - $1,000</option>
                                <option>$1,000 - $3,000</option>
                                <option>$3,000 - $5,000</option>
                                <option>$5,000+</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-foreground">Project Details</label>
                        <div className="mt-2">
                            <textarea id="message" name="message" rows={4} className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-4"></textarea>
                        </div>
                    </div>

                    <button type="submit" className="block w-full rounded-full bg-white px-3 py-3 text-center text-sm font-bold text-black shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all">
                        Send Application
                    </button>
                </form>
            </div>
        </div>
    );
}
