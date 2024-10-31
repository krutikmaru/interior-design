import { Metadata } from "next";
import Hero from "./(ui)/hero";
import Offering from "./(ui)/offering";
import ScrollVideo from "./(ui)/scroll-video";
import Announcement from "./(ui)/announcement";

export const metadata: Metadata = {
  title: "Interior Design",
  description: "Transform Your Space",
};

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center">
      <Hero />
      <ScrollVideo />
      <Offering />
      <Announcement />
    </div>
  );
}
