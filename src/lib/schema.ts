export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rishi Ramandwal",
    "url": "https://www.rishifreelancer.me",
    "image": "https://www.rishifreelancer.me/profile.png",
    "sameAs": [
        "https://www.instagram.com/itsfreelancer.rishi",
        "https://my-website-delta-inky.vercel.app/"
    ],
    "jobTitle": "Freelance Web Developer",
    "worksFor": {
        "@type": "Organization",
        "name": "Rishi Ramandwal Freelance"
    },
    "description": "Freelance web developer specializing in high-converting portfolio websites for US & UK service professionals.",
    "email": "itsfreelancer.rishi@gmail.com",
    "knowsAbout": ["Web Development", "Web Design", "Portfolio Websites", "Conversion Optimization", "Next.js", "React"],
    "offers": {
        "@type": "Offer",
        "itemOffered": {
            "@type": "Service",
            "name": "Premium Portfolio Website Design",
            "description": "Custom portfolio website design and development for service professionals",
            "provider": {
                "@type": "Person",
                "name": "Rishi Ramandwal"
            }
        },
        "price": "550",
        "priceCurrency": "USD"
    }
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rishi Ramandwal Portfolio",
    "url": "https://www.rishifreelancer.me",
    "description": "Premium web design portfolio showcasing high-converting websites for service professionals",
    "author": {
        "@type": "Person",
        "name": "Rishi Ramandwal"
    }
};
