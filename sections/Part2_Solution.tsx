"use client"

import type React from "react"
import { Section, PrimaryButton, FadeIn } from "../components/ui"
import { TrendingUp, Heart, Target, Percent, Zap, Smartphone, Globe, ShieldCheck } from "lucide-react"

interface Props {
  onCtaClick: () => void
}

export const Solution: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <Section className="relative overflow-hidden z-10">

      {/* Background Aurora */}
      <div className="absolute inset-0 pointer-events-none -z-10">
         <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <FadeIn>
        <div className="text-center mb-20">
          <h3 className="text-cyan-500 text-xs tracking-[0.3em] uppercase mb-4 font-orbitron">Архитектура Нового Бизнеса</h3>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 text-white leading-tight font-orbitron">
            Ты не просто <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Рекламируешь.</span> <br />
            Ты <span className="text-cyan-400">Владеешь.</span>
          </h2>
        </div>
      </FadeIn>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 w-full max-w-6xl mx-auto mb-16">

        {/* Item 1: Large (Revenue) */}
        <FadeIn delay={100} className="md:col-span-6 lg:col-span-8 row-span-2">
          <div className="h-full min-h-[300px] p-8 rounded-3xl bg-[#0A0F1C] border border-white/5 hover:border-cyan-500/30 transition-colors group relative overflow-hidden">
             <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <Percent className="w-32 h-32 text-cyan-500" />
             </div>
             <div className="relative z-10 flex flex-col justify-between h-full">
               <div className="w-12 h-12 rounded-full bg-cyan-950/50 flex items-center justify-center border border-cyan-500/20 mb-6">
                 <Percent className="w-6 h-6 text-cyan-400" />
               </div>
               <div>
                 <h4 className="text-2xl font-bold uppercase mb-3 text-white">Доход как у Владельца</h4>
                 <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                   Мы не платим фикс. Мы платим долю от выручки (RevShare).
                   Если продукт делает 100 млн, твои — до 15 млн.
                   <br/><br/>
                   <span className="text-cyan-400 font-mono">5-15% от оборота навсегда.</span>
                 </p>
               </div>
             </div>
          </div>
        </FadeIn>

        {/* Item 2: Medium (Growth) */}
        <FadeIn delay={200} className="md:col-span-6 lg:col-span-4">
          <div className="h-full min-h-[200px] p-6 rounded-3xl bg-[#0F1320] border border-white/5 hover:border-purple-500/30 transition-colors relative overflow-hidden group">
            <div className="w-10 h-10 rounded-full bg-purple-900/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
            <h4 className="text-xl font-bold uppercase mb-2 text-white group-hover:text-purple-300 transition-colors">Пассивный Рост</h4>
            <p className="text-gray-500 text-sm">
              База клиентов растет = твой доход растет. Без дополнительных усилий.
            </p>
          </div>
        </FadeIn>

        {/* Item 3: Medium (Loyalty) */}
        <FadeIn delay={300} className="md:col-span-3 lg:col-span-4">
          <div className="h-full min-h-[200px] p-6 rounded-3xl bg-[#0F1320] border border-white/5 hover:border-pink-500/30 transition-colors relative overflow-hidden group">
             <div className="w-10 h-10 rounded-full bg-pink-900/20 flex items-center justify-center mb-4">
              <Heart className="w-5 h-5 text-pink-400" />
            </div>
            <h4 className="text-xl font-bold uppercase mb-2 text-white group-hover:text-pink-300 transition-colors">Лояльность X10</h4>
            <p className="text-gray-500 text-sm">
              Ты не "продажный блогер", а со-основатель крутого IT-продукта.
            </p>
          </div>
        </FadeIn>

         {/* Item 4: Small (Zero Ops) */}
         <FadeIn delay={400} className="md:col-span-3 lg:col-span-4">
          <div className="h-full min-h-[200px] p-6 rounded-3xl bg-gradient-to-br from-[#0F1320] to-cyan-950/20 border border-white/5 hover:border-cyan-400/30 transition-colors group">
            <div className="flex justify-between items-start mb-4">
               <Target className="w-8 h-8 text-gray-600 group-hover:text-cyan-400 transition-colors" />
               <span className="text-[10px] uppercase font-mono text-gray-600 border border-gray-700 px-2 py-1 rounded">No Ops</span>
            </div>
            <h4 className="text-lg font-bold uppercase mb-2 text-white">Мы делаем всё</h4>
            <p className="text-gray-500 text-xs">
              Продажи, саппорт, разработка — на нас. Ты только лицо.
            </p>
          </div>
        </FadeIn>

        {/* Item 5: Wide Strip (Global) */}
        <FadeIn delay={500} className="md:col-span-6 lg:col-span-8">
           <div className="h-full p-6 rounded-3xl bg-[#0A0F1C] border border-white/5 flex items-center gap-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse opacity-20"></div>
             <div className="p-3 bg-white/5 rounded-full shrink-0">
               <Globe className="w-6 h-6 text-white" />
             </div>
             <div>
               <h4 className="text-lg font-bold uppercase text-white">Глобальный рынок</h4>
               <p className="text-gray-500 text-sm">AI-продукты не имеют границ. Твой бизнес работает по всему миру 24/7.</p>
             </div>
           </div>
        </FadeIn>

      </div>

      <FadeIn delay={600} className="w-full flex justify-center">
        <PrimaryButton onClick={onCtaClick}>Посмотреть цифры</PrimaryButton>
      </FadeIn>
    </Section>
  )
}

export const Features: React.FC<Props> = ({ onCtaClick }) => {
  const items = [
    {
      icon: <Smartphone />,
      title: "Личный кабинет",
      text: "Прозрачная аналитика в реальном времени.",
    },
    {
      icon: <Zap />,
      title: "Быстрый старт",
      text: "Запуск продаж через 2 недели после заявки.",
    },
    {
      icon: <ShieldCheck />,
      title: "Юридическая защита",
      text: "Официальный договор партнерства и владения.",
    },
  ]

  return (
    <Section id="features" className="bg-[#050A14] relative z-10">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 text-white font-orbitron">
            Экосистема
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-center group">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-cyan-500/50">
                <div className="text-gray-400 group-hover:text-cyan-400 transition-colors [&>svg]:w-8 [&>svg]:h-8">{item.icon}</div>
              </div>
              <h4 className="font-bold uppercase text-lg mb-3 text-white">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
