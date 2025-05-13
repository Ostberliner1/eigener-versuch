"use client";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";


export default function Home() {
  const router=useRouter();
  const handleNavigateClick = () => {
    router.push("/shop");
  };
  return (
    <div>
      <Hero />
      <section className="
      
      
     
      text-red-600
      
      ">

        <div className="
          grid
          grid-cols-3
          gap-4
          p-4
          py-12
          
        ">
          <FeatureCard 
            title="Aktuelles"
            description="Neues aus meiner Welt"><Button buttonText="JETZT SHOPPEN" oncklickHandler={handleNavigateClick} /></FeatureCard>

          <FeatureCard 
            title="Musik"
            description="Neue Tracks" />

          <FeatureCard 
            title="Kanäle"
            description="Wo du mich findest" />
            
          <FeatureCard 
            title="Klamotten"
            description="Hier gehts zur Streetwear" />

          <FeatureCard 
            title="Lives"
            description="Wo bin ich wann Live" />

          <FeatureCard 
            title="Termine"
            description="Auftritte und co" />
        </div>

      </section>

      <Footer />


    </div>
    
    
  );
}
