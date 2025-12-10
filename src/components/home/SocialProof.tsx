export function SocialProof() {
    // Placeholders for logos
    const companies = [
        "TechStart",
        "LegalEdge",
        "Studio 44",
        "CleanCo",
        "Vertex",
    ];

    return (
        <section className="border-y border-white/5 py-12 bg-black/50">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">
                    Trusted by premium businesses in US, UK & Europe
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                    {companies.map((name) => (
                        <span key={name} className="text-xl font-bold text-white/40 font-heading">
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
