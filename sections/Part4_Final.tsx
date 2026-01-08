"use client"

import type React from "react"
import { Section, PrimaryButton, FadeIn } from "../components/ui"
import { Bot, Search, Rocket, Gift, Zap, ArrowRight } from "lucide-react"

interface Props {
  onCtaClick: () => void
}

export const HowItWorks: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <Section className="bg-[#050A14] relative z-10 overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-cyan-900/10 rounded-full blur-[128px] pointer-events-none"></div>

      <FadeIn>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-center mb-16 text-white font-orbitron">
          Твой путь за 3 шага
        </h2>
      </FadeIn>

      <div className="space-y-12 relative before:absolute before:left-[19px] md:before:left-[27px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-cyan-500 before:to-transparent before:content-['']">
        <FadeIn delay={100}>
          <div className="relative pl-14 md:pl-20 group">
            <div className="absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0A0F1C] border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] z-10">
              <Bot className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-white font-orbitron flex items-center gap-3">
                <span className="text-cyan-500">01.</span> Анкета в боте
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                2 минуты времени. Рассказываешь про аудиторию — получаешь <span className="text-white">мгновенный расчёт</span> потенциального дохода.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="relative pl-14 md:pl-20 group">
            <div className="absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0A0F1C] border-2 border-white/20 flex items-center justify-center text-gray-400 group-hover:border-purple-500 group-hover:text-purple-400 transition-colors z-10">
              <Search className="w-5 h-5 md:w-7 md:h-7" />
            </div>
             <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all backdrop-blur-sm">
               <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-white font-orbitron flex items-center gap-3">
                 <span className="text-purple-500">02.</span> Подбор продукта
               </h3>
               <p className="text-gray-400 text-base leading-relaxed">
                 3-5 дней. Мы находим AI-продукт с максимальным потенциалом под твою аудиторию и показываем экономику.
               </p>
             </div>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="relative pl-14 md:pl-20 group">
            <div className="absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0A0F1C] border-2 border-white/20 flex items-center justify-center text-gray-400 group-hover:border-orange-500 group-hover:text-orange-400 transition-colors z-10">
              <Rocket className="w-5 h-5 md:w-7 md:h-7" />
            </div>
             <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-white font-orbitron flex items-center gap-3">
                <span className="text-orange-500">03.</span> Запуск
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                2 недели. Даём продюсера, упаковываем контент, запускаем продажи. Ты публикуешь — деньги идут.
              </p>
            </div>
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
    <Section className="bg-[#050A14] relative z-10">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-center mb-12 text-white font-orbitron">
          Что ты получаешь
        </h2>

        <div className="bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-3xl mb-8">
          <div className="bg-[#0A0F1C]/90 p-8 rounded-3xl backdrop-blur-xl">
             <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white font-orbitron">
              <Gift className="text-cyan-400" /> В боте бесплатно:
            </h3>
            <ul className="space-y-4 text-left">
              <li className="flex gap-4 text-base text-gray-400 items-start">
                <span className="font-bold text-white min-w-[80px] font-mono text-sm uppercase tracking-wider py-1 px-2 bg-white/5 rounded">Расчёт</span>
                <span className="py-1">Сколько заработаешь через 6, 12, 24 месяца.</span>
              </li>
              <li className="flex gap-4 text-base text-gray-400 items-start">
                <span className="font-bold text-white min-w-[80px] font-mono text-sm uppercase tracking-wider py-1 px-2 bg-white/5 rounded">План</span>
                <span className="py-1">Экономика роста твоего капитала.</span>
              </li>
              <li className="flex gap-4 text-base text-gray-400 items-start">
                <span className="font-bold text-cyan-400 min-w-[80px] font-mono text-sm uppercase tracking-wider py-1 px-2 bg-cyan-500/10 border border-cyan-500/20 rounded">БОНУС</span>
                <span className="py-1">Личный продюсер (обычно 300k/мес) — бесплатно.</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-8 italic text-center max-w-lg mx-auto">
          Почему бесплатно? Потому что мы зарабатываем только когда зарабатываешь ты. <br/>
          <span className="text-white not-italic font-bold">Win-win Partnership.</span>
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
    <Section className="min-h-[80vh] justify-center text-center pb-32 bg-[#050A14] relative overflow-hidden">

       {/* Aurora Background */}
       <div className="absolute inset-0 animate-aurora opacity-40 pointer-events-none -z-10"></div>
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay -z-10"></div>

      <FadeIn>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-12 leading-none text-white font-orbitron">
          Готов зарабатывать
          <br />
          как <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Владелец?</span>
        </h2>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="mb-12 text-left max-w-md mx-auto space-y-4">
          <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.2em] text-center mb-6 font-orbitron">
            Твои действия прямо сейчас:
          </p>
          <div className="flex items-center gap-4 text-white group cursor-default">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold font-mono group-hover:border-cyan-500 group-hover:text-cyan-400 transition-colors">
              1
            </div>
            <p className="group-hover:translate-x-1 transition-transform">Жми кнопку — переходишь в бот</p>
          </div>
          <div className="flex items-center gap-4 text-white group cursor-default">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold font-mono group-hover:border-purple-500 group-hover:text-purple-400 transition-colors">
              2
            </div>
             <p className="group-hover:translate-x-1 transition-transform">Отвечаешь на 3 вопроса (2 минуты)</p>
          </div>
          <div className="flex items-center gap-4 text-white group cursor-default">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center font-bold font-mono shadow-[0_0_15px_rgba(249,115,22,0.5)]">
              3
            </div>
             <p className="group-hover:translate-x-1 transition-transform font-bold">Получаешь оффер</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={400}>
        <PrimaryButton onClick={onCtaClick} fullWidth className="max-w-md h-20 text-base md:text-lg mb-8 leading-tight">
          ПЕРЕЙТИ В БОТ И ОСТАВИТЬ ЗАЯВКУ
        </PrimaryButton>

        <div className="mb-8 w-full flex flex-col items-center">
          <p className="text-base font-medium mb-4 text-gray-400">Или запишись на встречу — обсудим лично:</p>
          <PrimaryButton onClick={onCtaClick} variant="secondary" className="w-full max-w-xs text-base">
            ЗАПИСАТЬСЯ НА ВСТРЕЧУ
          </PrimaryButton>
        </div>

        <div className="max-w-md mx-auto mb-12 w-full">
          <div className="animate-pulse bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/50 rounded-2xl px-8 py-4 flex items-center justify-center gap-3 transform hover:scale-[1.02] transition-transform cursor-default">
            <Zap className="w-6 h-6 text-orange-400 flex-shrink-0" />
            <span className="font-bold text-orange-100 text-sm md:text-base leading-tight text-left md:text-center">
              Запишись до 13 января — получишь секретный бонус на встрече
            </span>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-600 max-w-sm mx-auto leading-relaxed font-mono uppercase">
          Без обязательств. <br />
          Если не подойдёт — не будем работать. <br />
        </p>
      </FadeIn>
    </Section>
  )
}
