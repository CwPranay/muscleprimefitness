"use client";

import React from "react";
import Link from "next/link";
import { Dumbbell, Instagram, Facebook, Twitter, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-24 md:pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-sm shadow-lg">
                <Dumbbell className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-headline font-black text-2xl tracking-tighter italic uppercase">
                MUSCLE <span className="text-primary">PRIME</span>
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed font-medium">
              Kalyan's premier training hub. We provide the equipment, the atmosphere, and the expertise. You provide the effort.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all rounded-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-black text-xs tracking-[0.3em] mb-8 uppercase italic">NAVIGATION</h4>
            <ul className="space-y-4">
              {['About', 'Membership', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors font-bold uppercase text-sm tracking-widest">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="text-primary font-black text-xs tracking-[0.3em] mb-8 uppercase italic">FACILITIES</h4>
            <ul className="space-y-4 text-white/60 font-bold uppercase text-xs tracking-widest">
              <li>Heavy Iron Zone</li>
              <li>Crossfit Deck</li>
              <li>Cardio Suite</li>
              <li>Steam & Recovery</li>
              <li>Personal Training</li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-primary font-black text-xs tracking-[0.3em] mb-8 uppercase italic">HEADQUARTERS</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span className="text-white/60 font-bold uppercase text-xs leading-relaxed">Kalyan West, Maharashtra 421301</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:9100462121" className="text-white/60 hover:text-primary font-black italic text-xl">9100462121</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} MUSCLE PRIME FITNESS. BUILT IN KALYAN.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary">PRIVACY</Link>
            <Link href="#" className="hover:text-primary">TERMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
