import { Metadata } from "next";
import Hero from "./(ui)/hero";

export const metadata: Metadata = {
  title: "Interior Design",
  description: "Transform Your Space",
};

export default function Home() {
  return <Hero />;
}
