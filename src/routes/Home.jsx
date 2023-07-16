import { Hero } from "../components/Hero";
import { Quote } from "../components/Quote";
import { Features } from "../components/Features";
import { FeaturedVehicles } from "../components/FeaturedVehicles";
import { Faqs } from "../components/Faqs";
import { GetRewards } from "../components/GetRewards";
import { ScrollRestoration } from "react-router-dom";
import TailwindHero from "../components/TailwindHero";
import TailwindFaqs from "../components/TailwindFaqs";

export function Home() {
  return (
    <>
      <ScrollRestoration />
      {/* <Hero /> */}
      <TailwindHero />
      {/* <Quote /> */}
      <FeaturedVehicles />
      {/* <GetRewards /> */}
      <TailwindFaqs />
      <Features />
      {/* <Faqs></Faqs> */}
    </>
  );
}
