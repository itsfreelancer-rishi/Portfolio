"use client";

import Link from "next/link";
import { Mail, MessageSquare, Instagram, Linkedin } from "lucide-react";
import { Metadata } from "next";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const form = e.currentTarget;

        try {
            // Replace these with your actual EmailJS credentials
            await emailjs.sendForm(
                'service_a7hgiid',      // Replace with your Service ID
                'template_g9mce7i',     // Replace with your Template ID
                form,
                '0FH_xwBC7I-2Pm_7d'       // Replace with your Public Key
            );

            setSubmitStatus("success");
            form.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            <a href="mailto:contact@rishifreelancer.me" className="text-lg font-bold text-white hover:underline">contact@rishifreelancer.me</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                            <MessageSquare className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Follow my work</p>
                            <div className="flex gap-4 mt-1">
                                <Link href="https://www.instagram.com/itsfreelancer.rishi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors">
                                    <Instagram className="h-4 w-4" /> Instagram
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Form Side */}
            <div className="flex flex-col justify-center p-10 lg:p-20 bg-background">
                <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-foreground">First name</label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-4"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-foreground">Last name</label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    required
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-4"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">Email</label>
                        <div className="mt-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-4"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="budget" className="block text-sm font-medium leading-6 text-foreground">Budget Range</label>
                        <div className="mt-2">
                            <select
                                id="budget"
                                name="budget"
                                required
                                className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-4 [&>option]:bg-black"
                            >
                                <option value="">Select budget...</option>
                                <option value="$500 - $1,000">$500 - $1,000</option>
                                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                                <option value="$5,000+">$5,000+</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-foreground">Project Details</label>
                        <div className="mt-2">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-4"
                            ></textarea>
                        </div>
                    </div>

                    {submitStatus === "success" && (
                        <div className="rounded-md bg-green-500/10 p-4 border border-green-500/20">
                            <p className="text-sm text-green-400">✓ Message sent successfully! I'll get back to you soon.</p>
                        </div>
                    )}

                    {submitStatus === "error" && (
                        <div className="rounded-md bg-red-500/10 p-4 border border-red-500/20">
                            <p className="text-sm text-red-400">✗ Failed to send message. Please email me directly.</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="block w-full rounded-full bg-white px-3 py-3 text-center text-sm font-bold text-black shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Sending..." : "Send Application"}
                    </button>
                </form>
            </div>
        </div>
    );
}
