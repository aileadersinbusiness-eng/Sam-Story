'use client';
import "./globals.css";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Complete Guide to Perplexity | Business With AI Strategist</title>
        <meta name="description" content="The Complete Guide to Perplexity for UK Small & Medium Businesses. What it does. What you pay for. How to actually use it." />
      </head>
      <body>{children}</body>
    </html>
  );
}
