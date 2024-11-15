export default function NotFound() {
  return (
    <div className="pt-[64px] w-full h-screen flex justify-center items-center text-white flex-col space-y-6">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h3 className="text-2xl tracking-[-0.04em] text-white">
          404 - Page Not Found
        </h3>
        <p className="text-label-primary tracking-[-0.04em] text-base">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    </div>
  );
}
