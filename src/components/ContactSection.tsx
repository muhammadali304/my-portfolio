import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

const EMAIL = "aliyousufpk304@gmail.com";
const PHONE_DISPLAY = "+92 377 6220645";
const PHONE_TEL = "+923776220645";


export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono"
        >
          — contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 font-accent font-extrabold leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)" }}
        >
          <span className="block text-foreground">Let's Build</span>
          <span className="block text-primary text-glow">Together.</span>
        </motion.h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          Have a project, an idea, or just want to say hi? Drop a line — I read every message.
        </p>
      </div>

      {/* Direct contact cards */}
      <div className="mt-10 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.a
          href={`mailto:${EMAIL}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="bento-cell bento-hover p-5 flex items-center gap-4"
        >
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="label-mono">email</p>
            <p className="mt-0.5 text-foreground font-medium text-sm truncate">{EMAIL}</p>
          </div>
        </motion.a>

        <motion.a
          href="https://wa.me/923776220645" target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          whileHover={{ y: -4 }}
          className="bento-cell bento-hover p-5 flex items-center gap-4"
        >
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="label-mono">phone</p>
            <p className="mt-0.5 text-foreground font-medium text-sm">{PHONE_DISPLAY}</p>
          </div>
        </motion.a>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        onSubmit={onSubmit}
        className="mt-8 max-w-2xl mx-auto bento-cell p-6 md:p-8 space-y-4"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Name" name="name" placeholder="Your name" />
          <Field label="Email" name="email" type="email" placeholder="you@domain.com" />
        </div>
        <div>
          <label className="label-mono mb-2 block">Message</label>
          <textarea
            required
            rows={5}
            placeholder="Tell me about the project..."
            className="w-full bg-background/60 border border-primary/20 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(163,230,53,0.15)] transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl hover:shadow-[var(--shadow-lime-lg)] transition-all hover:scale-[1.01]"
        >
          {sent ? "Sent ✓" : "Send Message"}
          {!sent && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
        </button>
      </motion.form>



    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="label-mono mb-2 block">{label}</label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-background/60 border border-primary/20 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(163,230,53,0.15)] transition-all"
      />
    </div>
  );
}
