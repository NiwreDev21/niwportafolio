import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Código que no necesitas explicar. Se lee solo, se mantiene solo y no molesta.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "No me conformo con 'funciona'. Me importa que vuele y que el usuario lo note.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Construir en equipo no es opcional. Es la forma en que mejores cosas salen a producción.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Me gusta probar lo nuevo, pero sin perder de vista lo que realmente importa: solucionar problemas.",
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
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Ingeniero de experiencias digitales
              <span className="font-serif italic font-normal text-white">
                {" "}
                para el mundo moderno.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy Erwin Patiño, Ingeniero de Sistemas apasionado por el desarrollo web 
                y la creación de soluciones digitales modernas. Disfruto construir aplicaciones 
                funcionales, limpias y fáciles de usar que resuelvan problemas reales 
                y mejoren experiencias cotidianas.
              </p>
              <p>
                Trabajo con tecnologías como React, Next.js, TypeScript, JavaScript 
                y herramientas modernas de frontend. Mejorando constantemente mis habilidades 
                a través de proyectos personales y práctica real. Mi enfoque está en escribir 
                código limpio, construir interfaces responsive y desarrollar aplicaciones 
                escalables con gran atención al detalle.
              </p>
              <p>
                Siempre estoy buscando nuevos desafíos, oportunidades para crecer 
                y formas de transformar ideas en productos digitales que generen 
                un impacto real.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “Mi objetivo es construir soluciones digitales limpias, modernas y prácticas 
                que resuelvan problemas reales y creen mejores experiencias para los usuarios.”
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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