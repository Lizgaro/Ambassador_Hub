"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"

interface NavbarProps {
  onCtaClick: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Area */}
        <div
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection("hero")}
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 shadow-neon">
            <Image
              src="/icon.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none uppercase tracking-wider text-white">
              Ambassador
            </span>
            <span className="text-[10px] text-primary font-mono tracking-[0.2em] uppercase">
              Program
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Преимущества", "Разница", "Экономика"].map((item, idx) => {
             const ids = ["features", "comparison", "economics"]
             return (
              <button
                key={item}
                onClick={() => scrollToSection(ids[idx])}
                className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-primary transition-colors hover:scale-105 transform duration-200"
              >
                {item}
              </button>
            )
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={onCtaClick}
            className="bg-primary text-black font-bold uppercase text-xs px-6 py-3 rounded-full hover:bg-white transition-colors duration-300 shadow-neon-hover tracking-widest"
          >
            Перейти в бота
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] py-6" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {["Преимущества", "Разница", "Экономика"].map((item, idx) => {
             const ids = ["features", "comparison", "economics"]
             return (
              <button
                key={item}
                onClick={() => scrollToSection(ids[idx])}
                className="text-lg font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
              >
                {item}
              </button>
            )
          })}
          <button
            onClick={() => {
              onCtaClick()
              setIsMobileMenuOpen(false)
            }}
            className="w-full max-w-xs bg-primary text-black font-bold uppercase text-sm px-6 py-4 rounded-full hover:bg-white transition-colors duration-300 shadow-neon tracking-widest mt-4"
          >
            Перейти в бота
          </button>
        </div>
      </div>
    </header>
  )
}
