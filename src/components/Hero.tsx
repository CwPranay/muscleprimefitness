
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
          alt="Gym interior background"
          fill
          className="object-cover"
          priority
          data-ai-hint="gym interior"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Premium Fitness Kalyan
          </span>
        </div>
        
        <h1 className="font-headline text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-1000">
          BE STRONGER <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-pulse">
            THAN YOUR EXCUSES
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Train at Muscle Prime 2121 – Premium Fitness Experience in Kalyan. 
          Expert training, world-class equipment, and a community that pushes you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <Button asChild size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 w-full sm:w-auto">
            <a href="https://wa.me/919100462121" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="w-5 h-5 mr-2" />
              JOIN NOW
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-white/20 bg-white/5 hover:bg-white/10 w-full sm:w-auto">
            <a href="tel:9100462121">
              <Phone className="w-5 h-5 mr-2" />
              CALL NOW
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
