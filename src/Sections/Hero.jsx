import { Button } from "@/Components/Button";
import { ArrowRight } from "lucide-react";
import { AnimatedBorderButton } from "@/Components/Animatedborderbutton.jsx";
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/*Background purple dots*/}
      <div className="absolute inset-0">
        <img src="/Pictures/purple-hero.png" alt="Hero Image" className="w-full h-full object-cover opacity-40" />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background">
      </div>
      {/*Content, loop through an array of 40 values, slow-dirft is an component created in the index.css*/}
      <div>
        {[...Array(40)].map((_, i) => (
          <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#a224ec",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 5
                }s ease-in-out infinite `,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/*Content, loop through an array of 40 values, slow-dirft is an component created in the index.css*/}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*Left Column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full delay-100" />
                Jr Software Engineer
              </span>
            </div>

            {/*Heading and paragraph*/}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in delay-200">
                This is a simple webpage<web-page></web-page>,
                <span className="text-primary"> created by the great Ignacio Paucar.</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg animate-fade-in delay-800">
                I'm a junior software engineer, currently seeking a position where I can apply my skills and contribute to the development of innovative software solutions.
                With more than 2 years of experience in support and customer service, I have developed strong problem-solving abilities and a keen attention to detail.
                I am passionate about technologyand continuously learning new technologies to enhance my expertise in the field.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">

              <Button size="lg" className="animate-fade-in delay-400">
                Contact Me <ArrowRight className="w-4 h-4" />
              </Button>
              <AnimatedBorderButton />
            </div>
          </div>
          {/*Right Column*/}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-primary opacity-20 blur-3xl scale-110" />
              <img
                src="/Pictures/purejob.jpeg"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-2xl delay-500 animate-fade-in mask-[radial-gradient(ellipse_at_center,black_55%,transparent_100%)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};