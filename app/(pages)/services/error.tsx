"use client"; // Error boundaries must be Client Components

import Button from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="pt-[64px] w-full h-screen flex justify-center items-center text-white flex-col space-y-6">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h3 className="text-2xl tracking-[-0.04em] text-white">
          Something went wrong!
        </h3>
        <p className="text-label-primary tracking-[-0.04em] text-base">
          Try contacting the owner if the problem persists.
        </p>
      </div>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
