import { Code2, Lightbulb, GlobeLock, Users, GraduationCap } from "lucide-react";


const highlights = [

  {
    icon: GraduationCap,
    title: "Self-taught",
    description:
      "Constantly learning new tools and technologies driven by curiosity rather than obligation.",

  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Communicating clearly with cross-functional teams to solve problems and deliver results.",
  },
  {
    icon: GlobeLock,
    title: "Security",
    description:
      "Experience hardening enterprise storage systems and applying security best practices in production environments.",
  },

  {
    icon: Code2,
    title: "Code",
    description:
      "Writing readable, well-structured code that's easy to maintain and scale.",
  },

];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                <span className="w-2 h-2 bg-purple rounded-full" />
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Anything worth doing, is worth doing right.
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science student in my final year with professional experience
                in technical support and enterprise technology, my journey has combined
                hands-on IT experience with software development giving me a strong
                understanding of both how systems work and how software is built.
              </p>

              <p>
                I have experience supporting enterprise storage environments, troubleshooting
                complex technical issues, I enjoy solving problems, learning new technologies and turning
                technical challenges into practical solutions.
              </p>

              <p>
                Outside of work and university, I'm constantly building my technical skills
                through personal projects and hands-on learning. When I want to unplug, I love spending my free time hiking and exploring the outdoors.
              </p>
            </div>

          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};