"use client";

import { useEffect, useRef, useState } from "react";

interface StatProps {
  bedsCount?: string;
  treatedCount?: string;
  kdcCount?: string;
}

function AnimatedNumber({ target }: { target: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const targetNum = parseInt(target, 10);

  useEffect(() => {
    if (isNaN(targetNum)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 2000;
            const steps = 60;
            const increment = targetNum / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= targetNum) {
                setCount(targetNum);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetNum]);

  return <span ref={ref}>{count.toLocaleString("ru-RU")}</span>;
}

export function Statistics({ bedsCount = "422", treatedCount = "20332", kdcCount = "75929" }: StatProps) {
  const stats = [
    { icon: "bed", number: bedsCount, title: "коек" },
    { icon: "patients", number: treatedCount, title: "пролечено" },
    { icon: "admitted", number: kdcCount, title: "принято" },
  ];

  return (
    <section className="py-6">
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={stat.title}
            className="relative flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
          >
            <div className="size-14 flex items-center justify-center rounded-2xl bg-primary/10">
              <svg className="size-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
                {stat.icon === "bed" && (
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6z" />
                )}
                {stat.icon === "patients" && (
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                )}
                {stat.icon === "admitted" && (
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                )}
              </svg>
            </div>
            <div className="text-3xl font-bold text-primary tracking-tight">
              <AnimatedNumber target={stat.number} />
            </div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {stat.title}
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full bg-primary/30" />
          </div>
        ))}
      </div>
    </section>
  );
}
