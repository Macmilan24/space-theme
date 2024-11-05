import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}

// https://github.com/Macmilan24/space-theme, here is the repo link just for now analysis this and tell me what you understand

// first thing i need you to do is update the hero i don't like the blackhole video so can you create something that will look cool like that follows the cursor type of thing
