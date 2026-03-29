
"use client";

import React from "react";
import { Dumbbell, Zap, Heart, UserCheck } from "lucide-react";

const services = [
  {
    title: "Weight Training",
    description: "Build raw power and muscle with our extensive range of premium free weights and machines.",
    icon: Dumbbell,
    accent: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "CrossFit",
    description: "High-intensity functional movements designed to improve strength and cardiovascular fitness.",
    icon: Zap,
    accent: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Cardio Zone",
    description: "State-of-the-art treadmills, ellipticals, and bikes to keep your heart healthy and burning fat.",
    icon: Heart,
    accent: "bg-red-500/10 text-red-500"
  },
  {
    title: "Personal Training",
    description: "One-on-one expert guidance to fast-track your results with personalized diet and workout plans.",
    icon: UserCheck,
    accent: "bg-cyan-500/10 text-cyan-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-4 uppercase">OUR <span className="text-primary">SERVICES</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to reach your peak physical potential.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-8 bg-card border border-border rounded-2xl hover:border-primary transition-all group">
              <div className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${service.accent}`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-tighter">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
