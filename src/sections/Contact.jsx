import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/portfolioData";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setNotice("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email.";
    }
    if (!form.subject.trim()) next.subject = "Please add a subject.";
    if (!form.message.trim()) next.message = "Please write a message.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const body = `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject.trim())}&body=${encodeURIComponent(body)}`;
    setNotice("Your email app should open with this message ready. Send it from there — nothing is stored on this site.");
  };

  const fieldClass =
    "mt-2 w-full rounded-xl border border-crimson/40 bg-ink/90 px-3.5 py-3 text-base text-paper outline-none transition placeholder:text-mute/70 focus:border-signal focus:shadow-[0_0_0_3px_rgba(226,184,87,0.14)]";

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          index="07"
          eyebrow="Contact"
          title="Have a project in mind? Let's build something great together."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="left">
            <p className="max-w-md text-[15.5px] leading-relaxed text-body">
              I read every note. The form opens your email app addressed to me, with your message already filled in.
            </p>
            <ul className="mt-8 space-y-3">
              <ContactRow icon={Mail} label="Email" href={`mailto:${profile.email}`} value={profile.email} />
              <ContactRow icon={Phone} label="Phone" href={profile.phoneHref} value={profile.phone} />
              <ContactRow icon={MapPin} label="Location" value={profile.location} />
              <ContactRow
                icon={FaLinkedinIn}
                label="LinkedIn"
                href={profile.linkedin}
                value={profile.linkedinLabel}
                external
              />
              <ContactRow icon={FaGithub} label="GitHub" href={profile.github} value={profile.githubLabel} external />
            </ul>
          </Reveal>

          <Reveal direction="right" delay={0.08}>
            <form onSubmit={onSubmit} noValidate className="card-rosso rounded-2xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name}>
                  <input
                    className={fieldClass}
                    value={form.name}
                    onChange={update("name")}
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    className={fieldClass}
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    autoComplete="email"
                    placeholder="you@email.com"
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Subject" error={errors.subject}>
                  <input
                    className={fieldClass}
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder="Project, role, or question"
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message" error={errors.message}>
                  <textarea
                    className={`${fieldClass} min-h-36 resize-y`}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell me what you want to build."
                  />
                </Field>
              </div>
              <button
                type="submit"
                className="btn-gold mt-6 rounded-xl px-6 py-3 text-sm font-semibold"
              >
                Send Message
              </button>
              {notice ? (
                <p className="mt-4 rounded-xl border border-signal/35 bg-ink/80 px-4 py-3 text-sm leading-relaxed text-signal-bright">
                  {notice}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-[0.12em] text-signal">{label}</span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-[#f4a7c8]">{error}</span> : null}
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href, external = false }) {
  const content = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-signal/30 bg-ink/90 text-signal-bright">
        <Icon size={16} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-xs uppercase tracking-[0.12em] text-mute">{label}</span>
        <span className="mt-0.5 block break-all text-sm text-paper">{value}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <li className="card-rosso flex items-center gap-4 rounded-xl px-4 py-3.5">{content}</li>
    );
  }

  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        className="card-rosso-interactive flex items-center gap-4 rounded-xl px-4 py-3.5 hover:border-signal/60"
      >
        {content}
      </a>
    </li>
  );
}
