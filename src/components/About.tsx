"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function About() {
  const gymVibe = PlaceHolderImages.find(img => img.id === "gym-vibe");

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden border-4 border-primary/20 shadow-2xl">
            <Image
              src={gymVibe?.imageUrl || "https://picsum.photos/seed/about/800/800"}
              alt="Muscle Prime Fitness Atmosphere"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              data-ai-hint="fitness training"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-1 font-black italic skew-x-[-10deg]">
              EST. 2021
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-primary font-black tracking-widest uppercase italic text-sm">THE LEGACY</span>
              <h2 className="text-5xl md:text-6xl font-black leading-[0.9] uppercase italic">
                ABOUT <span className="text-primary">MUSCLE PRIME</span> FITNESS
              </h2>
            </div>
            
            <p className="text-xl text-white/60 font-medium leading-relaxed italic border-l-4 border-primary pl-6">
              Muscle Prime Fitness is not just a gym. It's a high-performance training facility built for those who demand more from themselves.
            </p>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Located in Kalyan West, our facility features elite strength equipment, a massive free-weight area, and a high-energy environment that forces you to push past your limits.
              </p>
              <p>
                Our philosophy is simple: **Results over everything**. Whether you are looking for personal training, functional strength, or total transformation, we provide the tools and the atmosphere to make it a reality.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="p-4 bg-background border border-primary/20">
                <div className="text-primary font-black text-3xl italic">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Dedication</div>
              </div>
              <div className="p-4 bg-background border border-primary/20">
                <div className="text-primary font-black text-3xl italic">ELITE</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Standard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
