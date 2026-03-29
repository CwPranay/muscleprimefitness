
"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    price: "1500",
    period: "Monthly",
    features: [
      "Access to Gym Floor",
      "Modern Cardio Equipment",
      "Locker Facility",
      "Standard Weight Area",
      "Trainer Guidance (On-floor)"
    ],
    cta: "Join Now",
    popular: false
  },
  {
    name: "Standard",
    price: "4000",
    period: "3 Months",
    description: "Best Value Plan!",
    features: [
      "Full Gym Floor Access",
      "All Cardio Equipment",
      "Best Value Pricing",
      "Locker & Steam Access",
      "Discounted Renewals",
      "Basic Diet Chart"
    ],
    cta: "Claim Offer",
    popular: true
  },
  {
    name: "Premium",
    price: "Custom",
    period: "Yearly / PT",
    features: [
      "All Standard Perks",
      "Personal Training sessions",
      "Advanced Diet Planning",
      "Monthly Body Composition",
      "Premium Guest Access",
      "Priority Support"
    ],
    cta: "Enquire Now",
    popular: false
  }
];

export default function Membership() {
  return (
    <section id="membership" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-4">MEMBERSHIP <span className="text-primary">PLANS</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto italic">*Additional facility charges may apply</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={cn(
                "relative bg-card border-border transition-all duration-300 hover:-translate-y-2",
                plan.popular && "border-primary shadow-[0_0_30px_rgba(59,43,239,0.2)]"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Best Value
                </div>
              )}
              <CardHeader className="text-center pt-10">
                <CardTitle className="font-headline text-2xl uppercase tracking-tighter">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-black">₹{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground ml-2">/ {plan.period}</span>}
                </div>
                {plan.description && <p className="text-primary text-sm font-bold mt-2 uppercase tracking-widest">{plan.description}</p>}
              </CardHeader>
              <CardContent className="py-6">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="bg-primary/20 p-1 rounded-full">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pb-10">
                <Button 
                  asChild
                  className={cn(
                    "w-full h-12 font-bold",
                    plan.popular ? "bg-primary hover:bg-primary/90" : "bg-white/10 hover:bg-white/20 text-white"
                  )}
                >
                  <a href="https://wa.me/919100462121" target="_blank" rel="noopener noreferrer">
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
