import React, { useState, useEffect, JSX } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, ArrowRight, Menu, X, GraduationCap, Shield } from 'lucide-react';

interface Project {
    name: string;
    description: string;
    link: string;
    tech: string[];
    categories: string[];
}

interface Service {
    icon: JSX.Element;
    title: string;
    projects: string;
    color: string;
    description: string;
    highlight: string;
}

interface AcademicMilestone {
    title: string;
    institution: string;
    year: string;
    description: string;
    icon: JSX.Element;
}

const projects: Project[] = [
    {
        name: "SocialMediaApp",
        description: "Modern social platform built with Next.js 14.2, featuring real-time interactions, state management with Recoil, and beautiful UI with Chakra UI.",
        link: "https://github.com/amit2647/SocialMediaApp",
        tech: ["Next.js", "Recoil", "Chakra UI", "Firebase"],
        categories: ["Full Stack", "Frontend"]
    },
    {
        name: "OldAgeHome",
        description: "Compassionate Android application empowering NGOs to better support elderly community members with comprehensive care management.",
        link: "https://github.com/amit2647/oldagehome",
        tech: ["Android", "Firebase", "Java"],
        categories: ["Mobile", "Healthcare"]
    },
    {
        name: "Patient Management",
        description: "Comprehensive healthcare records management system designed for efficient patient data organization and medical workflow optimization.",
        link: "https://github.com/amit2647/patient-management",
        tech: ["React", "Node.js", "MongoDB"],
        categories: ["Full Stack", "Healthcare"]
    },
    {
        name: "Game Lobby System",
        description: "Scalable multiplayer backend architecture featuring real-time communication, intelligent matchmaking, and secure authentication.",
        link: "https://github.com/amit2647/game-lobby-system",
        tech: ["Spring Boot", "WebSockets", "JWT", "Redis"],
        categories: ["Backend", "Real-time"]
    },
    {
        name: "ToDoList",
        description: "Elegant task management application combining intuitive design with powerful features for productivity enhancement.",
        link: "https://github.com/amit2647/todolist",
        tech: ["React", "Tailwind", "Clerk", "Supabase"],
        categories: ["Frontend", "Productivity"]
    },
    {
        name: "Second Brain",
        description: "Knowledge graph application enabling seamless information organization through interconnected markdown-based notes and insights.",
        link: "https://github.com/amit2647/second-brain",
        tech: ["React", "TypeScript", "Markdown"],
        categories: ["Knowledge", "Productivity"]
    }
];


const services: Service[] = [
    {
        icon: <Code className="w-8 h-8" />,
        title: "Full Stack Development",
        projects: "6+",
        color: "from-green-500 to-emerald-500",
        description: "React, Angular, Spring Boot, Flask-python, PostgreSQL",
        highlight: "Enterprise Experience"
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Mobile Development",
        projects: "3+",
        color: "from-blue-500 to-cyan-500",
        description: "Android, Java, Firebase",
        highlight: "Native Apps"
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "AI & Machine Learning",
        projects: "4+",
        color: "from-purple-500 to-pink-500",
        description: "Python, Computer Vision, ML",
        highlight: "Certified Expert"
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Cybersecurity & Zero Trust",
        projects: "1+",
        color: "from-red-500 to-orange-500",
        description: "Zero Trust as a Service, Secure Authentication",
        highlight: "ZTaaS MVP"
    }
];

