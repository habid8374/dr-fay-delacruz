interface WaveDividerProps {
  /** CSS color for the wave shape (section below) */
  fill?: string;
  flip?: boolean;
  className?: string;
}

/**
 * SVG wave divider between sections.
 * `fill` should match the background color of the section that comes AFTER the divider.
 */
const WaveDivider = ({
  fill = "hsl(var(--secondary) / 0.4)",
  flip = false,
  className = "",
}: WaveDividerProps) => {
  return (
    <div
      className={`relative -my-px overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 48"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block h-10 w-full md:h-12"
      >
        <path
          d="M0,24 C360,48 720,0 1080,24 C1260,36 1380,12 1440,24 L1440,48 L0,48 Z"
          style={{ fill }}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
