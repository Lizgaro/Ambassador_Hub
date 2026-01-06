"use client"

import React, { useState, useEffect } from "react"
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
  // Traditional: Linear growth based on followers + inflation
  // Owner: Exponential growth based on followers + brand equity + product sales

  const followersCount = followers[0] * 1000
  const engagementRate = engagement[0] / 100

  // Year 1
  const traditionalYear1 = Math.round(followersCount * 0.5 * 12) // ~0.5 RUB per follower/month revenue
  const ownerYear1 = Math.round(followersCount * 5 * 12) // ~5 RUB per follower/month (own product)

  // Projection Data for Chart
  const chartData = [
    {
      year: 'Старт',
      ambassador: Math.round(ownerYear1 * 0.1 / 100000) / 10, // Small start
      traditional: Math.round(traditionalYear1 * 0.1 / 100000) / 10
    },
    {
      year: 'Год 1',
      ambassador: Math.round(ownerYear1 / 1000000 * 10) / 10, // Millions
      traditional: Math.round(traditionalYear1 / 1000000 * 10) / 10
    },
    {
      year: 'Год 2',
      ambassador: Math.round(ownerYear1 * 2.5 / 1000000 * 10) / 10, // Growth
      traditional: Math.round(traditionalYear1 * 1.1 / 1000000 * 10) / 10 // Stagnation
    },
    {
      year: 'Год 3',
      ambassador: Math.round(ownerYear1 * 5 / 1000000 * 10) / 10, // Compound effect
      traditional: Math.round(traditionalYear1 * 1.2 / 1000000 * 10) / 10
    },
  ]

  const formatMoney = (val: number) => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)} млн ₽`
    if (val >= 1000) return `${(val / 1000).toFixed(0)} к ₽`
    return `${val} ₽`
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-300 font-orbitron">Подписчики</label>
            <span className="text-cyan-400 font-bold font-mono">{followers[0]}k</span>
          </div>
          <Slider
            defaultValue={[50]}
            max={1000}
            min={10}
            step={10}
            value={followers}
            onValueChange={setFollowers}
            className="py-4"
          />
          <p className="text-xs text-gray-500">От 10k до 1M+</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-300 font-orbitron">Вовлеченность (ER)</label>
            <span className="text-purple-400 font-bold font-mono">{engagement[0]}%</span>
          </div>
          <Slider
            defaultValue={[3]}
            max={15}
            min={1}
            step={0.5}
            value={engagement}
            onValueChange={setEngagement}
            className="py-4"
          />
          <p className="text-xs text-gray-500">Средний ER в твоей нише</p>
        </div>
      </div>

      {/* Main Display Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Chart Section */}
        <div className="lg:col-span-2 p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent p-[1px]">
          <div className="h-full bg-[#0A0F1C]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-colors duration-700"></div>
            <h3 className="relative z-10 text-lg font-orbitron text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span>
              Динамика Капитализации
            </h3>
            <GrowthChart data={chartData} />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="space-y-4 flex flex-col justify-between">

          {/* Card 1: Traditional */}
          <motion.div
            layout
            className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 opacity-20">
               <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
             </div>
             <div className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-orbitron">Обычный путь</div>
             <div className="text-2xl font-bold text-gray-400 font-mono">
               {formatMoney(traditionalYear1)}
             </div>
             <div className="text-xs text-gray-600 mt-2">Доход за 1-й год (реклама)</div>
          </motion.div>

          {/* Card 2: Owner (Hero) */}
          <motion.div
            layout
            className="flex-[1.5] p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col justify-center relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

             <div className="text-xs uppercase tracking-widest text-cyan-400 mb-1 font-orbitron flex items-center gap-2">
               Владелец
               <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-[10px] border border-cyan-500/50">X10 Growth</span>
             </div>
             <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white font-mono mt-2 shadow-cyan-glow">
               {formatMoney(ownerYear1)}
             </div>
             <div className="text-sm text-cyan-200/70 mt-3 flex items-center gap-2">
               <span>Потенциал 1-го года</span>
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
