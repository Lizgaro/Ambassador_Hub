"use client"

import type React from "react"
import { Section, PrimaryButton, FadeIn } from "../components/ui"
import { TrendingUp, Heart, CheckCircle, Target, Users, Zap, Briefcase, Percent } from "lucide-react"

interface Props {
  onCtaClick: () => void
}

export const Solution: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-card to-background">
      <FadeIn>
        <div className="text-center mb-16">
          <h3 className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">Из инфлюенсера во владельца</h3>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 text-foreground leading-tight">
            Амбассадорство = <br />
            ты часть бизнеса
          </h2>
        </div>
      </FadeIn>

      <div className="grid gap-10 w-full">
        <FadeIn delay={100}>
          <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors">
            <div className="bg-primary/10 p-4 rounded-full">
              <Percent className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold uppercase mb-2 text-foreground">Зарабатываешь как владелец</h4>
              <p className="text-muted-foreground leading-relaxed">
                Не фикс за пост — % от всех продаж. Бренд заработал 50 млн? Ты получаешь 2.5-7.5 млн (5-15% от оборота).
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors">
            <div className="bg-primary/10 p-4 rounded-full">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold uppercase mb-2 text-foreground">Доход растёт автоматически</h4>
              <p className="text-muted-foreground leading-relaxed">
                Проект вырос в 2 раза — твой доход вырос в 2 раза. Не нужно работать больше — зарабатываешь больше.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors">
            <div className="bg-primary/10 p-4 rounded-full">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold uppercase mb-2 text-foreground">Аудитория тебе верит</h4>
              <p className="text-muted-foreground leading-relaxed">
                Один продукт, который ты реально используешь = охваты растут, лояльность растёт, доверие возвращается.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors">
            <div className="bg-primary/10 p-4 rounded-full">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold uppercase mb-2 text-foreground">Мы делаем всё за тебя</h4>
              <p className="text-muted-foreground leading-relaxed">
                Маркетинг, продажи, менеджмент — наше. Ты создаёшь контент — и получаешь деньги.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={500} className="mt-16 w-full flex justify-center">
        <PrimaryButton onClick={onCtaClick}>Хочу узнать цифры</PrimaryButton>
      </FadeIn>
    </Section>
  )
}

export const Features: React.FC<Props> = ({ onCtaClick }) => {
  const items = [
    {
      icon: <Target />,
      title: "Персональный подбор",
      text: "Анализируем аудиторию. Находим AI-продукт, который им идеально подходит.",
    },
    {
      icon: <Users />,
      title: "Личный продюсер",
      text: "Бесплатно помогает с контентом, офферами, магнитами. У тебя своя команда.",
    },
    {
      icon: <Zap />,
      title: "Весь маркетинг на нас",
      text: "Трафик, воронки, реклама — наше. Ты не тратишь свой бюджет.",
    },
    {
      icon: <Briefcase />,
      title: "Лучшая сделка",
      text: "Выбиваем 15-50% от оборота вместо стандартных 5-10%. Доходим до доли.",
    },
    {
      icon: <CheckCircle />,
      title: "Менеджмент за нас",
      text: "Обработка клиентов, продажи, отчёты — делаем мы. Ты просто творишь.",
    },
  ]

  return (
    <Section id="features" className="bg-background">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 text-foreground">
            Мы делаем тебя владельцем
          </h2>
          <p className="text-muted-foreground text-lg">А не просто рекламной площадкой</p>
        </div>
      </FadeIn>

      <div className="space-y-6 w-full">
        {items.map((item, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <div className="flex gap-6 items-start p-6 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-all">
              <div className="text-primary flex-shrink-0 mt-1 [&>svg]:w-6 [&>svg]:h-6">{item.icon}</div>
              <div>
                <h4 className="font-bold uppercase text-lg mb-2 text-foreground">
                  {idx + 1}. {item.title}
                </h4>
                <p className="text-muted-foreground text-base leading-relaxed">{item.text}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn
        delay={600}
        className="mt-12 bg-gradient-to-r from-secondary to-card p-8 rounded-2xl border border-primary/20 text-center w-full"
      >
        <h4 className="text-xl font-bold text-foreground mb-4">Тебе остаётся:</h4>
        <div className="flex flex-col md:flex-row gap-4 justify-center text-sm md:text-base text-muted-foreground mb-8">
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" /> Создавать контент
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" /> Быть лицом бренда
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" /> Получать деньги
          </span>
        </div>
        <PrimaryButton onClick={onCtaClick}>Получить расчёт</PrimaryButton>
      </FadeIn>
    </Section>
  )
}
