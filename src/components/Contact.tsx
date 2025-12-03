import { BlurFade } from './magicui/blur-fade';
import ShimmerButton from './magicui/shimmer-button';
import { Mail, Phone, Clock, Send, CheckCircle, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "contato@gabrielaviana.arq.br",
        link: "mailto:contato@gabrielaviana.arq.br"
    },
    {
        icon: Phone,
        label: "WhatsApp",
        value: "+55 (31) 99999-9999",
        link: "https://wa.me/5531999999999"
    },
    {
        icon: Instagram,
        label: "Instagram",
        value: "@gabrielavianarquitetura",
        link: "https://www.instagram.com/gabrielavianarquitetura/"
    },
    {
        icon: Clock,
        label: "Horário",
        value: "Seg-Sex: 9h-18h",
        link: null
    },
];

const benefits = [
    "Consultoria gratuita",
    "Projetos personalizados",
    "Acompanhamento total",
    "Garantia de qualidade"
];

const Contact = () => {
    return (
        <footer className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 py-16">
                <div className="container-custom">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <BlurFade delay={0.1} inView>
                            <h2
                                className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-tight"
                                style={{ color: '#FFFFFF' }}
                            >
                                Vamos Criar Algo
                                <span className="block mt-2" style={{ color: '#c67d63' }}>Extraordinário Juntos</span>
                            </h2>
                            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#FFFFFF', opacity: 0.9 }}>
                                Entre em contato e transforme sua visão em realidade
                            </p>
                        </BlurFade>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">

                        {/* Left Side - Info */}
                        <div>
                            <BlurFade delay={0.2} inView>
                                {/* Benefits */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-heading font-bold mb-4" style={{ color: '#FFFFFF' }}>
                                        Por que escolher Gabriela Viana?
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {benefits.map((benefit, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-center gap-2 p-3 rounded-lg"
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                                                    backdropFilter: 'blur(10px)',
                                                }}
                                            >
                                                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#c67d63' }} />
                                                <span className="text-sm font-medium" style={{ color: '#FFFFFF' }}>{benefit}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Info Cards */}
                                <div>
                                    <h3 className="text-xl font-heading font-bold mb-4" style={{ color: '#FFFFFF' }}>
                                        Informações de Contato
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {contactInfo.map((info, index) => (
                                            <BlurFade key={index} delay={0.3 + index * 0.1} inView>
                                                <motion.div
                                                    whileHover={{ y: -3 }}
                                                    className="p-4 rounded-lg"
                                                    style={{
                                                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                                                        backdropFilter: 'blur(10px)',
                                                        border: '1px solid rgba(255, 255, 255, 0.15)',
                                                    }}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div
                                                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                                            style={{ backgroundColor: 'rgba(198, 125, 99, 0.3)' }}
                                                        >
                                                            <info.icon className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-xs uppercase tracking-wider mb-1" style={{ color: '#FFFFFF', opacity: 0.7 }}>
                                                                {info.label}
                                                            </p>
                                                            {info.link ? (
                                                                <a
                                                                    href={info.link}
                                                                    target={info.link.startsWith('http') ? '_blank' : undefined}
                                                                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                                    className="text-sm font-semibold hover:opacity-80 transition-opacity break-words"
                                                                    style={{ color: '#FFFFFF' }}
                                                                >
                                                                    {info.value}
                                                                </a>
                                                            ) : (
                                                                <p className="text-sm font-semibold" style={{ color: '#FFFFFF' }}>{info.value}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </BlurFade>
                                        ))}
                                    </div>
                                </div>
                            </BlurFade>
                        </div>

                        {/* Right Side - Form */}
                        <div>
                            <BlurFade delay={0.4} inView>
                                <div
                                    className="p-8 rounded-xl"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.15)'
                                    }}
                                >
                                    <h3 className="text-2xl font-heading font-bold mb-2" style={{ color: '#FFFFFF' }}>
                                        Solicite uma Consultoria
                                    </h3>
                                    <p className="mb-6 text-sm" style={{ color: '#FFFFFF', opacity: 0.85 }}>
                                        Preencha o formulário e entrarei em contato em até 24 horas
                                    </p>

                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold mb-2" style={{ color: '#FFFFFF' }}>
                                                    Nome Completo *
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="João Silva"
                                                    required
                                                    className="w-full rounded-lg p-3 text-sm font-medium focus:outline-none transition-all"
                                                    style={{
                                                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                                        border: '2px solid rgba(255, 255, 255, 0.2)',
                                                        color: '#FFFFFF'
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold mb-2" style={{ color: '#FFFFFF' }}>
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="joao@email.com"
                                                    required
                                                    className="w-full rounded-lg p-3 text-sm font-medium focus:outline-none transition-all"
                                                    style={{
                                                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                                        border: '2px solid rgba(255, 255, 255, 0.2)',
                                                        color: '#FFFFFF'
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold mb-2" style={{ color: '#FFFFFF' }}>
                                                    Telefone *
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder="(31) 99999-9999"
                                                    required
                                                    className="w-full rounded-lg p-3 text-sm font-medium focus:outline-none transition-all"
                                                    style={{
                                                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                                        border: '2px solid rgba(255, 255, 255, 0.2)',
                                                        color: '#FFFFFF'
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold mb-2" style={{ color: '#FFFFFF' }}>
                                                    Tipo de Projeto
                                                </label>
                                                <select
                                                    className="w-full rounded-lg p-3 text-sm font-medium focus:outline-none transition-all"
                                                    style={{
                                                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                                        border: '2px solid rgba(255, 255, 255, 0.2)',
                                                        color: '#FFFFFF'
                                                    }}
                                                >
                                                    <option value="" className="bg-primary text-white">Selecione...</option>
                                                    <option value="residencial" className="bg-primary text-white">Residencial</option>
                                                    <option value="comercial" className="bg-primary text-white">Comercial</option>
                                                    <option value="reforma" className="bg-primary text-white">Reforma</option>
                                                    <option value="consultoria" className="bg-primary text-white">Consultoria</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold mb-2" style={{ color: '#FFFFFF' }}>
                                                Mensagem *
                                            </label>
                                            <textarea
                                                rows={4}
                                                placeholder="Conte-me sobre seu projeto..."
                                                required
                                                className="w-full rounded-lg p-3 text-sm font-medium focus:outline-none transition-all resize-none"
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                                    border: '2px solid rgba(255, 255, 255, 0.2)',
                                                    color: '#FFFFFF'
                                                }}
                                            />
                                        </div>

                                        <ShimmerButton
                                            className="w-full px-6 py-4 text-base font-bold flex items-center justify-center gap-2"
                                            shimmerColor="#ffffff"
                                            background="#c67d63"
                                        >
                                            <Send className="w-5 h-5" />
                                            Enviar Solicitação
                                        </ShimmerButton>

                                        <p className="text-xs text-center" style={{ color: '#FFFFFF', opacity: 0.6 }}>
                                            Ao enviar, você concorda com nossa política de privacidade
                                        </p>
                                    </form>
                                </div>
                            </BlurFade>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <p className="text-sm" style={{ color: '#FFFFFF', opacity: 0.7 }}>
                            © 2024 Gabriela Viana Arquitetura. Todos os direitos reservados.
                        </p>
                        <div className="flex justify-center gap-6 mt-4">
                            <a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF', opacity: 0.7 }}>
                                Política de Privacidade
                            </a>
                            <a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#FFFFFF', opacity: 0.7 }}>
                                Termos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
