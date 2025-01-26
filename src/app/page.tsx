import Image from "next/image";
import { CountdownTimer } from "./components/CountdownTimer";
import { EmailCaptureForm } from "./components/EmailCaptureForm";
import { VeepLogo } from "./components/VeepLogo";

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center flex-col items-center">
        <h1 className="sr-only">The Creator Clash 3</h1>
        <Image
          src="/logo.png"
          width={800}
          height={630}
          alt="Creator Clash 3 Banner"
        />
        <CountdownTimer />

        <EmailCaptureForm />
      </main>
      <footer className="flex flex-wrap items-center justify-center pt-8 md:pt-12">
        <div className="glassmorphism flex md:flex-row flex-col-reverse justify-center items-center gap-6 p-6 rounded-lg max-w-md">
          <div className="flex flex-col items-center gap-4">
            <VeepLogo />
          </div>
          <Image
            src="/live-nation.png"
            alt="live nation logo"
            width={230}
            height={200}
          />
        </div>
      </footer>
    </div>
  );
}
