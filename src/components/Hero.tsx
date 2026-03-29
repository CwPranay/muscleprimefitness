"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || "https://picsum.photos/seed/hero/1920/1080"}
          alt="Muscle Prime Fitness Interior"
          fill
          className="object-cover scale-105"
          priority
          data-ai-hint="dark gym"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <div className="inline-block px-4 py-1 mb-6 border-l-4 border-primary bg-primary/10 animate-in fade-in slide-in-from-left-4 duration-700">
          <span className="text-sm font-black text-primary tracking-[0.2em] uppercase italic">
            ELITE FITNESS KALYAN
          </span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black mb-6 leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-1000 italic">
          RAISE THE <br />
          <span className="text-primary text-neon-yellow">
            STANDARD
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-10 font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          No gimmicks. No shortcuts. Just pure results at Kalyan's most powerful fitness hub. 
          Join the elite at Muscle Prime Fitness.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <Button asChild size="lg" className="h-16 px-10 text-xl font-black italic bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto rounded-none skew-x-[-12deg]">
            <a href="https://wa.me/919100462121" target="_blank" rel="noopener noreferrer" className="block skew-x-[12deg]">
              <div className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-3" />
                START TRAINING
              </div>
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-16 px-10 text-xl font-black italic border-2 border-white/20 bg-transparent hover:bg-white/10 w-full sm:w-auto rounded-none skew-x-[-12deg]">
            <a href="tel:9100462121" className="block skew-x-[12deg]">
               <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                ENQUIRE NOW
              </div>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
