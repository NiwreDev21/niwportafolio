const experiences = [
  {
    period: "Año — Presente",
    role: "Tu Rol",
    company: "Nombre del Banco",
    description:
      "Descripción de tus responsabilidades y logros en el banco. Ej: Desarrollo de la banca en línea, implementación de nuevos módulos, optimización de rendimiento, etc.",
    technologies: ["Tecnología 1", "Tecnología 2", "Tecnología 3"],
    current: true,
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    company: "Entel Bolivia",
    description:
      "Desarrollé una aplicación móvil con OCR para escanear documentos, reduciendo tiempos de procesamiento en un 60%. Colaboré con el equipo de producto para implementar nuevas funcionalidades y mejorar la experiencia de usuario.",
    technologies: ["React Native", "OCR", "TypeScript", "Node.js"],
    current: false,
  },
  {
    period: "2021 — 2023",
    role: "Web Developer",
    company: "Agencia Digital Creativa",
    description:
      "Construí y mantuve más de 15 sitios web responsivos para clientes de diversos sectores. Optimicé el rendimiento de las aplicaciones, logrando un aumento del 40% en velocidad de carga.",
    technologies: ["React", "JavaScript", "Tailwind", "WordPress"],
    current: false,
  },
  {
    period: "2020 — 2021",
    role: "Desarrollador Trainee",
    company: "StartUp Tech Solutions",
    description:
      "Colaboré en el desarrollo de dashboards interactivos para análisis de datos. Participé en migraciones de código legacy a tecnologías modernas, mejorando la mantenibilidad del sistema.",
    technologies: ["Vue.js", "Python", "SQL", "Git"],
    current: false,
  },
  {
    period: "2019 — 2020",
    role: "Freelance Web Developer",
    company: "Independiente",
    description:
      "Desarrollé soluciones web a medida para pequeños negocios y emprendedores. Implementé tiendas en línea, landing pages y sistemas de gestión de contenido personalizados.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Trayectoria profesional
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experiencia que
            <span className="font-serif italic font-normal text-white">
              {" "}
              habla por sí sola.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Un recorrido por mi crecimiento profesional, desde mis inicios hasta 
            desarrollar productos escalables y liderar equipos.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <>
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                      <span className="absolute inset-0 rounded-full bg-primary animate-pulse" />
                    </>
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                    {/* Badge "Actual" para trabajo presente */}
                    {exp.current && (
                      <div className="inline-block mb-3 px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full border border-primary/50">
                        Actual
                      </div>
                    )}
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/30 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};