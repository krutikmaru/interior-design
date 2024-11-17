import Marquee from "@/components/ui/marquee";

export default function TrustedBy() {
  return (
    <div className=" flex flex-col items-center justify-start">
      <span className="text-lg text-label-primary">Trusted by</span>

      <div className="relative flex h-[100px] overflow-hidden w-full items-center justify-center">
        <Marquee className="text-white text-5xl ">
          <div className="mr-16">ABC</div>
          <div className="mr-16">DEF</div>
          <div className="mr-16">GHI</div>
          <div className="mr-16">KJL</div>
          <div className="mr-16">MNO</div>
          <div className="mr-16">PQR</div>
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 bottom-0 w-full h-[400px] bg-gradient-to-t from-black"></div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
      </div>
    </div>
  );
}
