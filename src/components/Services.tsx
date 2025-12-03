import { motion } from 'framer-motion';
import { BlurFade } from './magicui/blur-fade';
import { Home, PenTool, Trees, Lightbulb, Ruler, Palette } from 'lucide-react';

const services = [
    {
        icon: Home,
        title: "Arquitetura Residencial",
        description: "Projetos completos de casas e apartamentos que refletem seu estilo de vida e necessidades únicas."
    },
    {
        icon: PenTool,
        title: "Design de Interiores",
        description: "Ambientes internos cuidadosamente planejados com foco em estética, funcionalidade e conforto."
    },
    {
        icon: Trees,
        title: "Paisagismo",
        description: "Integração harmoniosa entre arquitetura e natureza, criando espaços externos inspiradores."
    },
    {
        icon: Lightbulb,
        title: "Consultoria de Iluminação",
        description: "Projetos luminotécnicos que valorizam cada ambiente e criam atmosferas únicas."
    },
    {
        icon: Ruler,
        title: "Reforma e Retrofit",
        description: "Renovação e modernização de espaços existentes com soluções criativas e sustentáveis."
    },
    {
        icon: Palette,
        title: "Identidade Visual",
        description: "Desenvolvimento de conceitos visuais que traduzem a essência do seu projeto."
    },
];

const Services = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <BlurFade delay={0.1} inView>
                        <span className="text-secondary uppercase tracking-widest text-sm font-semibold">
                            Serviços
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6">
                            Soluções Completas em
                            <span className="block text-secondary italic">Arquitetura e Design</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Oferecemos um portfólio completo de serviços para transformar sua visão em realidade
                        </p>
                    </BlurFade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <BlurFade key={index} delay={0.1 * index} inView>
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="group p-8 bg-white rounded-lg border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-300 h-full"
                            >
                                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-4 text-primary group-hover:text-secondary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-6 pt-6 border-t border-border">
                                    <button className="text-primary group-hover:text-secondary font-semibold flex items-center gap-2 transition-colors">
                                        Saiba Mais
                                        <motion.span
                                            className="inline-block"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                        >
                                            →
                                        </motion.span>
                                    </button>
                                </div>
                            </motion.div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
