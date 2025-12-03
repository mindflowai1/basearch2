import { BlurFade } from './magicui/blur-fade';
import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Heart } from 'lucide-react';
import gabrielaImg from '../assets/gabriela.png';

const stats = [
    { icon: Award, value: "9", label: "Anos de Experiência", suffix: "+" },
    { icon: Users, value: "200", label: "Projetos Realizados", suffix: "+" },
    { icon: Heart, value: "100", label: "Clientes Satisfeitos", suffix: "%" },
];

const values = [
    {
        icon: Lightbulb,
        title: "Criatividade",
        description: "Cada projeto é único e reflete a personalidade de quem o habita"
    },
    {
        icon: Heart,
        title: "Empatia",
        description: "Ouvir e compreender as necessidades dos clientes é fundamental"
    },
    {
        icon: Award,
        title: "Excelência",
        description: "Compromisso com qualidade e atenção aos detalhes em cada etapa"
    },
];

const Architect = () => {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div
                className="absolute top-0 right-0 opacity-20 blur-3xl"
                style={{
                    width: '500px',
                    height: '500px',
                    backgroundColor: 'rgba(198, 125, 99, 0.2)',
                    borderRadius: '50%'
                }}
            />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Image Side */}
                    <div className="relative">
                        <BlurFade delay={0.2} inView>
                            <div className="relative">
                                {/* Main Image */}
                                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={gabrielaImg}
                                        alt="Gabriela Viana - Arquiteta"
                                        className="w-full h-auto object-cover"
                                        style={{ maxHeight: '700px' }}
                                    />
                                </div>

                                {/* Decorative Element */}
                                <div
                                    className="absolute -bottom-6 -right-6 w-full h-full border-4 rounded-2xl -z-10 hidden lg:block"
                                    style={{ borderColor: 'rgba(198, 125, 99, 0.3)' }}
                                />
                            </div>
                        </BlurFade>
                    </div>

                    {/* Content Side */}
                    <div>
                        <BlurFade delay={0.1} inView>
                            <span className="text-secondary uppercase tracking-widest text-sm font-semibold">
                                Conheça a Arquiteta
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6 leading-tight">
                                Gabriela Viana
                                <span className="block text-secondary italic mt-2">Transformando Espaços em Lares</span>
                            </h2>
                        </BlurFade>

                        <BlurFade delay={0.3} inView>
                            <div className="space-y-6 mb-10">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Olá! Pode me chamar de <strong className="text-primary">Gabi</strong>. Tenho 34 anos e me formei em
                                    Arquitetura e Urbanismo pela <strong className="text-primary">UFSJ em 2016</strong>.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Durante a faculdade, tive a oportunidade de estudar nos <strong className="text-primary">Estados Unidos</strong> após
                                    ganhar uma bolsa de estudos. Essa experiência internacional ampliou minha visão sobre arquitetura
                                    e design, permitindo que eu explorasse diferentes estilos e abordagens.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Minha paixão é criar <strong className="text-primary">ambientes que contam histórias</strong> e refletem
                                    a essência de quem os habita. Acredito que cada projeto é uma oportunidade única de transformar
                                    sonhos em realidade, unindo funcionalidade, beleza e sustentabilidade.
                                </p>
                            </div>
                        </BlurFade>

                        {/* Stats */}
                        <BlurFade delay={0.5} inView>
                            <div className="grid grid-cols-3 gap-6 mb-10">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5 }}
                                        className="text-center p-4 rounded-xl"
                                        style={{
                                            backgroundColor: 'rgba(198, 125, 99, 0.08)',
                                            border: '1px solid rgba(198, 125, 99, 0.15)'
                                        }}
                                    >
                                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/20 flex items-center justify-center">
                                            <stat.icon className="w-6 h-6 text-secondary" />
                                        </div>
                                        <p className="text-3xl font-heading font-bold text-primary mb-1">
                                            {stat.value}{stat.suffix}
                                        </p>
                                        <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </BlurFade>

                        {/* Values */}
                        <BlurFade delay={0.7} inView>
                            <div>
                                <h3 className="text-2xl font-heading font-bold mb-6 text-primary">Meus Valores</h3>
                                <div className="space-y-4">
                                    {values.map((value, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors"
                                        >
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <value.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-heading font-bold text-primary mb-1">{value.title}</h4>
                                                <p className="text-muted-foreground">{value.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Architect;
