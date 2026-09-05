import { Button } from "@/Components/Button";
import { Menu, X } from "lucide-react"; // Import the Menu icon from lucide-react
import { useState } from "react";
const navlinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#hobbies", label: "Hobbies" },
    { href: "#contact", label: "Contact" },

];
export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to track the mobile menu open/close status
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5">
            <nav className="container mx-auto flex items-center justify-between">
                <a href="#"
                    className="text-xl font-bold tracking-tight hover:text-primary"
                >
                    PM<span className="text-primary">.</span>
                </a>

                {/*Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navlinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="px-4 py-2 text-sm text-muted-foreground font-medium tracking-tight hover:text-foreground rounded-full">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                {/*CTA Button */}
                <div className="hidden md:block">
                    <Button size="sm">Contact Me</Button>{/*This is where the Button component, that we can re-used, it species the classes and how the button looks like, and we can use it in other parts of the app.*/}
                </div>

                {/*Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(prev => !prev)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>
            {/*Mobile Nav Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navlinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg text-muted-foreground hover:text-foreground p-2">
                                {link.label}
                            </a>
                        ))}
                        <Button>Contact Me</Button>
                    </div>
                </div>
            )}
        </header>
    );
};
