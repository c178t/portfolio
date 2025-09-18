import type { PersonalInfo } from '@/types'

// You'll replace this with your actual info
const personalInfo: PersonalInfo = {
    name: "CIAN THOMAS",
    title: "Computer Science Student",
    bio: "I am a passionate computer science student at Georgia Tech with hands-on experience in machine learning, computer vision, and full-stack development. Currently working on fire detection systems using YOLO models and preparing for software engineering roles. I enjoy solving complex problems and building innovative solutions that make a real-world impact.",
    email: "ciangijothomas@gmail.com",
    github: "https://github.com/c178t",
    linkedin: "https://linkedin.com/in/cianthomas",
    location: "Atlanta, GA"
}

const Hero = () => {
    return ( 
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center section-spacing"
            style={{ background: 'var(--background)' }}
        >
            <div className="section-container">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Main heading */}
                    <h1
                        className="text-5xl md:text-7xl font-bold leading-tight"
                        style={{ color: 'var(--foreground)' }}
                    >
                        {personalInfo.name}
                    </h1>

                    {/* Subtitle */}
                    <h2
                        className="text-2xl md:text-3xl font-light opacity-80"
                        style={{ color: 'var(--foreground)' }}
                    >
                        {personalInfo.title}
                    </h2>

                    {/* Bio paragraph */}
                    <p
                        className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto opacity-70"
                        style={{ color: 'var(--foreground)' }}
                    >
                        {personalInfo.bio}
                    </p>

                    {/* Contact links */}
                    <div className="flex justify-center space-x-6 pt-8">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="px-6 py-3 rounded-full border-2 hover:opacity-70 transition-all duration-300"
                            style={{
                                color: 'var(--foreground)',
                                borderColor: 'var(--foreground)'
                            }}
                        >
                            Get In Touch
                        </a>
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full hover:opacity-70 transition-all duration-300"
                            style={{
                                color: 'var(--foreground)',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            GitHub
                        </a>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="animate-bounce">
                            <svg
                                className="w-6 h-6 opacity-50"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                style={{ color: 'var(--foreground)' }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
