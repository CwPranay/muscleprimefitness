"use client";

import React from "react";
import { Star, Award, Shield, Users } from "lucide-react";

const stats = [
  { label: "IRON WARRIORS", value: "185+", icon: Users },
  { label: "GOOGLE RATING", value: "4.6 ⭐", icon: Star },
  { label: "ELITE GEAR", value: "PREMIUM", icon: Shield },
  { label: "COACHING", value: "PRO", icon: Award },
];

export default function TrustSection() {
  return (
    <section className="py-16 bg-black relative z-20 border-y border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group flex flex-col items-center">
              <div className="mb-6 p-4 bg-primary/5 rounded-none border-b-2 border-primary/20 group-hover:border-primary transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-black italic mb-2 text-white">{stat.value}</div>
              <div className="text-[10px] text-primary font-black uppercase tracking-[0.3em] italic">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
