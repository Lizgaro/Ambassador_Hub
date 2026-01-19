"use client"

import type React from "react"
import { Section, PrimaryButton, FadeIn } from "../components/ui"
import { Bot, Search, Rocket, Gift, Zap } from "lucide-react"

interface Props {
  onCtaClick: () => void
}

export const HowItWorks: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <Section className="bg-card">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-center mb-16 text-foreground">
          Твой путь за 3 шага
        </h2>
      </FadeIn>

      <div className="space-y-12 relative before:absolute before:left-[19px] md:before:left-[27px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-transparent before:content-['']">
        <FadeIn delay={100}>
          <div className="relative pl-14 md:pl-20">
            <div className="absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary">
              <Bot className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-foreground">Шаг 1: Анкета в боте</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              2 минуты времени. Рассказываешь про аудиторию — получаешь мгновенный расчёт потенциального дохода.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="relative pl-14 md:pl-20">
            <div className="absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-card border-2 border-border flex items-center justify-center text-muted-foreground">
              <Search className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-foreground">Шаг 2: Подбор продукта</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              3-5 дней. Мы находим AI-продукт с максимальным потенциалом под твою аудиторию и показываем экономику.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="relative pl-14 md:pl-20">
            <div className="absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-card border-2 border-border flex items-center justify-center text-muted-foreground">
              <Rocket className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-foreground">Шаг 3: Запуск</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              2 недели. Даём продюсера, упаковываем контент, запускаем продажи. Ты публикуешь — деньги идут.
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={400} className="mt-12 w-full flex justify-center">
        <PrimaryButton onClick={onCtaClick}>Начать сейчас</PrimaryButton>
      </FadeIn>
    </Section>
  )
}

export const EconomicsDetails: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <Section className="bg-background">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-center mb-8 text-foreground">
          Что ты получаешь
        </h2>

        <div className="bg-gradient-to-br from-secondary/80 to-card p-8 rounded-3xl border border-border mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
            <Gift className="text-primary" /> В боте бесплатно:
          </h3>
          <ul className="space-y-4 text-left">
            <li className="flex gap-3 text-base text-muted-foreground">
              <span className="font-bold text-foreground min-w-[80px]">Расчёт:</span>
              Сколько заработаешь через 6, 12, 24 месяца.
            </li>
            <li className="flex gap-3 text-base text-muted-foreground">
              <span className="font-bold text-foreground min-w-[80px]">План:</span>
              Экономика роста твоего капитала.
            </li>
            <li className="flex gap-3 text-base text-muted-foreground">
              <span className="font-bold text-primary min-w-[80px]">БОНУС:</span>
              Личный продюсер (обычно 300k/мес) — бесплатно.
            </li>
          </ul>
        </div>

        <p className="text-sm text-muted-foreground mb-8 italic text-center">
          Почему бесплатно? Потому что мы зарабатываем только когда зарабатываешь ты. Win-win.
        </p>
        <div className="flex justify-center">
          <PrimaryButton onClick={onCtaClick}>Получить мой расчёт</PrimaryButton>
        </div>
      </FadeIn>
    </Section>
  )
}

export const FinalCTA: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <Section className="min-h-[80vh] justify-center text-center pb-32 bg-gradient-to-b from-background to-card">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase mb-12 leading-none text-foreground">
          Готов зарабатывать
          <br />
          как <span className="text-gradient-gold">Владелец?</span>
        </h2>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="mb-12 text-left max-w-md mx-auto space-y-4">
          <p className="text-muted-foreground font-bold uppercase text-sm tracking-widest text-center mb-6">
            Твои действия прямо сейчас:
          </p>
          <div className="flex items-center gap-4 text-foreground">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <p>Жми кнопку — переходишь в бот</p>
          </div>
          <div className="flex items-center gap-4 text-foreground">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <p>Отвечаешь на 3 вопроса (2 минуты)</p>
          </div>
          <div className="flex items-center gap-4 text-foreground">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <p>Оставляешь заявку на персонализированное предложение для тебя и твоей аудитории</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={300}>
        <div className="mb-12 max-w-md mx-auto bg-card p-6 rounded-2xl border border-border text-left">
          <p className="font-bold mb-4 text-center uppercase tracking-wide text-foreground">Что получишь в боте:</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">01</span>
              <span>Сколько будешь зарабатывать (конкретные цифры)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">02</span>
              <span>Экономика роста (путь на 6/12/24 месяца)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">03</span>
              <span>Подходящий AI-продукт (персонально под тебя)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">04</span>
              <span>Бесплатный продюсер (обычно 100-300k/мес)</span>
            </li>
          </ul>
        </div>
      </FadeIn>

      <FadeIn delay={400}>
        <PrimaryButton onClick={onCtaClick} fullWidth className="max-w-md h-20 text-base md:text-lg mb-8 leading-tight">
          ПЕРЕЙТИ В БОТ И ОСТАВИТЬ ЗАЯВКУ
        </PrimaryButton>

        <div className="mb-8 w-full flex flex-col items-center">
          <p className="text-base font-medium mb-4 text-foreground">Или запишись на встречу — обсудим лично:</p>
          <PrimaryButton onClick={onCtaClick} variant="secondary" className="w-full max-w-xs text-base">
            ЗАПИСАТЬСЯ НА ВСТРЕЧУ
          </PrimaryButton>
        </div>

        <div className="max-w-md mx-auto mb-12 w-full">
          <div className="animate-pulse bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl px-8 py-4 shadow-cta flex items-center justify-center gap-3 transform hover:scale-[1.02] transition-transform">
            <Zap className="w-6 h-6 text-background fill-background flex-shrink-0" />
            <span className="font-bold text-background text-sm md:text-base leading-tight text-left md:text-center">
              Запишись до 13 января — получишь секретный бонус на встрече
            </span>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
          Без обязательств. Просто посмотришь цифры. <br />
          Если не подойдёт — не будем работать. <br />
          Если подойдёт — начнёшь через 2 недели.
        </p>
      </FadeIn>
    </Section>
  )
}
