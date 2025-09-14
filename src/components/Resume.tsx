import type { Education, Experience, Skill } from '@/types'

// Sample data - you'll replace with your actual info
const education: Education = {
    id: "1",
    institution: "Georgia Institute of Technology",
    degree: "Bachelor of Science",
    major: "Computer Science",
    graduationDate: "Expected May 2026",
    gpa: "3.8",
    coursework: ["Data Structures", "Algorithms", "Machine Learning", "Computer Vision"]
}

const experiences: Experience[] = [
    {
        id: "1",
        company: "Amazon",
        position: "SDE Intern (Upcoming)",
        startDate: "Summer 2025",
        endDate: "Present",
        description: [
            "Preparing for software engineering internship",
            "Practicing data structures and algorithms",
            "Working on full-stack development projects"
        ],
        technologies: ["Java", "Python", "AWS", "React"]
    },
    // Add more experiences here
]

const skills: Skill[] = [
    {
        category: "Programming Languages",
        items: ["Python", "Java", "TypeScript", "C", "JavaScript"]
    },
    {
        category: "Technologies",
        items: ["React", "Next.js", "Node.js", "TailwindCSS", "Git"]
    },
    {
        category: "Machine Learning",
        items: ["PyTorch", "OpenCV", "YOLO", "Scikit-learn", "NumPy"]
    }
]

const Resume = () => {
    return (
        <section
            id="resume"
            className="section-spacing"
            style={{ background: 'var(--background)' }}
        >
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    {/* Section header */}
                    <h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                        style={{ color: 'var(--foreground)' }}
                    >
                        Resume
                    </h2>

                    <div className="space-y-16">
                        {/* Education */}
                        <div>
                            <h3
                                className="text-2xl font-semibold mb-8"
                                style={{ color: 'var(--foreground)' }}
                            >
                                Education
                            </h3>
                            <div className="border-l-2 border-gray-300 pl-8">
                                <div className="space-y-2">
                                    <h4
                                        className="text-xl font-medium"
                                        style={{ color: 'var(--foreground)' }}
                                    >
                                        {education.degree} in {education.major}
                                    </h4>
                                    <p
                                        className="text-lg opacity-80"
                                        style={{ color: 'var(--foreground)' }}
                                    >
                                        {education.institution}
                                    </p>
                                    <p
                                        className="opacity-60"
                                        style={{ color: 'var(--foreground)' }}
                                    >
                                        {education.graduationDate} • GPA: {education.gpa}
                                    </p>
                                    {education.coursework && (
                                        <p
                                            className="opacity-60 text-sm"
                                            style={{ color: 'var(--foreground)' }}
                                        >
                                            Relevant Coursework: {education.coursework.join(', ')}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div>
                            <h3
                                className="text-2xl font-semibold mb-8"
                                style={{ color: 'var(--foreground)' }}
                            >
                                Experience
                            </h3>
                            <div className="space-y-8">
                                {experiences.map((exp) => (
                                    <div key={exp.id} className="border-l-2 border-gray-300 pl-8">
                                        <div className="space-y-3">
                                            <h4
                                                className="text-xl font-medium"
                                                style={{ color: 'var(--foreground)' }}
                                            >
                                                {exp.position}
                                            </h4>
                                            <p
                                                className="text-lg opacity-80"
                                                style={{ color: 'var(--foreground)' }}
                                            >
                                                {exp.company} • {exp.startDate} - {exp.endDate}
                                            </p>
                                            <ul className="list-disc list-inside space-y-1">
                                                {exp.description.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="opacity-70"
                                                        style={{ color: 'var(--foreground)' }}
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {exp.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 rounded-full text-sm border"
                                                        style={{
                                                            color: 'var(--foreground)',
                                                            borderColor: 'rgba(128, 128, 128, 0.3)',
                                                            backgroundColor: 'rgba(128, 128, 128, 0.1)'
                                                        }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <h3
                                className="text-2xl font-semibold mb-8"
                                style={{ color: 'var(--foreground)' }}
                            >
                                Skills
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {skills.map((skillGroup) => (
                                    <div key={skillGroup.category}>
                                        <h4
                                            className="text-lg font-medium mb-4"
                                            style={{ color: 'var(--foreground)' }}
                                        >
                                            {skillGroup.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-2 rounded-lg text-sm"
                                                    style={{
                                                        color: 'var(--foreground)',
                                                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                                        border: '1px solid rgba(59, 130, 246, 0.2)'
                                                    }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Download button with cleaner icon */}
                        <div className="text-center pt-8">
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:opacity-80 border-2"
                                style={{
                                    color: 'var(--background)',
                                    backgroundColor: 'var(--foreground)',
                                    borderColor: 'var(--foreground)'
                                }}
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume
