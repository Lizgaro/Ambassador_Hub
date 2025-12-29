"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  fullWidth?: boolean
}

interface SectionProps {
  children: React.ReactNode
  className?: string
  light?: boolean
  id?: string
}

interface ConsentModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

const TELEGRAM_BOT_URL = "https://t.me/LMINFLUENCER_bot"

export const ConsentModal: React.FC<ConsentModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [offerAccepted, setOfferAccepted] = useState(false)

  if (!isOpen) return null

  const canProceed = privacyAccepted && offerAccepted

  const handleConfirm = () => {
    if (canProceed) {
      onConfirm()
      window.open(TELEGRAM_BOT_URL, "_blank")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Почти готово!</h3>

        <div className="space-y-4 mb-6">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-2 border-muted-foreground checked:bg-primary checked:border-primary cursor-pointer accent-primary"
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Я соглашаюсь с{" "}
              <a href="/privacy" target="_blank" className="text-primary underline hover:no-underline" rel="noreferrer">
                Политикой конфиденциальности
              </a>{" "}
              и даю согласие на обработку персональных данных
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={offerAccepted}
              onChange={(e) => setOfferAccepted(e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-2 border-muted-foreground checked:bg-primary checked:border-primary cursor-pointer accent-primary"
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Я принимаю условия{" "}
              <a href="/offer" target="_blank" className="text-primary underline hover:no-underline" rel="noreferrer">
                Публичной оферты
              </a>
            </span>
          </label>
        </div>

        <button
          onClick={handleConfirm}
          disabled={!canProceed}
          className={`w-full py-4 px-6 rounded-full font-bold uppercase tracking-wider text-base transition-all duration-300 ${
            canProceed
              ? "bg-gradient-to-r from-orange-500 to-amber-500 text-background shadow-cta hover:shadow-cta-hover hover:scale-[1.02]"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          Перейти в бот
        </button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Нажимая кнопку, вы будете перенаправлены в Telegram
        </p>
      </div>
    </div>
  )
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  onClick,
  ...props
}) => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleConfirm = () => {
    setShowModal(false)
    if (onClick) {
      onClick({} as React.MouseEvent<HTMLButtonElement>)
    }
  }

  const baseClasses =
    "relative overflow-hidden font-bold uppercase tracking-wider transition-all duration-300 transform rounded-full flex items-center justify-center"
  const sizeClasses = "h-[56px] md:h-[64px] px-8 text-[15px] md:text-[17px]"

  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-background shadow-cta hover:shadow-cta-hover hover:scale-[1.02] hover:-translate-y-1"
      : "border-2 border-primary text-primary hover:bg-primary hover:text-background"

  const widthClass = fullWidth ? "w-full" : "w-full md:w-[300px]"

  return (
    <>
      <button
        className={`${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${className}`}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
      <ConsentModal isOpen={showModal} onClose={() => setShowModal(false)} onConfirm={handleConfirm} />
    </>
  )
}

export const Section: React.FC<SectionProps> = ({ children, className = "", light = false, id }) => {
  return (
    <section
      id={id}
      className={`
        w-full py-20 md:py-32 flex flex-col items-center justify-center px-6
        ${light ? "bg-card text-card-foreground" : "text-foreground"} 
        ${className}
      `}
    >
      <div className="w-full max-w-[680px] mx-auto flex flex-col items-center">{children}</div>
    </section>
  )
}

export const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    })
    if (domRef.current) observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export const AnimatedCounter: React.FC = () => {
  const [count, setCount] = useState("50k")
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const sequence = [
      { val: "50k", delay: 0 },
      { val: "500k", delay: 1000 },
      { val: "5M+", delay: 2000 },
    ]

    const timeouts = sequence.map((step, idx) =>
      setTimeout(() => {
        setCount(step.val)
        setPhase(idx)
      }, step.delay),
    )

    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <span
      className={`inline-block font-bold text-primary transition-all duration-500 ${phase === 2 ? "scale-110 text-success" : ""}`}
    >
      {count}
    </span>
  )
}
