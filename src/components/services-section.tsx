import { Button } from "@/src/components/ui/button"
import { ArrowRight, FileText, Layers, Printer, BookOpen, Folder, MailIcon } from "lucide-react"

const services = [
  {
    icon: Folder,
    title: "Carpetas",
    description: "Disponibles con o sin solapa, ofrecen protección adicional y una presentación profesional ideal para empresas, estudios, colegios o eventos."
  },
  {
    icon: Layers,
    title: "Flayers",
    description: "Disponibles en acabado brillo o mate, son ideales para promociones, eventos, campañas publicitarias y comunicación corporativa"
  },
  {
    icon: FileText,
    title: "Papel de Carta",
    description: "Nuestro papel de carta de 90 gramos es ideal para correspondencia corporativa, cartas comerciales, facturas, notas de empresa y comunicaciones oficiale"
  },
  {
    icon: MailIcon,
    title: "Sobres",
    description: "Nuestros sobres son ideales para envíos comerciales, facturación, correspondencia corporativa y mailing publicitario"
  },
  {
    icon: MailIcon,
    title: "Tarjetas de Visita",
    description: "Nuestras tarjetas de visita en cartulina couché de 350 gramos están diseñadas para ofrecer una presentación profesional, resistente y de alta calidad. Disponibles en acabado brillo o mate"
  }
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent tracking-wider uppercase mb-4">Nuestros Servicios</p>
          <h2 className="font-serif text-3xl lg:text-5xl font-medium text-foreground leading-tight text-balance">
            Soluciones de impresion para cada necesidad
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 lg:p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <service.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-card border border-border rounded-lg">
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-xl font-medium text-foreground">¿Listo para empezar?</h3>
              <p className="text-sm text-muted-foreground mt-1">Accede a nuestra plataforma y realiza tu pedido online</p>
            </div>
            <Button size="lg" className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
              Realizar Pedido
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
