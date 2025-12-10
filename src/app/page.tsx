import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rishi Ramandwal | Premium Portfolio Web Design",
  description: "I design high-converting portfolio websites for US & UK service professionals.",
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
