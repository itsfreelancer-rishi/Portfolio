import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-6 md:flex-row lg:px-8">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Rishi Ramandwal. Design tailored for conversion.
                </p>
                <div className="flex gap-6">
                    <Link href="https://www.instagram.com/itsfreelancer.rishi" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-white transition-colors">
                        Instagram
                    </Link>
                    <Link href="mailto:itsfreelancer.rishi@gmail.com" className="text-sm text-muted-foreground hover:text-white transition-colors">
                        Email
                    </Link>
                </div>
            </div>
        </footer>
    );
}
