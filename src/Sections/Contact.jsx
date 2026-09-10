import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  User,
} from "lucide-react";
import { Button } from "@/Components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ignaciopaucar9@hotmail.com",
    href: "mailto:ignaciopaucar9@hotmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+506 72875737",
    href: "tel:+50672875737",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Heredia, Costa Rica",
    href: "https://www.google.com/maps/search/?api=1&query=San+Rafael+de+Heredia%2C+Costa+Rica",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: `New portfolio contact from ${formData.name}`,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center justify-center gap-2 text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            <span className="w-2 h-2 bg-purple rounded-full" />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Looking for the next opportunity.
          </h2>
          <div className="mx-auto mt-2 mb-4 h-px w-24 bg-linear-to-r from-transparent via-primary to-transparent" />
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            I'm currently exploring new opportunities where I can grow as a
            technology professional, apply my experience in technical support and
            infrastructure and take on new challenges. If you're looking for
            someone with a strong technical mindset and a  track record of excellent performance,
            I'd love to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="group relative p-8 rounded-3xl border border-primary/20 overflow-hidden animate-fade-in animation-delay-300">
            {/*Fancy animated border - same technique as AnimatedBorderButton (rotating dashed stroke), only on hover*/}
            <svg
              className="pointer-events-none absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="24"
                className="stroke-primary animate-border-travel"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="60 800"
              />
            </svg>

            <form className="relative space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Type your message here"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="rounded-3xl p-8 border border-primary/20">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:-rotate-6">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="relative rounded-3xl p-8 border border-primary/20 overflow-hidden shadow-xl shadow-green-500/10">
              <div className="relative flex items-center gap-3 mb-4">
                <span className="relative flex w-3 h-3">
                  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                  <span className="relative w-3 h-3 bg-green-500 rounded-full" />
                </span>
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="relative text-muted-foreground text-sm">
                I'm currently open to new opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};