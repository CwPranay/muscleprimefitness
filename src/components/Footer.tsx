
"use client";

import React from "react";
import Link from "next/link";
import { Dumbbell, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card pt-16 pb-24 md:pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-primary p-1.5 rounded-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="font-headline font-bold text-xl tracking-tighter uppercase">
                MUSCLE <span className="text-primary">PRIME</span> 2121
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kalyan's most premium fitness destination. We build more than just bodies; we build champions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline font-bold text-lg mb-6 uppercase tracking-widest">QUICK LINKS</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#membership" className="hover:text-primary transition-colors">Membership</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="font-headline font-bold text-lg mb-6 uppercase tracking-widest">OUR TRAINING</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Weight Training</li>
              <li>Functional CrossFit</li>
              <li>Cardio Excellence</li>
              <li>Personal Training</li>
              <li>Strength & Conditioning</li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-headline font-bold text-lg mb-6 uppercase tracking-widest">CONTACT INFO</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">Kalyan West, Maharashtra 421301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:9100462121" className="text-muted-foreground hover:text-primary">9100462121</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">contact@muscleprime2121.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Muscle Prime 2121. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
