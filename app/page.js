"use client";

import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleNavigateClick = () => {
    router.push("/shop");
    
  };
  const handleNavigateClickInfo = () => {
    router.push("/info#wo");
  };
  const handleNavigateClickInfoNew = () => {
    router.push("/info#neu");
  };
  
  return (
    <div>
      <Hero />

      
      
      <section
        className="
        text-red-600
        
        "
        >
          
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4
            
            py-12
            
          "
          >
            
            <FeatureCard
              title="Aktuelles"
              description="Neues aus meiner Welt"
              buttonText="Zum Thema"
              onClickHandler={handleNavigateClickInfoNew}
            />
  
            <FeatureCard
              title="Musik"
              description="Neue Tracks"
              buttonText="JETZT SHOPPEN"
              onClickHandler={handleNavigateClick}
            />
  
            <FeatureCard
              title="Kanäle"
              description="Wo du mich findest"
              buttonText="Suche"
              onClickHandler={handleNavigateClickInfo}
            />
  
            <FeatureCard
              title="Klamotten"
              description="Hier gehts zur Streetwear"
              buttonText="Merch"
              onClickHandler={handleNavigateClick}
            />
  
            <FeatureCard
              title="Lives"
              description="Wo bin ich wann Live"
              buttonText="Suche"
              onClickHandler={handleNavigateClickInfo}
            />
  
            <FeatureCard
              title="Termine"
              description="Auftritte und co"
              buttonText="Suche"
              onClickHandler={handleNavigateClickInfo}
            />
          </div>
        </section>
  
        <Footer />
      </div>
    );
  }
      
      
      
