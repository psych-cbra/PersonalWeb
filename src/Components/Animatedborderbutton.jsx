import { Download } from "lucide-react";

export const AnimatedBorderButton = () => {
    return (
        <button className="group relative inline-flex h-14 items-center gap-2 rounded-full px-8 text-lg font-medium text-foreground/90 cursor-pointer transition-colors duration-300 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background animate-fade-in delay-600">
            {/*Animated SVG border: hidden at rest, fades in with a rotating dashed pulse on hover*/}
            <svg
                className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                viewBox="0 0 200 56"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="1" y="1" width="198" height="54" rx="27" className="stroke-primary/30" strokeWidth="1.5" />
                <rect
                    x="1" y="1" width="198" height="54" rx="27"
                    className="stroke-primary group-hover:animate-border-spin"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="20 200"
                />
            </svg>
            <span className="relative z-10">
                Download CV</span>
            <Download className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
    );
};
