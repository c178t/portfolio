'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import type { NavItem } from '@/types'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems: NavItem[] = [
    { label: 'Home', href: '#hero' },
    { label: 'Resume', href: '#resume' },
    { label: 'Projects', href: '#projects' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Custom scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md border-b' 
          : ''
      }`}
      style={{
        backgroundColor: isScrolled 
          ? 'rgba(var(--background-rgb, 255, 255, 255), 0.8)' 
          : 'transparent',
        borderColor: isScrolled 
          ? 'rgba(128, 128, 128, 0.2)' 
          : 'transparent'
      }}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Name */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, '#hero')}
            className="text-xl font-bold hover:opacity-70 transition-opacity cursor-pointer"
            style={{ color: 'var(--foreground)' }}
          >
            Cian Thomas
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="hover:opacity-70 transition-opacity cursor-pointer"
                style={{ color: 'var(--foreground)' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            style={{ color: 'var(--foreground)' }}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
