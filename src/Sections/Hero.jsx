import { Button } from "@/Components/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "@/Components/Animatedborderbutton.jsx";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const skills = [
  "Linux",
  "Pure-1",
  "FlashArray",
  "FlashBlade",
  "AI prompting",
  "ServiceNow",
  "Customer Service",
  "SFDC",
  "Software development",
  "React",
  "GitHub Actions",
  "Tailwind CSS",
  "+2 years of experience in technical support",

];

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

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
                This is a simple Web-page<web-page></web-page>,
                <span className="text-primary"> created by Ignacio Paucar.</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg animate-fade-in delay-800">
                I'm a junior software engineer, currently seeking a position where I can apply my skills and contribute.
                With more than 4 years of experience in tech support and customer service, I have developed strong problem-solving abilities and a need attention to detail.
                I am passionate about technology and continuously learning new technologies to enhance my expertise in the field.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">

              <Button
                size="lg"
                className="animate-fade-in delay-600"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me <ArrowRight className="w-4 h-4" />
              </Button>
              <AnimatedBorderButton />
            </div>
            {/* Links */}
            <div className="flex items-center gap-4 animate-fade-in delay-800">
              <span className="text-muted-foreground text-sm">Follow: </span>
              {[{ icon: FaGithub, href: "https://github.com/psych-cbra" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/ignacio-paucar-1312a8156/" }]
                .map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
            </div>
          </div>
          {/*Right Column*/}
          <div className="relative animate-fade-in animation-delay-300">
            {/*Profile Image*/}
            <div className="relative mx-auto w-72 aspect-2/3 lg:w-96">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple/40 via-transparent to-purple/40 blur-sm animate-pulse-glow" />
              <img
                src="/Pictures/AIpic.png"
                alt="Ignacio Paucar"
                className="w-full h-full object-cover rounded-2xl border border-purple/30 shadow-lg shadow-purple/30 animate-fade-in delay-400" />
              {/*Floating Badge*/}
              <div className="absolute -bottom-6 sm:-bottom-10 lg:-bottom-1 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
              {/*Status Badge*/}
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                <div className="text-2xl font-bold text-primary">+4</div>
                <div className="text-sm font-medium text-muted-foreground">Years Exp.</div>
              </div>
            </div>
          </div>
        </div>

        {/*Skills Section*/}
        <div className="mt-24 sm:mt-20 space-y-12 animate-fade-in delay-800">
          <p className="text-center text-md tracking-widest text-muted-foreground">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max gap-3 sm:gap-4 animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                // Duplicate the skills array to create a continuous loop, Curly brackets to use Javascript
                <span
                  key={idx}
                  className="glass whitespace-nowrap rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*Scroll Indicator - pinned to the section's own bottom edge, not the centered content*/}
      <div className="absolute bottom-1 inset-x-0 flex justify-center animate-fade-in delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};