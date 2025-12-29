"use client"

import type React from "react"
import { Section, PrimaryButton, FadeIn } from "../components/ui"
import { GrowthChart } from "../components/charts"

interface Props {
  onCtaClick: () => void
}

export const Economics: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <Section id="economics" className="bg-card">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-center mb-4 text-foreground">
          Сколько ты будешь зарабатывать?
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">Разбираем на примере реального кейса</p>
      </FadeIn>

      <FadeIn delay={100} className="w-full">
        <GrowthChart />
      </FadeIn>

      <div className="mt-12 space-y-8 text-center">
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="text-muted-foreground text-xs uppercase mb-2 tracking-wider">Год 1</div>
              <div className="text-2xl font-bold text-foreground">3 млн</div>
              <div className="text-primary text-sm">Твоя доля 10%</div>
            </div>
            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="text-muted-foreground text-xs uppercase mb-2 tracking-wider">Год 2</div>
              <div className="text-3xl font-bold text-foreground">8 млн</div>
              <div className="text-primary text-sm">Рост проекта</div>
            </div>
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 shadow-cta">
              <div className="text-muted-foreground text-xs uppercase mb-2 tracking-wider">Год 3</div>
              <div className="text-4xl font-bold text-gradient-gold">15 млн</div>
              <div className="text-primary text-sm">Капитализация</div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <h3 className="text-xl md:text-2xl font-bold uppercase my-6 text-foreground">
            Ты не продаёшь посты.
            <br />
            Ты строишь <span className="text-gradient-gold underline decoration-2 underline-offset-4">актив</span>.
          </h3>
          <PrimaryButton onClick={onCtaClick}>Рассчитать мой потенциал</PrimaryButton>
        </FadeIn>
      </div>
    </Section>
  )
}

export const Comparison: React.FC<Props> = ({ onCtaClick }) => {
  const rows = [
    { label: "Заработок", left: "Фикс 50k", right: "% от продаж" },
    { label: "Доход в год", left: "500k - 2M", right: "3M - 15M+" },
    { label: "Брендов/мес", left: "5-10 разных", right: "1 твой" },
    { label: "Лояльность", left: "Падает", right: "Растёт" },
    { label: "Рост дохода", left: "Нет", right: "Автоматический" },
    { label: "Время на поиск", left: "10ч/неделю", right: "0 (мы находим)" },
    { label: "Статус", left: "Реклама", right: "Владелец" },
  ]

  return (
    <Section id="comparison" className="bg-background">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-center mb-16 text-foreground">
          В цифрах
        </h2>
      </FadeIn>

      <div className="w-full">
        <div className="grid grid-cols-3 gap-4 mb-6 border-b border-border pb-4">
          <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Критерий</div>
          <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest text-center">Сейчас</div>
          <div className="text-xs md:text-sm text-primary uppercase tracking-widest text-center font-bold">
            Амбассадор
          </div>
        </div>

        <div className="space-y-4">
          {rows.map((row, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <div className="grid grid-cols-3 gap-4 items-center py-3 border-b border-border/50 hover:bg-card/50 transition-colors rounded-lg px-2">
                <div className="text-sm md:text-base font-bold text-muted-foreground">{row.label}</div>
                <div className="text-sm md:text-base text-muted-foreground/70 text-center">{row.left}</div>
                <div className="text-sm md:text-base text-foreground font-bold text-center">{row.right}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={400} className="mt-12 w-full flex justify-center">
        <PrimaryButton onClick={onCtaClick}>Я хочу так зарабатывать</PrimaryButton>
      </FadeIn>
    </Section>
  )
}
