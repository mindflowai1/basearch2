import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BlurFade } from './magicui/blur-fade';
import { ChevronLeft, ChevronRight, MapPin, Square } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Penthouse Contemporâneo",
        category: "Residencial de Luxo",
        location: "Itaim Bibi, São Paulo",
        area: "650m²",
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920",
        description: "Projeto exclusivo de cobertura duplex que une sofisticação e funcionalidade. Ambientes integrados com terraço gourmet, piscina infinita e vista privilegiada da cidade.",
    },
    {
        id: 2,
        title: "Residência Modernista",
        category: "Casa de Alto Padrão",
        location: "Morumbi, São Paulo",
        area: "480m²",
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920",
        description: "Casa térrea que celebra a arquitetura moderna brasileira. Grandes vãos, integração com jardim paisagístico e uso inteligente da luz natural.",
    },
    {
        id: 3,
        title: "Loft Industrial Chic",
        category: "Residencial Urbano",
        location: "Vila Madalena, São Paulo",
        area: "220m²",
        image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920",
        description: "Transformação de galpão industrial em residência contemporânea. Pé-direito duplo, estrutura metálica aparente e design autêntico.",
    },
    {
        id: 4,
        title: "Casa Sustentável",
        category: "Arquitetura Ecológica",
        location: "Granja Viana, Cotia",
        area: "380m²",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920",
        description: "Projeto bioclimático que respeita o meio ambiente. Painéis solares, captação de água da chuva e materiais sustentáveis em harmonia com a natureza.",
    },
    {
        id: 5,
        title: "Escritório Corporativo",
        category: "Comercial Premium",
        location: "Faria Lima, São Paulo",
        area: "800m²",
        image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1920",
        description: "Ambiente corporativo que inspira produtividade e criatividade. Salas colaborativas, tecnologia de ponta e design que reflete a identidade da empresa.",
    },
    {
        id: 6,
        title: "Apartamento Minimalista",
        category: "Design Contemporâneo",
        location: "Jardins, São Paulo",
        area: "180m²",
        image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1920",
        description: "Menos é mais neste projeto de linhas puras e paleta neutra. Mobiliário sob medida, iluminação estratégica e atenção aos detalhes.",
    },
];

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    // Autoplay - muda a cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section-padding bg-muted/20 relative overflow-hidden">
            {/* Background Elements */}
            <div
                className="absolute top-20 left-0 opacity-30 blur-3xl"
                style={{
                    width: '400px',
                    height: '400px',
                    backgroundColor: 'rgba(74, 93, 79, 0.1)',
                    borderRadius: '50%'
                }}
            />
            <div
                className="absolute bottom-20 right-0 opacity-30 blur-3xl"
                style={{
                    width: '400px',
                    height: '400px',
                    backgroundColor: 'rgba(198, 125, 99, 0.1)',
                    borderRadius: '50%'
                }}
            />

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <BlurFade delay={0.1} inView>
                        <span className="text-secondary uppercase tracking-widest text-sm font-semibold">
                            Portfólio
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6">
                            Projetos que Refletem
                            <span className="block text-secondary italic">Sua Essência</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Cada projeto é único e conta uma história. Descubra como transformamos sonhos em espaços reais,
                            onde funcionalidade e beleza caminham juntas.
                        </p>
                    </BlurFade>
                </div>

                {/* Main Featured Project */}
                <BlurFade delay={0.2} inView>
                    <div className="relative mb-12">
                        <motion.div
                            className="relative overflow-hidden rounded-3xl"
                            style={{ height: '600px' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Image */}
                            <motion.img
                                key={currentIndex}
                                src={projects[currentIndex].image}
                                alt={projects[currentIndex].title}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8 }}
                            />

                            {/* Gradient Overlay */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 80%)'
                                }}
                            />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12">
                                <div className="max-w-4xl">
                                    <motion.div
                                        key={`category-${currentIndex}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex items-center gap-4 mb-4"
                                    >
                                        <span
                                            className="uppercase tracking-wider text-sm font-bold"
                                            style={{ color: '#c67d63' }}
                                        >
                                            {projects[currentIndex].category}
                                        </span>
                                        <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>•</span>
                                        <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                            <Square className="w-4 h-4" />
                                            <span className="font-semibold">{projects[currentIndex].area}</span>
                                        </div>
                                    </motion.div>

                                    <motion.h3
                                        key={`title-${currentIndex}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4"
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        {projects[currentIndex].title}
                                    </motion.h3>

                                    <motion.p
                                        key={`desc-${currentIndex}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="text-lg md:text-xl mb-6 max-w-3xl leading-relaxed"
                                        style={{ color: 'rgba(255, 255, 255, 0.95)' }}
                                    >
                                        {projects[currentIndex].description}
                                    </motion.p>

                                    <motion.div
                                        key={`location-${currentIndex}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                        className="flex items-center gap-2"
                                        style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                                    >
                                        <MapPin className="w-5 h-5" />
                                        <span className="font-semibold">{projects[currentIndex].location}</span>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className="transition-all duration-300"
                                    style={{
                                        width: currentIndex === index ? '32px' : '8px',
                                        height: '8px',
                                        borderRadius: '4px',
                                        backgroundColor: currentIndex === index ? '#c67d63' : 'rgba(74, 93, 79, 0.3)'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </BlurFade>

                {/* Thumbnails */}
                <BlurFade delay={0.4} inView>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {projects.map((project, index) => (
                            <motion.button
                                key={project.id}
                                onClick={() => setCurrentIndex(index)}
                                whileHover={{ y: -5 }}
                                className="relative overflow-hidden rounded-xl group"
                                style={{
                                    height: '180px',
                                    opacity: currentIndex === index ? 1 : 0.6
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 transition-opacity duration-300"
                                    style={{
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
                                        opacity: currentIndex === index ? 1 : 0.5
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-3">
                                    <p
                                        className="text-xs font-bold line-clamp-2"
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        {project.title}
                                    </p>
                                </div>
                                {currentIndex === index && (
                                    <div
                                        className="absolute inset-0 border-2 rounded-xl"
                                        style={{ borderColor: '#c67d63' }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </BlurFade>

                {/* CTA */}
                <BlurFade delay={0.6} inView>
                    <div className="text-center mt-16">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-semibold text-lg hover:bg-secondary transition-colors duration-300 shadow-xl"
                        >
                            Vamos Criar Seu Projeto Juntos
                        </motion.a>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
};

export default Portfolio;
