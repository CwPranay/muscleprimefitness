"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basics",
    price: "1500",
    period: "Monthly",
    features: [
      "Full Gym Access",
      "Locker Facility",
      "Cardio Area",
      "Standard Weight Zone",
      "Trainer Assistance"
    ],
    cta: "JOIN NOW",
    popular: false
  },
  {
    name: "Elite",
    price: "4000",
    period: "3 Months",
    description: "MOST POPULAR CHOICE",
    features: [
      "Full Gym & Cardio",
      "Best Value Pricing",
      "Custom Diet Plan",
      "Locker & Steam Room",
      "Member Discounts",
      "Renewal Priority"
    ],
    cta: "CLAIM OFFER",
    popular: true
  },
  {
    name: "VIP",
    price: "Enquire",
    period: "Yearly / PT",
    features: [
      "1-on-1 Personal Training",
      "Monthly Body Analysis",
      "Custom Workout Logs",
      "Supplement Guidance",
      "Priority Access",
      "VIP Events"
    ],
    cta: "ENQUIRE NOW",
    popular: false
  }
];

export default function Membership() {
  return (
    <section id="membership" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic">MEMBERSHIP <span className="text-primary">TIERS</span></h2>
          <div className="w-24 h-2 bg-primary mx-auto skew-x-[-20deg]" />
          <p className="text-muted-foreground font-bold italic uppercase tracking-widest text-sm">*Taxes and facility charges extra</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={cn(
                "relative bg-card border-2 border-white/5 rounded-none transition-all duration-500 hover:border-primary group",
                plan.popular && "border-primary/50 bg-primary/5"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-6 px-4 py-1 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest italic skew-x-[-10deg]">
                  BEST VALUE
                </div>
              )}
              <CardHeader className="text-left pt-12 pb-8 px-8">
                <CardTitle className="text-3xl font-black italic uppercase tracking-tighter text-white group-hover:text-primary transition-colors">
                  {plan.name}
                </CardTitle>
                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-black italic">₹{plan.price}</span>
                  {plan.price !== "Enquire" && <span className="text-muted-foreground ml-2 font-bold uppercase text-xs">/ {plan.period}</span>}
                </div>
                {plan.description && <p className="text-primary text-[10px] font-black mt-2 tracking-[0.2em]">{plan.description}</p>}
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 border-t border-white/10 pt-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 text-sm font-medium text-white/70">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="uppercase tracking-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-8 pb-10 pt-4">
                <Button 
                  asChild
                  className={cn(
                    "w-full h-14 font-black italic rounded-none skew-x-[-12deg]",
                    plan.popular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-white/5 hover:bg-white/10 text-white"
                  )}
                >
                  <a href="https://wa.me/919100462121" target="_blank" rel="noopener noreferrer" className="block skew-x-[12deg]">
                    {plan.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
