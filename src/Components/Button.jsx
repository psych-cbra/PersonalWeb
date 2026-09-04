const baseClasses = "group relative overflow-hidden cursor-pointer rounded-full font-medium bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-colors duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/50 active:shadow-md active:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";

const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
};

export const Button = ({className = "", size = "md", children}) => {
    const classes = `${baseClasses} ${sizeClasses[size] ?? sizeClasses.md} ${className}`;

    return (
        <button className={classes}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};
