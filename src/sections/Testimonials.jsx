import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Trabajar con Erwin fue una experiencia excelente. Entregó el proyecto a tiempo, con código limpio y una atención al detalle impresionante. Sin duda lo recomendaría para cualquier proyecto de desarrollo frontend.",
    author: "Carlos Méndez",
    role: "CTO, TechSolutions Bolivia",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    quote: "Erwin demostró un gran dominio de React y Next.js. Supo entender nuestras necesidades y propuso soluciones creativas que mejoraron el rendimiento de nuestra aplicación web. Un profesional confiable y proactivo.",
    author: "María Fernández",
    role: "Product Manager, Agencia Digital",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    quote: "Me impresionó la capacidad de Erwin para resolver problemas complejos de manera sencilla. Su comunicación fue clara durante todo el proceso y el resultado final superó nuestras expectativas.",
    author: "Javier Ríos",
    role: "Fundador, StartUp Creative",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    quote: "Erwin es un desarrollador muy talentoso y comprometido. Siempre dispuesto a ir más allá para garantizar la calidad del producto. Fue un placer colaborar con él en varios proyectos.",
    author: "Laura Paz",
    role: "Lead Developer, Software House",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Lo que dicen de mí
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Palabras de
            <span className="font-serif italic font-normal text-white">
              {" "}
              personas increíbles.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Testimonios de colegas y clientes con los que he tenido el placer de trabajar.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200 transition-all duration-500 hover:shadow-xl">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-lg md:text-xl leading-relaxed mb-8 pt-4 text-muted-foreground">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 transition-all duration-300 hover:ring-primary/50"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots with Counter */}
            <div className="flex items-center justify-between mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all transform hover:scale-110"
                onClick={previous}
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">
                  {activeIdx + 1} / {testimonials.length}
                </span>
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === activeIdx
                          ? "w-8 h-2 bg-primary"
                          : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Ir al testimonio ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all transform hover:scale-110"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};