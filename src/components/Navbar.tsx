import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.94]);
  const blur = useTransform(scrollY, [0, 200], [12, 22]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      style={{ scale }}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1100px)]"
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between gap-2">
        <motion.a
          href="#home"
          style={{ backdropFilter: filter }}
          className="bento-cell bento-hover px-4 py-2.5 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
          <span className="font-accent font-bold tracking-tight text-foreground">ali.dev</span>
        </motion.a>

        <motion.div
          style={{ backdropFilter: filter }}
          className="bento-cell bento-hover px-2 py-2 flex items-center gap-1"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg"
            >
              {l.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          style={{ backdropFilter: filter }}
          className="bento-cell px-3 py-2.5 flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Available</span>
        </motion.div>

        <ThemeToggle />


        <motion.a
          href="#contact"
          style={{ backdropFilter: filter }}
          whileHover={{ scale: 1.04 }}
          className="bento-cell px-4 py-2.5 bg-primary !border-primary text-primary-foreground font-semibold text-sm"
        >
          Hire Me →
        </motion.a>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="bento-cell flex items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
            <span className="font-accent font-bold">ali.dev</span>
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2">
              {open ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bento-cell mt-2 p-2 flex flex-col"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
