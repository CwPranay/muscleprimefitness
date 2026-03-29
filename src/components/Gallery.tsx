
"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const galleryImages = [
  { id: "gallery-1", span: "md:col-span-2 md:row-span-2" },
  { id: "gallery-2", span: "md:col-span-1 md:row-span-1" },
  { id: "gallery-3", span: "md:col-span-1 md:row-span-1" },
  { id: "gallery-4", span: "md:col-span-1 md:row-span-2" },
  { id: "gallery-5", span: "md:col-span-1 md:row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-4 uppercase">VISUAL <span className="text-primary">GALLERY</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A glimpse inside the powerhouse of Kalyan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((item) => {
            const img = PlaceHolderImages.find(p => p.id === item.id);
            return (
              <div key={item.id} className={`relative overflow-hidden rounded-xl group ${item.span}`}>
                <Image
                  src={img?.imageUrl || "https://picsum.photos/seed/gallery/800/800"}
                  alt={img?.description || "Gym gallery image"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={img?.imageHint || "gym environment"}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-black text-xl tracking-widest uppercase">Muscle Prime</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
