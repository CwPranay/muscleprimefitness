
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border p-4 animate-in slide-in-from-bottom-full duration-300">
      <div className="flex gap-3">
        <Button asChild className="flex-1 h-12 bg-primary hover:bg-primary/90 font-bold">
          <a href="https://wa.me/919100462121" target="_blank" rel="noopener noreferrer">
            <MessageSquare className="w-4 h-4 mr-2" />
            JOIN NOW
          </a>
        </Button>
        <Button asChild variant="outline" className="h-12 w-12 p-0 border-primary text-primary">
          <a href="tel:9100462121">
            <Phone className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </div>
  );
}
