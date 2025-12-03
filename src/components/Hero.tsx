import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { BlurFade } from './magicui/blur-fade';
import DotPattern from './magicui/dot-pattern';
import ShimmerButton from './magicui/shimmer-button';
import { cn } from '@/lib/utils';

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
            {/* Dot Pattern Background */}
            <DotPattern
                className={cn(
                    "opacity-30",
                    "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                )}
            />

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 text-center px-4 py-20">
                <BlurFade delay={0.2} inView>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
                        Arquitetura que
                        <span className="block text-secondary italic mt-2">Transforma Vidas</span>
                    </h1>
                </BlurFade>

                <BlurFade delay={0.4} inView>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                        Projetos personalizados que unem funcionalidade, beleza e sustentabilidade.
                        Transformamos sua visão em um espaço único que reflete quem você é.
                    </p>
                </BlurFade>

                <BlurFade delay={0.6} inView>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <ShimmerButton
                            className="px-8 py-4 text-base font-semibold text-white"
                            shimmerColor="#ffffff"
                            background="#4a5d4f"
                        >
                            Agende uma Consultoria Gratuita
                        </ShimmerButton>
                        <a
                            href="#portfolio"
                            className="px-8 py-4 text-base font-semibold border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            Conheça Nossos Projetos
                        </a>
                    </div>
                </BlurFade>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-sm text-muted-foreground">Explore</span>
                    <ArrowDown className="text-primary w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
