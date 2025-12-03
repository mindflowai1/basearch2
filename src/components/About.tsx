import { motion } from 'framer-motion';
import { BlurFade } from './magicui/blur-fade';
import { Award, Users, Building2 } from 'lucide-react';

const stats = [
    { icon: Building2, value: "500+", label: "Projetos Concluídos" },
    { icon: Users, value: "300+", label: "Clientes Satisfeitos" },
    { icon: Award, value: "15+", label: "Anos de Experiência" },
];

const About = () => {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Side */}
                    <div className="relative">
                        <BlurFade delay={0.2} inView>
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Architectural Detail"
                                    className="w-full h-[500px] lg:h-[600px] object-cover"
                                />
                            </div>
                        </BlurFade>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-secondary/30 rounded-lg -z-10 hidden lg:block" />

                        {/* Floating Card */}
                        <BlurFade delay={0.4} inView>
                            <motion.div
                                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl border border-border max-w-xs"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                                        <Award className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-heading font-bold text-primary">15+</p>
                                        <p className="text-sm text-muted-foreground">Anos de Excelência</p>
                                    </div>
                                </div>
                            </motion.div>
                        </BlurFade>
                    </div>

                    {/* Text Side */}
                    <div>
                        <BlurFade delay={0.3} inView>
                            <span className="text-secondary uppercase tracking-widest text-sm font-semibold">
                                Sobre Nós
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6 leading-tight">
                                Criando Espaços que
                                <span className="block text-secondary italic">Inspiram Vida</span>
                            </h2>
                        </BlurFade>

                        <BlurFade delay={0.5} inView>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Somos especialistas em transformar ambientes comuns em espaços extraordinários.
                                Nossa filosofia combina funcionalidade, estética e sustentabilidade para criar
                                projetos que resistem ao tempo.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Cada projeto é uma jornada única. Escutamos suas necessidades, estudamos o espaço
                                e criamos soluções personalizadas que refletem sua personalidade e estilo de vida.
                            </p>
                        </BlurFade>

                        {/* Stats Grid */}
                        <BlurFade delay={0.7} inView>
                            <div className="grid grid-cols-3 gap-6 mt-12">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                                            <stat.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <p className="text-3xl font-heading font-bold text-primary mb-1">{stat.value}</p>
                                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </BlurFade>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
