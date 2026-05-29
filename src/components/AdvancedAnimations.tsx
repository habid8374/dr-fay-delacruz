import { useEffect, useRef } from "react";

interface AdvancedAnimationsProps {
  children: React.ReactNode;
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight" | "zoomIn" | "bounceIn";
  delay?: number;
  className?: string;
}

const AdvancedAnimations = ({ 
  children, 
  animation = "fadeInUp", 
  delay = 0,
  className = ""
}: AdvancedAnimationsProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (elementRef.current) {
              elementRef.current.classList.add("animate-in");
            }
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fadeInUp":
        return "opacity-0 translate-y-8";
      case "slideInLeft":
        return "opacity-0 -translate-x-8";
      case "slideInRight":
        return "opacity-0 translate-x-8";
      case "zoomIn":
        return "opacity-0 scale-95";
      case "bounceIn":
        return "opacity-0 scale-90";
      default:
        return "opacity-0 translate-y-8";
    }
  };

  return (
    <>
      <style>
        {`
          .animate-element {
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .animate-element.animate-in {
            opacity: 1 !important;
            transform: translate(0) scale(1) !important;
          }
          .bounce-animation.animate-in {
            animation: bounceIn 0.8s ease-out;
          }
          @keyframes bounceIn {
            0% { opacity: 0; transform: scale(0.3); }
            50% { opacity: 1; transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
      <div
        ref={elementRef}
        className={`animate-element ${getAnimationClass()} ${
          animation === "bounceIn" ? "bounce-animation" : ""
        } ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default AdvancedAnimations;