import { useEffect, useRef, useState } from "react";
import { Users, TrendingDown, Star, Zap } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
  iconBg: string;
}

const STATS: StatItem[] = [
  { icon: Users, value: 500, suffix: "+", label: "Colegios activos", color: "text-edu-blue", iconBg: "bg-edu-blue/10" },
  { icon: TrendingDown, value: 70, suffix: "%", label: "Menos trabajo manual", color: "text-edu-green", iconBg: "bg-edu-green/10" },
  { icon: Star, value: 98, suffix: "%", label: "Satisfacción docente", color: "text-edu-orange", iconBg: "bg-edu-orange/10" },
  { icon: Zap, value: 72, suffix: "h", label: "Implementación rápida", color: "text-edu-purple", iconBg: "bg-edu-purple/10" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat, animate }: { stat: StatItem; animate: boolean }) {
  const count = useCountUp(stat.value, 1800, animate);
  const Icon = stat.icon;

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card px-6 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg}`}>
        <Icon className={`h-6 w-6 ${stat.color}`} strokeWidth={1.75} />
      </div>
      <div>
        <p className={`text-3xl font-bold tabular-nums tracking-tight ${stat.color}`}>
          {count}
          <span className="text-2xl">{stat.suffix}</span>
        </p>
        <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
      </div>
    </div>
  );
}

const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
