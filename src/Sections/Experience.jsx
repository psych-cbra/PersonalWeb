import { Briefcase, Headset, Package } from "lucide-react";

// Light neon accent per card, indexed by position — add more if you add more entries.
const borderColors = ["#d1d5db", "#fff59d", "#ff6a00"];

// Placeholder entries — swap role/company/period/description/tags with your real history.
const experience = [

    {
    icon: Headset,
    role: "Customer Service Specialist",
    company: "Robert Bosch",
    period: "2021 — 2022",
    description:
      "Efficiently managed a high volume of incoming customer calls, providing specialized technical assistance for iDrive OS to effectively resolve vehicle-related malfunctions. Concurrently identified and troubleshot mechanical issues, ensuring the prompt resolution of problems to prevent potential vehicle breakdowns while maintaining overall operational efficiency and excellent customer service.",
    tags: ["Customer Service", "Multi-tasking", "Communication Skills"],
  },

  {
    icon: Briefcase,
    role: "Case Manager",
    company: "Amazon",
    period: "2022 — 2023",
    description:
      "Proficiently handled escalated cases as a tier 2 specialist demonstrating excellent case management, effectively assisting and guiding Amazon employees seeking support on their leave of absence and medical accommodation needs. Additionally I assumed responsibilities of a QA analyst focusing on enhancing service levels in alignment with our operational objectives, my role involved a rigorous evaluation of team metrics and I actively engaged in mentoring and coaching peers to encourage their professional growth and ensure a high standard of service delivery.",
    tags: ["Human Resources (HR)", "Dali Console (SFDC)", 'Case Management'],
  },

  {
    icon: Package,
    role: "Technical Support Associate",
    company: "Movate",
    period: "2024 — Present",
    description:
      "I specialize in managing and optimizing Pure Storage FlashArray and FlashBlade systems to deliver reliable, secure and high-performing SAN environments. My responsibilities include proactive health checks, continuous monitoring, non-disruptive upgrades, and security patching. As part of Pure1 TSE team, I assisted customers with SafeMode configurations, MFA setup, user-to-role mapping and support for non SSO accounts. I guide customers on data deletion and eradication processes, helping them understand retention behavior and security related configurations. I combine technical expertise with AI-driven tools to troubleshoot issues efficiently and improve overall operational performance \n \n As an additional responsibility, I served as a Backup Team Lead stepping in to cover TL duties when needed. I monitored team backlog and case assignments to help prevent SLA misses, ensured compliance expectations were being met, provided feedback to team members, mentored peers on best practices and professional development, conducted weekly QA reviews whenever the TL was unavailable",
      
    tags: ["Storage Area Network (SAN)", "Pure1-SafeMode", "Linux"],
  },

];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/*Ambient backdrop - no background picture here, just the fade overlay + purple/orange drifting dots*/}
      <div className="particle-overlay" />
      <div>
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="particle-dot"
            style={{
              backgroundColor: i % 2 === 0 ? "#a224ec" : "#ff6a00",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-fade ${6 + Math.random() * 3
                }s ease-in-out infinite `,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-left space-y-4 mb-16 animate-fade-in">
          <span className="inline-flex items-center gap-2 text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            <span className="w-2 h-2 bg-purple rounded-full" />
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
            Professional Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl space-y-8">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="relative pl-14 animate-fade-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/*Connector line to the next entry*/}
              {idx !== experience.length - 1 && (
                <span className="absolute left-5 top-10 -bottom-8 w-px bg-border" />
              )}

              {/*Icon marker - icon color matches this entry's border color*/}
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <item.icon
                  className="w-5 h-5"
                  style={{ color: borderColors[idx % borderColors.length] }}
                />
              </div>

              {/*Content card - each entry gets its own light neon border + glow, one color per index*/}
              <div
                className="glass rounded-2xl p-6"
                style={{
                  borderColor: borderColors[idx % borderColors.length],
                  boxShadow: `0 0 14px ${borderColors[idx % borderColors.length]}66`,
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p
                  className="text-sm mb-3"
                  style={{ color: borderColors[idx % borderColors.length] }}
                >
                  {item.company}
                </p>
                <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