const academicMilestones: AcademicMilestone[] = [
    {
        title: "B.Tech in Computer Science (AI Honors)",
        institution: "MGM Jawaharlal Nehru Engineering College, Aurangabad",
        year: "2020 – 2024",
        description: "Graduated with honors specializing in Artificial Intelligence, focusing on machine learning and computer vision.",
        icon: <GraduationCap className="w-8 h-8" />
    },
    {
        title: "IELTS Certification",
        institution: "British Council",
        year: "2024",
        description: "Achieved a score of 6.5 bands, demonstrating proficiency in English for professional and academic contexts.",
        icon: <GraduationCap className="w-8 h-8" />
    },
    {
        title: "AI and ML Certifications",
        institution: "DeepLearning.AI, IBM, University of Washington",
        year: "2023 – 2024",
        description: "Completed courses including AI For Everyone, Introduction to AI, Machine Learning Foundations, and more.",
        icon: <GraduationCap className="w-8 h-8" />
    }
];

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const categories: string[] = ["All", ...Array.from(new Set(projects.flatMap(p => p.categories)))];

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project =>
            project.categories.includes(activeFilter)
        );

    useEffect(() => {
        const handleMouseMove = (e: { clientX: number; clientY: number }) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen font-sans relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-48 h-48 bg-yellow-400/8 rounded-full blur-2xl transition-all duration-700 ease-out"
                    style={{
                        left: mousePosition.x - 96,
                        top: mousePosition.y - 96,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500/8 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-500/8 rounded-full blur-2xl animate-bounce"
                    style={{ animationDuration: '3s' }}
                />
            </div>

            {/* Header */}
            <header className="relative z-50 flex items-center justify-between p-6 backdrop-blur-md bg-gray-900/50 border-b border-gray-700/50">
                <div className="text-yellow-400 text-3xl font-bold tracking-wider animate-pulse">AM</div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    {['Expertise', 'Works', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative group hover:text-yellow-400 transition-colors duration-300"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-yellow-400 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-md transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
                    {['Services', 'Works', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-yellow-400 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 min-h-screen">
                <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold text-yellow-400 uppercase tracking-widest animate-fade-in">
                            Computer Science Graduate • Full Stack Developer • Research Associate
                        </h2>
                        <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                                Amit
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                Mahorkar
                            </span>
                        </h1>
                    </div>

                    <p className="text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed">
                        Computer Science graduate with AI honors, bringing 1+ years of industry experience in
                        <span className="text-yellow-400"> full-stack development</span>,
                        <span className="text-yellow-400"> machine learning</span>, and
                        <span className="text-yellow-400"> cybersecurity</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                        <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center gap-2">
                            Let's Collaborate
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>

                        <div className="flex space-x-4">
                            {[
                                { Icon: Linkedin, link: "https://linkedin.com/in/amitmahorkar", label: "LinkedIn" },
                                { Icon: Github, link: "https://github.com/amit2647", label: "GitHub" },
                                { Icon: Mail, link: "mailto:amitmahorkar798@gmail.com", label: "Email" }
                            ].map(({ Icon, link, label }) => (
                                <a
                                    key={label}
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 bg-gray-800/50 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 hover:scale-110 group backdrop-blur-sm border border-gray-700/50"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl blur-2xl transform rotate-6" />
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                            alt="Amit Mahorkar"
                            className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-2xl border-2 border-gray-700/50"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 p-4 rounded-xl font-bold shadow-lg">
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative z-10 p-8 lg:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { number: "1+", label: "year Industry", description: "Research Intern at ApTSi", highlight: "Experience" },
                        { number: "10+", label: "Projects Built", description: "Full-stack & AI/ML solutions", highlight: "Portfolio" },
                        { number: "5+", label: "AI Certifications", description: "IBM, DeepLearning.AI & more", highlight: "Certified" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                            <div className="text-lg font-semibold mb-1">{stat.label}</div>
                            <div className="text-xs text-yellow-400 uppercase tracking-wide mb-2">{stat.highlight}</div>
                            <div className="text-gray-400 text-sm">{stat.description}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="relative z-10 p-8 lg:p-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        My <span className="text-yellow-400">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Computer Science graduate with AI specialization and hands-on industry experience in modern tech stacks and cybersecurity
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-105"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <div className="text-xs text-yellow-400 uppercase tracking-wide mb-3">{service.highlight}</div>
                            <div className="text-2xl font-bold text-yellow-400 mb-2">{service.projects}</div>
                            <div className="text-gray-400 text-sm mb-3">Projects Built</div>
                            <div className="text-gray-300 text-sm">{service.description}</div>

                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="works" className="relative z-10 p-8 lg:p-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Featured <span className="text-yellow-400">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        A showcase of my latest work spanning web applications, mobile apps, and innovative solutions
                    </p>

                    {/* Project Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                                    ? 'bg-yellow-400 text-gray-900'
                                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl backdrop-blur-sm border border-gray-700/50 overflow-hidden hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-105"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors duration-300">
                                        {project.name}
                                    </h3>
                                    <span className="px-3 py-1 text-xs bg-yellow-400/20 text-yellow-400 rounded-full">
                                        {project.categories.join(', ')}
                                    </span>
                                </div>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-300"
                                >
                                    View Project
                                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Academic Milestones Section */}
            <section id="about" className="relative z-10 p-8 lg:p-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Academic <span className="text-yellow-400">Milestones</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A journey through my academic achievements and certifications, showcasing my commitment to learning and growth
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {academicMilestones.map((milestone, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-105"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {milestone.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                            <div className="text-sm font-semibold text-gray-300 mb-2">{milestone.institution}</div>
                            <div className="text-xs text-yellow-400 uppercase tracking-wide mb-3">{milestone.year}</div>
                            <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative z-10 p-8 lg:p-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Let's Build Something <span className="text-yellow-400">Amazing</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Card 1 */}
                        <div className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-105 grid place-items-center">
                            <div>
                                <h3 className="font-semibold mb-2">Ready to Collaborate?</h3>
                                <p className="text-gray-400 text-sm">Let's discuss your next project</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-105 grid place-items-center">
                            <div className="text-center">
                                <p className="text-gray-300 font-medium">
                                    "Creativity is intelligence having fun"
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-105 grid place-items-center">
                            <a
                                href="mailto:amitmahorkar798@gmail.com"
                                className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-300"
                            >
                                amitmahorkar798@gmail.com
                            </a>
                        </div>
                    </div>


                    <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center gap-3 mx-auto">
                        Get In Touch
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 p-8 border-t border-gray-800/50 text-center text-gray-400">
                <p>&copy; 2024 Amit Mahorkar. Crafted with passion and precision.</p>
            </footer>
        </div>
    );
};

export default Portfolio;