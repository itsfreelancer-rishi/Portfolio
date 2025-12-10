import Link from "next/link";
import { Check } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services & Pricing | Sumit",
    description: "Transparent pricing for high-ticket portfolio websites. Packages start at $550.",
};

const benefits = [
    "Custom Design (No Templates)",
    "5-Page Strategy-Driven Structure",
    "Mobile Responsive & Fast",
    "Basic SEO Setup",
    "CMS Integration (Sanity/Contentful)",
    "1 Round of Revisions",
];

export default function ServicesPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        I work with a flat-rate package so you know exactly what you're paying.
                        No hidden fees, no hourly billing surprises.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-white/10 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-foreground font-heading">The Premium Portfolio Package</h3>
                        <p className="mt-6 text-base leading-7 text-muted-foreground">
                            Everything you need to showcase your work and convert visitors into high-paying clients.
                            Designed for photographers, consultants, and creative agencies.
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
                                <p className="text-base font-semibold text-muted-foreground">Investment</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-foreground">$550</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">USD</span>
                                </p>
                                <Link
                                    href="/contact"
                                    className="mt-10 block w-full rounded-full bg-white px-3 py-3 text-center text-sm font-semibold text-black shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Book Your Slot
                                </Link>
                                <p className="mt-6 text-xs leading-5 text-muted-foreground">
                                    50% deposit required to start.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
