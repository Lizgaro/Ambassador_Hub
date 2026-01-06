"use client"

import type React from "react"
import { Section, PrimaryButton, FadeIn } from "../components/ui"
import { RevenueCalculator } from "../components/RevenueCalculator"

interface Props {
  onCtaClick: () => void
}

export const Economics: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <Section id="economics" className="relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <FadeIn>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-orbitron tracking-tighter">
          Твой Потенциал
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto">
          Рассчитай, сколько ты будешь зарабатывать, если перестанешь продавать рекламу и начнешь строить свой бизнес.
        </p>
      </FadeIn>

      <FadeIn delay={100} className="w-full relative z-10">
        <RevenueCalculator onCtaClick={onCtaClick} />
      </FadeIn>

      <div className="mt-20 text-center relative z-10">
        <FadeIn delay={300}>
          <h3 className="text-xl md:text-3xl font-bold uppercase my-8 text-white font-orbitron">
            В 2026 году инфлюенсеры <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">не ищут</span> рекламодателей.
            <br />
            Они <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 underline decoration-orange-500/30 underline-offset-8">создают</span> их.
          </h3>
          <PrimaryButton onClick={onCtaClick} className="mx-auto shadow-[0_0_50px_rgba(249,115,22,0.3)] hover:shadow-[0_0_80px_rgba(249,115,22,0.5)]">
            Запустить Свой Бренд
          </PrimaryButton>
        </FadeIn>
      </div>
    </Section>
  )
}

export const Comparison: React.FC<Props> = ({ onCtaClick }) => {
  const rows = [
    { label: "Монетизация", left: "Фикс за пост", right: "Доля в бизнесе", highlight: true },
    { label: "Потолок дохода", left: "Зависит от охватов", right: "Без ограничений" },
    { label: "Зависимость", left: "От алгоритмов", right: "Полный контроль" },
    { label: "Актив", left: "Нет (только блог)", right: "Собственный бренд", highlight: true },
    { label: "Рост", left: "Линейный", right: "Экспоненциальный" },
    { label: "Статус", left: "Рекламное лицо", right: "Совладелец" },
  ]

  return (
    <Section id="comparison" className="bg-[#050A14] relative">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-16 font-orbitron text-white">
          Эволюция Дохода
        </h2>
      </FadeIn>

      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-6 pb-4 border-b border-white/10">
          <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-orbitron">Критерий</div>
          <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest text-center font-orbitron">Старая Модель</div>
          <div className="text-xs md:text-sm text-cyan-400 uppercase tracking-widest text-center font-bold font-orbitron shadow-cyan-glow">
            Новая Эра
          </div>
        </div>

        <div className="space-y-2">
          {rows.map((row, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <div className={`
                grid grid-cols-3 gap-4 items-center py-4 px-4 rounded-xl transition-all duration-300
                ${row.highlight ? 'bg-gradient-to-r from-transparent via-cyan-900/10 to-transparent border border-cyan-500/10' : 'hover:bg-white/5'}
              `}>
                <div className="text-sm md:text-base font-medium text-gray-400 font-montserrat">{row.label}</div>
                <div className="text-sm md:text-base text-gray-600 text-center font-montserrat">{row.left}</div>
                <div className={`text-sm md:text-base font-bold text-center font-montserrat ${row.highlight ? 'text-cyan-300' : 'text-gray-200'}`}>
                  {row.right}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={400} className="mt-16 w-full flex justify-center">
        <PrimaryButton onClick={onCtaClick} variant="secondary" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300">
          Стать Владельцем
        </PrimaryButton>
      </FadeIn>
    </Section>
  )
}
