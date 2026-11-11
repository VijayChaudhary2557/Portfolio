import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/portfolioData";

function getServiceDirection(index) {
  const col = index % 3;
  if (col === 0) return "left";
  if (col === 2) return "right";
  return index < 3 ? "down" : "up";
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal direction="down" distance={30} duration={0.62}>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-crimson/55 bg-gradient-to-b from-raised/90 to-ink/95 px-4 py-1.5 shadow-[0_0_24px_-6px_rgba(184,37,111,0.65)]">
              <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_#b8256f]" />
              <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-paper">
                Services
              </span>
            </div>

            <div className="mt-5 flex items-center justify-center gap-4 sm:gap-6">
              <span
                className="hidden h-px w-16 bg-gradient-to-r from-transparent to-signal/70 sm:block md:w-28"
                aria-hidden="true"
              />
              <h2 className="font-serif text-[2.6rem] leading-[1.06] text-paper sm:text-5xl">
                Services <span className="text-gold-gradient">I Provide</span>
              </h2>
              <span
                className="hidden h-px w-16 bg-gradient-to-l from-transparent to-signal/70 sm:block md:w-28"
                aria-hidden="true"
              />
            </div>

            <p className="mx-auto mt-3.5 max-w-xl text-[15px] leading-relaxed text-body">
              Building modern, scalable, and user-focused web, desktop, and geospatial solutions.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              direction={getServiceDirection(index)}
              delay={(index % 3) * 0.08}
              className="h-full"
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
