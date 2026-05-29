import { motion, Variants } from "framer-motion";
import React from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const AnimateOnScroll = ({
  children,
  className,
  variants = defaultVariants,
  delay = 0,
  once = true,
}: AnimateOnScrollProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};