import type { Education, Experience, Skill } from '@/types'

// Updated with actual resume information
const education: Education = {
    id: "1",
    institution: "Georgia Institute of Technology",
    degree: "Bachelor of Science",
    major: "Computer Science",
    graduationDate: "Expected May 2026",
    gpa: "4.0",
    //coursework: ["Data Structures", "Algorithms", "Machine Learning", "Computer Vision"]
}

const experiences: Experience[] = [
    {
        id: "1",
        company: "Amazon Web Services",
        position: "Software Development Engineering Intern",
        startDate: "May 2025",
        endDate: "July 2025",
        description: [
            "Built and deployed a customer-facing widget in AWS Support Console using TypeScript, React.js, and AWS SDK, enabling self-service issue remediation and reducing customer resolution time",
            "Created a reusable troubleshooting workflow with AWS Step Functions, reducing development time for future workflows by 35% and improving support efficiency",
            "Designed and deployed APIs using AWS Lambda for execution handling and API Gateway for deployment, ensuring scalable and reliable integration",
            "Automated infrastructure provisioning with AWS CloudFormation and CDK, integrating CI/CD pipelines to securely deliver widget, APIs, and workflows",
            "Enhanced reliability and maintainability by writing unit tests with Jest (80% coverage), adding in-depth CloudWatch logging/monitoring, and authoring comprehensive documentation"
        ],
        technologies: ["TypeScript", "React.js", "AWS SDK", "AWS Lambda", "API Gateway", "CloudFormation", "CDK", "Jest"],
        logo: "/images/intern_companies/amazon_web_services_logo.png",
        companyUrl: "https://aws.amazon.com"
    },
    {
        id: "2",
        company: "Georgia Tech XPRIZE Wildfire Team",
        position: "Fire Detection Subteam Lead",
        startDate: "Aug 2024",
        endDate: "Present",
        description: [
            "Led 5-person fire detection subteam within 40 member Georgia Tech team competing in $11M XPRIZE Wildfire challenge, currently achieving top 15 worldwide ranking out of 300+ teams",
            "Curated and annotated 350+ thermal infrared and RGB images, establishing ground truth dataset for wildfire detection model training across diverse environmental conditions",
            "Developed CNN-based wildfire detection system achieving 90% accuracy in detection and severity classification for real-time autonomous drone monitoring"
        ],
        technologies: ["Python", "CNN", "Computer Vision", "PyTorch", "Thermal Imaging"],
        logo: "/images/intern_companies/georgia_tech_vip.png",
        companyUrl: "https://vip.gatech.edu/"
    },
    {
        id: "3",
        company: "Webandcrafts",
        position: "Flutter Mobile Application Developer Intern",
        startDate: "May 2023",
        endDate: "July 2023",
        description: [
            "Mastered Dart programming fundamentals including variables, data types, control flow, functions, classes, and object-oriented programming principles",
            "Developed responsive mobile user interfaces using Flutter widgets, implementing custom layouts, styling, and theming for cross-platform applications",
            "Implemented state management solutions using built-in setState and integrated popular libraries such as Provider for scalable app architecture",
            "Integrated RESTful APIs and managed HTTP responses within Flutter applications, handling data parsing and error management",
            "Leveraged Flutter ecosystem packages and plugins to enhance app functionality and customize third-party integrations"
        ],
        technologies: ["Flutter", "Dart", "Provider", "REST APIs", "Mobile UI/UX", "State Management"],
        logo: "/images/intern_companies/webandcrafts_logo.png",
        companyUrl: "https://webandcrafts.com/"
    }
]

const skills: Skill[] = [
    {
        category: "Programming Languages",
        items: ["Java", "TypeScript", "Python", "Swift", "Dart", "C", "Assembly", "Unix"]
    },
    {
        category: "Frameworks & Libraries",
        items: ["React.js", "Flutter", "Jest", "PyTorch", "JUnit", "SwiftUI", "SwiftData", "Provider", "NumPy", "Librosa", "Sklearn", "Matplotlib"]
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS SDK", "AWS CDK", "AWS Lambda", "API Gateway", "CloudFormation", "CloudWatch"]
    },
    {
        category: "Developer Tools",
        items: ["GitHub", "Visual Studio Code", "Jupyter Notebook", "Google Colab", "Xcode", "IntelliJ", "PyCharm"]
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
                                    <p
                                        className="opacity-60 text-sm"
                                        style={{ color: 'var(--foreground)' }}
                                    >
                                        3x Faculty Honors Award Recipient (2024-2025)
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
                                            <div className="flex items-start gap-4">
                                                {exp.logo && (
                                                    <div className="flex-shrink-0">
                                                        <a 
                                                            href={exp.companyUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="block"
                                                        >
                                                            <img
                                                                src={exp.logo}
                                                                alt={`${exp.company} logo`}
                                                                className="w-12 h-12 rounded-lg object-contain bg-white p-1 border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-300 cursor-pointer"
                                                            />
                                                        </a>
                                                    </div>
                                                )}
                                                <div className="flex-1">
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
                                                </div>
                                            </div>
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
                            <div className="grid md:grid-cols-2 gap-8">
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

                        {/* Download button */}
                        <div className="text-center pt-8">
                            <a
                                href="/resume/CianThomasResume.pdf"
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