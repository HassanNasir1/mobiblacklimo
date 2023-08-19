import { Hero } from "../components/Hero";
import { Quote } from "../components/Quote";
import { Features } from "../components/Features";
import { FeaturedVehicles } from "../components/FeaturedVehicles";
import { Faqs } from "../components/Faqs";
import { GetRewards } from "../components/GetRewards";
import { ScrollRestoration } from "react-router-dom";
import TailwindHero from "../components/TailwindHero";
import TailwindFaqs from "../components/TailwindFaqs";
import Slider from "../components/slider";
import Form1 from "../components/Form1";

export function Home() {
  return (
    <>
      <ScrollRestoration />
      {/* <Hero /> */}
      <TailwindHero />
      <Slider />
      <Form1 />
      <Features />

      {/* <Quote /> */}
      {/* <FeaturedVehicles /> */}
      {/* <GetRewards /> */}
      {/* <TailwindFaqs /> */}
      {/* <Faqs></Faqs> */}
    </>
  );
}
