import { ChefHat, Cookie } from "lucide-react";

export const Project = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/*Ambient backdrop - fade overlay only, no dots for this section*/}
      <div className="particle-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <span className="inline-flex items-center justify-center gap-2 text-[#FFFFFF]-foreground text-sm font-medium tracking-wider uppercase">
            <span className="w-2 h-2 bg-purple rounded-full" />
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
            Something's Cooking.

            <Cookie className="inline-block w-8 h-8 md:w-10 md:h-10 text-highlight align-middle" />
          </h2>
        </div>

        {/* Coming soon */}
        <div className="max-w-xl mx-auto text-center glass rounded-2xl p-10 animate-fade-in delay-200">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
            <ChefHat className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-3">
            Upcoming projects...
          </h3>
          <p className="text-muted-foreground">
            I'm currently building out this section. Check back soon to see
            what I've been working on.
          </p>
        </div>
      </div>
    </section>
  );
};
