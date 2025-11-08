"use client";

interface NextArrowProps {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
}

export default function NextArrow({ onClick, disabled = false, label = "Next section" }: NextArrowProps) {
  return (
    <div className="pointer-events-none fixed bottom-8 right-6 z-40 sm:bottom-10 sm:right-12">
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`group pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
          disabled ? "cursor-not-allowed opacity-40" : "hover:border-white/50 hover:bg-white/20"
        }`}
        aria-label={label}
      >
        <svg
          aria-hidden
          className={`h-6 w-6 transition-transform duration-300 ${disabled ? "translate-y-0" : "group-hover:translate-y-1"}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4v13.2l5.4-5.4 1.6 1.6-8.5 8.5-8.5-8.5 1.6-1.6 5.4 5.4V4h2.8z"
            fill="currentColor"
          />
        </svg>
        <span className="sr-only">{label}</span>
      </button>
    </div>
  );
}
