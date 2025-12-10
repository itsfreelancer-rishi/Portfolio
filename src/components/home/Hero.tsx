import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 pt-20 pb-16 md:pt-32">
            <GridBackground />

            <div className="mx-auto max-w-4xl text-center">
                <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                    Stop Underselling <br className="hidden md:block" />
                    <span className="text-muted-foreground">Your Expertise.</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                    I design high-converting portfolio websites for US & UK service professionals who want to filter out low-budget leads and close $5k+ deals.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/contact"
                        className="group inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-all hover:bg-white/90 hover:scale-105"
                    >
                        Start Your Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/work"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-base font-medium text-white transition-colors hover:bg-white/10"
                    >
                        View My Work
                    </Link>
                </div>
            </div>
        </section>
    );
}
