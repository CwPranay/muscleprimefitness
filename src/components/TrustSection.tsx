
"use client";

import React from "react";
import { Star, Award, Shield, Users } from "lucide-react";

const stats = [
  { label: "Happy Members", value: "185+", icon: Users },
  { label: "Google Rating", value: "4.6 ⭐", icon: Star },
  { label: "Premium Gear", value: "World Class", icon: Shield },
  { label: "Expert Coaches", value: "Certified", icon: Award },
];

export default function TrustSection() {
  return (
    <section className="py-12 bg-card relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="font-headline text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
