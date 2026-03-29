
"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Rahul S.",
    text: "Clean space, good crowd, great workout environment. The vibe here is unmatched compared to other gyms in Kalyan.",
    rating: 5
  },
  {
    name: "Priya M.",
    text: "Friendly trainers and well-maintained machines. They actually take the time to correct your form.",
    rating: 5
  },
  {
    name: "Amit K.",
    text: "Good results with consistent training. The Standard plan is worth every penny for the quality equipment we get.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-black mb-4 uppercase">WHAT OUR <span className="text-primary">MEMBERS</span> SAY</h2>
        <div className="flex items-center justify-center gap-1 mb-12">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
          <span className="ml-2 font-bold">4.6/5 GOOGLE RATING</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.name} className="bg-background border-border relative pt-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <CardContent>
                <div className="flex justify-center gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">"{review.text}"</p>
                <div className="font-headline font-bold uppercase tracking-widest">{review.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
