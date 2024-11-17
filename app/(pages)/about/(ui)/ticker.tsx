import Marquee from "@/components/ui/marquee";
import Image from "next/image";

export default function Ticker() {
  return (
    <div className="relative flex h-[500px] overflow-hidden w-full items-center justify-center">
      <Marquee className="overflow-visible -space-x-10">
        <div className="pb-[100px] -rotate-6 overflow-hidden">
          <div className="w-[250px] h-[300px] relative">
            <Image
              fill
              src={"/images/general/1.jpg"}
              alt="1"
              className="object-fill rounded-xl "
            />
          </div>
        </div>
        <div className="rotate-[15deg]  overflow-hidden">
          <div className="w-[200px] h-[300px] relative">
            <Image
              fill
              src={"/images/general/2.jpg"}
              alt="1"
              className="object-fill rounded-xl"
            />
          </div>
        </div>
        <div className="rotate-[-5deg] pb-11  overflow-hidden">
          <div className="w-[200px] h-[300px] relative">
            <Image
              fill
              src={"/images/general/3.jpg"}
              alt="1"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="rotate-[10deg] pb-[100px]  overflow-hidden">
          <div className="w-[290px] h-[300px] relative">
            <Image
              fill
              src={"/images/general/4.jpg"}
              alt="1"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="rotate-[-5deg] pb-11  overflow-hidden">
          <div className="w-[200px] h-[300px] relative">
            <Image
              fill
              src={"/images/general/5.jpg"}
              alt="1"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="rotate-[15deg] pb-11 overflow-hidden">
          <div className="w-[200px] h-[300px] relative">
            <Image
              fill
              src={"/images/general/6.jpg"}
              alt="1"
              className="object-fill rounded-xl"
            />
          </div>
        </div>
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 bottom-0 w-full h-[400px] bg-gradient-to-t from-black"></div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
}
