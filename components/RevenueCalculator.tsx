"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GrowthChart } from "./charts"
import { Slider } from "@/components/ui/slider"

interface RevenueCalculatorProps {
  onCtaClick: () => void
}

export const RevenueCalculator: React.FC<RevenueCalculatorProps> = ({ onCtaClick }) => {
  const [followers, setFollowers] = useState([50]) // 50k default
  const [engagement, setEngagement] = useState([3]) // 3% default

  // Calculator Logic (Approximate 2026 Russia Market)
  const followersCount = followers[0] * 1000
  const engagementRate = engagement[0] / 100

  // Year 1
  const traditionalYear1 = Math.round(followersCount * 0.5 * 12)
  const ownerYear1 = Math.round(followersCount * 5 * 12)

  // Projection Data for Chart
  const chartData = [
    {
      year: 'Старт',
      ambassador: Math.round(ownerYear1 * 0.1 / 100000) / 10,
      traditional: Math.round(traditionalYear1 * 0.1 / 100000) / 10
    },
    {
      year: 'Год 1',
      ambassador: Math.round(ownerYear1 / 1000000 * 10) / 10,
      traditional: Math.round(traditionalYear1 / 1000000 * 10) / 10
    },
    {
      year: 'Год 2',
      ambassador: Math.round(ownerYear1 * 2.5 / 1000000 * 10) / 10,
      traditional: Math.round(traditionalYear1 * 1.1 / 1000000 * 10) / 10
    },
    {
      year: 'Год 3',
      ambassador: Math.round(ownerYear1 * 5 / 1000000 * 10) / 10,
      traditional: Math.round(traditionalYear1 * 1.2 / 1000000 * 10) / 10
    },
  ]

  const formatMoney = (val: number) => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)} млн ₽`
    if (val >= 1000) return `${(val / 1000).toFixed(0)} к ₽`
    return `${val} ₽`
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">

      {/* HUD Control Panel */}
      <div className="hud-border rounded-xl p-8 bg-[#050A14]/80 backdrop-blur-md relative overflow-hidden">
         {/* Decorative HUD Lines */}
         <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
         <div className="absolute bottom-0 right-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="text-sm tracking-[0.2em] text-cyan-500/70 font-orbitron uppercase">Подписчики</label>
              <div className="text-3xl font-bold font-mono text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                {followers[0]}k
              </div>
            </div>
            <Slider
              defaultValue={[50]}
              max={1000}
              min={10}
              step={10}
              value={followers}
              onValueChange={setFollowers}
              className="py-4 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-600 font-mono uppercase">
              <span>Min: 10k</span>
              <span>Max: 1M+</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="text-sm tracking-[0.2em] text-purple-500/70 font-orbitron uppercase">Вовлеченность (ER)</label>
              <div className="text-3xl font-bold font-mono text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">
                {engagement[0]}%
              </div>
            </div>
            <Slider
              defaultValue={[3]}
              max={15}
              min={1}
              step={0.5}
              value={engagement}
              onValueChange={setEngagement}
              className="py-4 cursor-pointer"
            />
             <div className="flex justify-between text-[10px] text-gray-600 font-mono uppercase">
              <span>Min: 1%</span>
              <span>Max: 15%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Display Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Chart Section - Takes 7/12 */}
        <div className="lg:col-span-7 h-full min-h-[400px]">
           <div className="h-full glass-panel rounded-xl p-6 relative overflow-hidden border-l-2 border-cyan-500/20">
            <h3 className="relative z-10 text-sm font-orbitron text-gray-400 mb-6 flex items-center gap-2 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse"></span>
              Проекция Капитала
            </h3>
            <GrowthChart data={chartData} />

            {/* Grid decoration */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          </div>
        </div>

        {/* Stats Cards - Takes 5/12 */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* Card 1: Traditional (Small) */}
          <motion.div
            layout
            className="flex-1 p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm flex flex-col justify-center relative overflow-hidden opacity-70 hover:opacity-100 transition-opacity"
          >
             <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-orbitron">Текущая модель</div>
             <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold text-gray-400 font-mono tracking-tighter">
                  {formatMoney(traditionalYear1)}
                </div>
                <span className="text-xs text-gray-600">/ год</span>
             </div>
          </motion.div>

          {/* Card 2: Owner (Hero) */}
          <motion.div
            layout
            className="flex-[2] p-8 rounded-xl bg-gradient-to-br from-cyan-950/40 to-purple-950/40 border border-cyan-500/30 backdrop-blur-md relative overflow-hidden group"
          >
             {/* Scanning Line Animation */}
             <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_15px_#22d3ee] translate-y-[-100%] group-hover:translate-y-[400px] transition-transform duration-[2s] ease-linear"></div>

             <div className="flex justify-between items-start mb-4">
                <div className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-orbitron">
                  Модель Владельца
                </div>
                <div className="px-2 py-1 rounded bg-cyan-500/20 border border-cyan-500/30 text-[10px] text-cyan-300 font-mono">
                  TARGET 2026
                </div>
             </div>

             <div className="text-5xl md:text-6xl font-black text-white font-mono tracking-tighter drop-shadow-lg mb-2">
               {formatMoney(ownerYear1)}
             </div>
             <div className="text-sm text-cyan-200/60 font-mono mb-6">
               Потенциальный доход за 1-й год
             </div>

             <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
               <motion.div
                 className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1.5, ease: "circOut" }}
               />
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
