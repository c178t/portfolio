import type { Project } from '@/types'

// Sample project data - replace with your actual projects
const projects: Project[] = [
  {
    id: "1",
    title: "Fire Detection System",
    description: "Real-time wildfire detection using YOLO models and computer vision. Implemented data augmentation strategies and integrated with Roboflow for model training.",
    longDescription: "A comprehensive fire detection system built with YOLO models for real-time wildfire identification. Features custom data augmentation, false positive handling, and integration with Roboflow platform for training optimization.",
    technologies: ["Python", "YOLO", "OpenCV", "Roboflow", "PyTorch"],
    githubUrl: "https://github.com/yourusername/fire-detection",
    liveUrl: "https://fire-detection-demo.vercel.app",
    featured: true
  },
  {
    id: "2", 
    title: "Neural Network from Scratch",
    description: "Custom neural network implementation with forward and backward propagation. Built linear layers, activation functions, and gradient descent optimization.",
    technologies: ["Python", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/yourusername/neural-network",
    featured: true
  },
  {
    id: "3",
    title: "Audio Processing Pipeline", 
    description: "Audio identification system using Librosa and NumPy for preprocessing. Generates Mel-spectrograms and converts hummed input to sine waves.",
    technologies: ["Python", "Librosa", "NumPy", "Audio Processing"],
    githubUrl: "https://github.com/yourusername/audio-processing",
  },
  {
    id: "4",
    title: "Oak-1 Camera Integration",
    description: "Real-time object detection system converting YOLO PyTorch models to ONNX and OpenVINO IR format for deployment on Oak-1 cameras.",
    technologies: ["Python", "ONNX", "OpenVINO", "Computer Vision"],
    githubUrl: "https://github.com/yourusername/oak-camera",
  },
  {
    id: "5",
    title: "Portfolio Website",
    description: "Minimalistic portfolio built with modern web technologies. Features responsive design, dark mode support, and smooth scrolling.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourname.dev",
  },
  {
    id: "6",
    title: "Algorithm Visualizer",
    description: "Interactive visualizations of sorting and pathfinding algorithms. Built while practicing LeetCode patterns and data structures.",
    technologies: ["React", "TypeScript", "D3.js", "Algorithms"],
    githubUrl: "https://github.com/yourusername/algorithm-visualizer",
    liveUrl: "https://algorithm-viz.vercel.app",
  }
]

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="section-spacing"
      style={{ background: 'var(--background)' }}
    >
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            Projects
          </h2>
          <p 
            className="text-lg text-center opacity-70 mb-16 max-w-2xl mx-auto"
            style={{ color: 'var(--foreground)' }}
          >
            A selection of projects showcasing my experience in machine learning, 
            computer vision, and full-stack development.
          </p>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Project card component
interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div 
      className={`group relative rounded-lg border transition-all duration-300 hover:shadow-lg p-6 ${
        project.featured ? 'ring-2 ring-blue-500/20' : ''
      }`}
      style={{ 
        backgroundColor: 'var(--background)',
        borderColor: 'rgba(128, 128, 128, 0.2)'
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute -top-2 -right-2">
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            Featured
          </span>
        </div>
      )}

      {/* Project title */}
      <h3 
        className="text-xl font-semibold mb-3 group-hover:opacity-80 transition-opacity"
        style={{ color: 'var(--foreground)' }}
      >
        {project.title}
      </h3>

      {/* Project description */}
      <p 
        className="opacity-70 mb-4 text-sm leading-relaxed"
        style={{ color: 'var(--foreground)' }}
      >
        {project.description}
      </p>

      {/* Technology tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded text-xs border"
            style={{ 
              color: 'var(--foreground)',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderColor: 'rgba(59, 130, 246, 0.2)'
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project links */}
      <div className="flex space-x-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--foreground)' }}
          >
            <svg 
              className="w-4 h-4 mr-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--foreground)' }}
          >
            <svg 
              className="w-4 h-4 mr-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
            Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default Projects
