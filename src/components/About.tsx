
"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function About() {
  const gymVibe = PlaceHolderImages.find(img => img.id === "gym-vibe");

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src={gymVibe?.imageUrl || "https://picsum.photos/seed/about/800/800"}
              alt="Muscle Prime 2121 Gym Culture"
              fill
              className="object-cover"
              data-ai-hint="indian gym"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="font-headline text-3xl font-black mb-2 uppercase">RESULTS DRIVEN</div>
              <p className="text-white/80">Transforming lives in Kalyan through discipline and elite training.</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-4xl md:text-5xl font-black leading-tight uppercase">
              ABOUT <span className="text-primary">MUSCLE PRIME</span> 2121
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We aren't just another gym; we are a premium fitness institution. Located in the heart of Kalyan, Muscle Prime 2121 is built on the foundation of grit, perseverance, and professional excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our space is designed for serious athletes and beginners alike, providing a cinematic workout environment that keeps you focused on your goal. Whether you're here to gain muscle, lose fat, or improve your athletic performance, we have the tools and expertise to make it happen.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <div className="text-primary font-black text-2xl mb-1 italic">TRANSFORMATION</div>
                <p className="text-sm text-muted-foreground">Tailored programs designed for real life-changing results.</p>
              </div>
              <div>
                <div className="text-primary font-black text-2xl mb-1 italic">ELITE GEAR</div>
                <p className="text-sm text-muted-foreground">Equipped with the finest machines for maximum efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
