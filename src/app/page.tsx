import Image from "next/image";
import Hero from "@/components/hero";
import Featuredcourses from "@/components/featuredcourses";
import Whychooseasection from "@/components/whychooseasection";
export default function Home() {
  return (
    <>
     <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]">
      <Hero/>
      <Featuredcourses/>
      <Whychooseasection/>
     </main>
    </>
  );
}
