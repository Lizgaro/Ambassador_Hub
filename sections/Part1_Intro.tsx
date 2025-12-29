"use client"

import type React from "react"
import { Section, PrimaryButton, FadeIn, AnimatedCounter } from "../components/ui"
import { X } from "lucide-react"

interface Props {
  onCtaClick: () => void
}

export const Hero: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <Section id="hero" className="min-h-screen pt-32 pb-20 justify-center text-center bg-gradient-to-b from-background via-background to-card">
      <FadeIn>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.1] mb-8 tracking-tight">
          Хватит продавать{" "}
          <span className="text-muted-foreground line-through decoration-destructive decoration-4">посты</span>
        </h1>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase mb-6 text-foreground/90 leading-tight">
          Стань владельцем бизнеса вместе с брендом
          <br />и зарабатывай в <span className="text-gradient-gold">10 раз больше</span>
        </h2>
      </FadeIn>

      <FadeIn delay={200}>
        <p className="text-base md:text-xl text-muted-foreground max-w-lg mx-auto mb-12 font-medium leading-relaxed">
          Одно амбассадорство с AI-продуктом = больше денег, выше лояльность, сильнее статус
        </p>
      </FadeIn>

      <FadeIn delay={400}>
        <PrimaryButton onClick={onCtaClick} className="mb-6">
          Узнать мой потенциал
        </PrimaryButton>
        <div className="text-sm text-muted-foreground flex flex-col items-center gap-2">
          <p>2 минуты в боте — получишь расчёт дохода</p>
          <div className="flex items-center gap-2 text-lg font-mono">
            <span>Рост:</span>
            <AnimatedCounter />
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}

export const PainPoints: React.FC = () => {
  return (
    <Section className="bg-card">
      <FadeIn>
        <h3 className="text-center text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">
          Сейчас ты на беговой дорожке
        </h3>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-center mb-12">
          И она никуда не ведёт
        </h2>
      </FadeIn>

      <div className="space-y-8 text-center max-w-lg mx-auto mb-12">
        <FadeIn delay={100}>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            10 постов в месяц = 500k в год.
            <br />
            <span className="text-muted-foreground italic">Звучит неплохо?</span>
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="p-6 border border-border rounded-2xl bg-secondary/50 backdrop-blur-sm">
            <p className="mb-4 font-semibold text-destructive">Но реальность:</p>
            <ul className="space-y-3 text-left inline-block">
              <li className="flex items-center gap-3 text-foreground/90">
                <X className="text-destructive w-5 h-5 flex-shrink-0" /> Аудитория устала от рекламы
              </li>
              <li className="flex items-center gap-3 text-foreground/90">
                <X className="text-destructive w-5 h-5 flex-shrink-0" /> Охваты падают
              </li>
              <li className="flex items-center gap-3 text-foreground/90">
                <X className="text-destructive w-5 h-5 flex-shrink-0" /> Постоянный поиск рекламодателей
              </li>
              <li className="flex items-center gap-3 text-foreground/90">
                <X className="text-destructive w-5 h-5 flex-shrink-0" /> Бесконечные отчёты и согласования
              </li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-lg md:text-xl font-semibold mt-8 text-foreground">
            Результат? Ты работаешь больше,
            <br />а через год — на том же месте.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={400}>
        <div className="text-center">
          <span className="text-primary text-lg font-bold uppercase tracking-widest animate-pulse">
            Есть другой путь
          </span>
        </div>
      </FadeIn>
    </Section>
  )
}
