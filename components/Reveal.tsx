"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const anim = gsap.fromTo(
      el,
      { clipPath: "inset(0 0 100% 0)", y: 24, opacity: 0 },
      {
        clipPath: "inset(0 0 0% 0)",
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => { anim.scrollTrigger?.kill(); anim.kill(); };
  }, [delay]);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} style={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}>
      {children}
    </Tag>
  );
}
