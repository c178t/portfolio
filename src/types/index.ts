export interface Project {
    id: string
    title: string
    description: string
    longDescription?: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    imageUrl?: string
    imageUrls?: string[]
    featured?: boolean
    gifUrl?: string
}

export interface Experience {
    id: string
    company: string
    position: string
    startDate: string
    endDate: string | 'Present'
    description: string[]
    technologies: string[]
    logo?: string
    companyUrl?: string
}

export interface Skill {
    category: string
    items: string[]
}

export interface Education {
    id: string
    institution: string
    degree: string
    major: string
    graduationDate: string
    gpa?: string
    coursework?: string[]
}

export interface NavItem {
    label: string
    href: string
}

export interface PersonalInfo {
    name: string
    title: string
    bio: string
    email: string
    github?: string
    linkedin?: string
    location: string
}
