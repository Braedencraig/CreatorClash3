import Image from "next/image";
import { CountdownTimer } from "./components/CountdownTimer";
import { EmailCaptureForm } from "./components/EmailCaptureForm";

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
    </div>
  );
}
