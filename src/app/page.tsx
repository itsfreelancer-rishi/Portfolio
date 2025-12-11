import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Web Developer | High-Converting Portfolio Websites | Rishi Ramandwal",
  description: "Expert freelance web developer specializing in high-converting portfolio websites for photographers, lawyers, and service professionals. Get a premium website that attracts $5k+ clients. Based in India, serving US & UK markets.",
  keywords: [
    "freelance web developer",
    "freelance website designer",
    "portfolio website developer",
    "hire web developer",
    "freelance web designer",
    "website developer for hire",
    "custom website developer",
    "professional web developer",
    "conversion-focused web design",
    "high-ticket web design"
  ],
};

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <FeaturedWork />
    </>
  );
}
