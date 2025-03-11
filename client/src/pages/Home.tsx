import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { VoiceToText } from "@/components/landing/VoiceToText";
import { WaitlistForm } from "@/components/landing/WaitlistForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WaitlistForm />
        <Features />
        <VoiceToText />
      </main>
    </div>
  );
}