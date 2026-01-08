"use client"

import type React from "react"
import { Navbar } from "./components/Navbar"
import { Hero, PainPoints } from "./sections/Part1_Intro"
import { Solution, Features } from "./sections/Part2_Solution"
import { Economics, Comparison } from "./sections/Part3_Economics"
import { HowItWorks, EconomicsDetails, FinalCTA } from "./sections/Part4_Final"

const App: React.FC = () => {
  const handleBotRedirect = () => {
    window.open("https://t.me/LMINFLUENCER_bot", "_blank")
  }

  return (
    <div className="w-full bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar onCtaClick={handleBotRedirect} />
      <Hero onCtaClick={handleBotRedirect} />
      <PainPoints />
      <Solution onCtaClick={handleBotRedirect} />
      <Features onCtaClick={handleBotRedirect} />
      <Economics onCtaClick={handleBotRedirect} />
      <Comparison onCtaClick={handleBotRedirect} />
      <HowItWorks onCtaClick={handleBotRedirect} />
      <EconomicsDetails onCtaClick={handleBotRedirect} />

      <section className="bg-primary/10 py-12 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="text-2xl font-bold uppercase mb-8 text-foreground">Почему это круто</h2>
          <div className="grid gap-4 text-left">
            {[
              "Доход вырастает в 10 раз",
              "Лояльность аудитории растёт",
              "Охваты растут",
              "Статус повышается",
              "Ты строишь актив",
              "Бесплатная команда",
              "Лучшие условия (до 50%)",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm md:text-lg text-foreground">
                <div className="w-2 h-2 rounded-full bg-primary glow-orange"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA onCtaClick={handleBotRedirect} />

      <footer className="py-8 text-center text-muted-foreground text-xs uppercase tracking-widest border-t border-border">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
            <a href="/privacy" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="/offer" className="hover:text-primary transition-colors">
              Публичная оферта
            </a>
          </div>
          <p>© 2026 Ambassador Program. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
