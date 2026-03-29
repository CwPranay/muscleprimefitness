
"use client";

import React from "react";
import { Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-black mb-6 uppercase">GET IN <span className="text-primary">TOUCH</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to crush your fitness goals? Visit us or drop a message to get started. Our team is here to help you find the best plan for your needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-tighter">OUR LOCATION</h4>
                  <p className="text-muted-foreground">Muscle Prime Fitness, Kalyan West, Maharashtra 421301</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-tighter">CALL US</h4>
                  <a href="tel:9100462121" className="text-2xl font-black hover:text-primary transition-colors italic">
                    9100462121
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-tighter">GYM HOURS</h4>
                  <p className="text-muted-foreground">Mon - Sat: 5:00 AM - 10:00 PM</p>
                  <p className="text-muted-foreground">Sunday: 7:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1fb355] text-white font-bold h-14 px-8">
                <a href="https://wa.me/919100462121" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WHATSAPP US
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 font-bold border-white/20">
                <a href="tel:9100462121">
                  DIAL NOW
                </a>
              </Button>
            </div>
          </div>

          {/* Map Side */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-border grayscale hover:grayscale-0 transition-all duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15069.902767147803!2d73.1255608871582!3d19.218089500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7953b735b5ab7%3A0xdec93294b2c83db7!2sMuscle%20Prime%202121!5e0!3m2!1sen!2sin!4v1774805825037!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
