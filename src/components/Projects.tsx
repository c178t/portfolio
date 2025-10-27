"use client"

import type { Project } from '@/types'
import { useState, useEffect, useRef } from 'react'

// Updated project data with Atmos Clock
const projects: Project[] = [
  {
    id: "1",
    title: "Fire Detection Subteam",
    description: "Real-time wildfire detection using YOLO models and computer vision. Implemented data augmentation strategies and integrated with Roboflow for model training.",
    longDescription:"As the leader of the Fire Detection Subteam for Georgia Tech's XPRIZE Wildfire competition team, I led the development of a comprehensive fire detection system using state-of-the-art YOLOv11 models " + 
    "for real-time wildfire identification with drones. Our system integrates custom data augmentation, advanced false-positive handling, and training optimization through the Roboflow platform. " +
    "The detection results are then used by our path-planning subteam to generate navigation paths, enabling drones to autonomously locate and move toward fires for potential extinguishing. " + 
    "This project highlights my expertise in computer vision, data preprocessing, and model optimization, as well as my ability to lead a technical team, coordinate across subgroups, and deliver scalable, real-world solutions under competition deadlines.",
    technologies: ["Python", "YOLO", "OpenCV", "Roboflow", "PyTorch"],
    featured: false,
    gifUrl: "/project-gifs-images/fire_detection_demo.gif"
  },
  {
    id: "2",
    title: "Georgia Tech Meal Tracker iOS App",
    description: "Swift application that tracks and projects meal plan balances, predicting when meal swipes will run out for Georgia Tech students with intuitive UI/UX design.",
    longDescription: "At the start of each semester, many Georgia Tech students struggle with deciding how many meal swipes to purchase. " + 
    "Buying too few means running out early, while buying too many often leads to wasted money. To address this, I designed and developed an iOS app using SwiftUI and SwiftData. " + 
    "The app lets students enter their swipe balance, dining days, and eating frequency, then uses calculation algorithms to predict the exact day they'll run out of swipes. " + 
    "This helps students make smarter financial decisions about their meal plans. In a demo, the app demonstrated potential savings of $553–$1,101 per student. " + 
    "Through this project, I strengthened my skills in mobile development, data modeling, and algorithm design, while also gaining experience in building user-centered tools that translate data into real-world financial impact.",
    technologies: ["Swift", "SwiftUI", "SwiftData", "iOS Development"],
    githubUrl: "https://github.com/c178t/GTFoodTracker",
    featured: false,
    imageUrl: "/project-gifs-images/GTMealTracker_demo.jpeg"
  },
  {
    id: "3",
    title: "HumTune AI: ML-Powered Audio Recognition",
    description: "Collaborative project developing Python scripts to identify songs from ten-second hummed samples using advanced audio processing and CNN architecture.",
    longDescription: "Have you ever had a tune stuck in your head and wished you could find the name of the song just by humming it? In collaboration with a five-member Georgia Tech team, " +
    "I helped build an audio recognition system that does exactly that. I implemented advanced audio normalization techniques to transform hummed input into sine waves, reducing tonal inconsistencies and background noise. " + 
    "Using Librosa and NumPy, I preprocessed recordings and generated optimized audio variations, then created Mel-spectrograms for neural network analysis. Our team designed and fine-tuned a " + 
    "Convolutional Neural Network with ReLU activations, achieving 98.7% training accuracy and 95.2% testing accuracy with minimal cross-entropy loss. Currently, the system works with a small library of songs, " + 
    "but it lays the foundation for scaling to larger datasets. " +
    "This project strengthened my skills in audio signal processing, data augmentation, and deep learning, while also giving me experience collaborating within a technical team to design an end-to-end machine learning pipeline.",
    technologies: ["Python", "PyTorch", "Librosa", "NumPy", "CNN", "Machine Learning", "Audio Processing"],
    githubUrl: "https://github.com/c178t/music-recognition-ml",
    imageUrl: "/project-gifs-images/HumTune_results.png",
    featured: false
  },
  {
    id: "4",
    title: "The Atmos Clock",
    description: "Weather-responsive digital clock that displays color-coded clothing recommendations based on real-time temperature, humidity, UV, and rain data.",
    longDescription: "Collaborated with a team of five to develop The Atmos Clock, a Java-based application that revolutionizes how students prepare for the day. " +
    "The system runs a custom algorithm that analyzes weather API data including temperature, humidity, UV index, and precipitation to determine the perfect clothing to wear for each hour, personalized to the user. " +
    "I implemented the front-end using JavaFX, creating an intuitive digital clock GUI that displays color-coded recommendations at a glance. " +
    "I also developed the sorting algorithm in Java to tier weather data and map it to appropriate clothing levels—from heavy winter wear to light summer attire. " +
    "The color-coded system ranges from magenta (very cold) through blue, cyan, yellow, orange, and red (hot), with an inner circle indicating rain conditions. " +
    "This project showcases my ability to integrate real-time data processing with user-friendly interface design, while working collaboratively to deliver a practical solution that saves time and adds convenience to daily routines.",
    technologies: ["Java", "JavaFX", "Weather API", "Algorithm Design", "GUI Development"],
    featured: false,
    githubUrl: "https://github.com/c178t/AtmosClock",
    imageUrls: [
      "/project-gifs-images/atmos_clock_1.jpg",
      "/project-gifs-images/atmos_clock_2.jpg",
      "/project-gifs-images/atmos_clock_3.jpg"
    ]
  }
]

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

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
            computer vision, and mobile development. Hover over each project to learn more.
          </p>

          {/* Projects container - changed from grid to flex */}
          <div className="flex flex-col lg:flex-row flex-wrap gap-6 items-center justify-center overflow-x-hidden">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredCard === project.id}
                onHover={(id) => setHoveredCard(id)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Updated Project card component
interface ProjectCardProps {
  project: Project
  isHovered: boolean
  onHover: (id: string) => void
  onLeave: () => void
}

const ProjectCard = ({ project, isHovered, onHover, onLeave }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-slideshow effect when hovered and multiple images exist
  useEffect(() => {
    if (isHovered && project.imageUrls && project.imageUrls.length > 1) {
      // Start slideshow with 2-second intervals
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % project.imageUrls!.length
        )
      }, 3000)
    } else {
      // Clear interval when not hovered
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      // Reset to first image when mouse leaves
      if (!isHovered) {
        setCurrentImageIndex(0)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, project.imageUrls])

  // Determine which media to display
  const getMediaUrl = () => {
    if (project.imageUrls && project.imageUrls.length > 0) {
      return project.imageUrls[currentImageIndex]
    }
    return project.gifUrl || project.imageUrl
  }

  return (
    <div
      className={`group relative rounded-lg border p-6 cursor-pointer transition-all duration-[900ms] ease-in-out ${
        project.featured ? 'ring-2 ring-blue-500/20' : ''
      } ${
        isHovered
          ? 'shadow-2xl'
          : 'hover:shadow-lg'
      }`}
      style={{
        backgroundColor: 'var(--background)',
        borderColor: 'rgba(128, 128, 128, 0.2)',
        transformOrigin: 'center',
        overflow: 'hidden',
        flexShrink: 0,
        flexBasis: isHovered ? '600px' : '320px',
        minHeight: isHovered ? '350px' : '350px',
      }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={onLeave}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute -top-2 -right-2 z-10">
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            Featured
          </span>
        </div>
      )}

      <div className="h-full flex flex-col">
        {/* Main content */}
        <div className="w-full">
          {/* Project title */}
          <h3
            className={`font-semibold mb-3 transition-all duration-[900ms] ease-in-out ${
              isHovered ? 'text-2xl' : 'text-xl'
            }`}
            style={{ color: 'var(--foreground)' }}
          >
            {project.title}
          </h3>

          {/* Project description - truncated when not hovered */}
          <p
            className={`opacity-70 mb-4 leading-relaxed transition-all duration-[900ms] ease-in-out text-sm`}
            style={{ color: 'var(--foreground)' }}
          >
            {isHovered && project.longDescription
              ? project.longDescription
              : project.description
            }
          </p>

          {/* Technology tags - fewer shown when not hovered */}
          <div className={`flex flex-wrap gap-2 transition-all duration-[900ms] ease-in-out ${
            isHovered ? 'mb-4' : 'mb-6'
          }`}>
            {(isHovered ? project.technologies : project.technologies.slice(0, 4)).map((tech) => (
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
            {!isHovered && project.technologies.length > 4 && (
              <span
                className="px-2 py-1 rounded text-xs border opacity-50"
                style={{
                  color: 'var(--foreground)',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  borderColor: 'rgba(59, 130, 246, 0.2)'
                }}
              >
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Project links */}
          <div className="flex space-x-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm hover:opacity-70 transition-opacity duration-200"
                style={{ color: 'var(--foreground)' }}
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </a>
            )}
          </div>
        </div>

        {/* Media section - animates in and out with slideshow support */}
        <div
          className={`mt-6 overflow-hidden transition-all duration-[700ms] ease-in-out ${
            isHovered ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {getMediaUrl() && (
            <div className="relative">
              <img
                src={getMediaUrl()}
                alt={`${project.title} ${project.imageUrls ? `slide ${currentImageIndex + 1}` : 'demo'}`}
                className="w-auto h-auto max-w-[700px] max-h-[700px] object-contain rounded-lg shadow-lg"
              />
              {/* Slideshow indicators */}
              {project.imageUrls && project.imageUrls.length > 1 && (
                <div className="flex justify-center gap-2 mt-3">
                  {project.imageUrls.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-blue-500 w-6' 
                          : 'bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
