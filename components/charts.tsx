"use client"

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';

interface GrowthChartProps {
  data?: any[];
}

const defaultData = [
  { year: 'Старт', ambassador: 3, traditional: 0.5 },
  { year: 'Год 1', ambassador: 30, traditional: 5 },
  { year: 'Год 2', ambassador: 80, traditional: 5 },
  { year: 'Год 3', ambassador: 150, traditional: 5 },
];

export const GrowthChart: React.FC<GrowthChartProps> = ({ data = defaultData }) => {
  return (
    <div className="w-full h-[350px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorAmbassador" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorTraditional" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4b5563" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#4b5563" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
          <XAxis 
            dataKey="year" 
            stroke="#64748b"
            tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: 'var(--font-orbitron)' }}
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(10, 15, 28, 0.9)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)'
            }}
            itemStyle={{ fontFamily: 'var(--font-mono)' }}
            formatter={(value: number, name: string) => [
              name === 'ambassador' ? `${value} млн ₽` : `${value} млн ₽`,
              name === 'ambassador' ? 'Владелец' : 'Инфлюенсер'
            ]}
            labelStyle={{ color: '#94a3b8', marginBottom: '0.5rem', fontFamily: 'var(--font-orbitron)' }}
          />
          <Area
            type="monotone" 
            dataKey="traditional" 
            stroke="#64748b"
            strokeWidth={2} 
            fillOpacity={1}
            fill="url(#colorTraditional)"
            name="traditional"
          />
          <Area
            type="monotone" 
            dataKey="ambassador" 
            stroke="#22d3ee"
            strokeWidth={4} 
            fillOpacity={1}
            fill="url(#colorAmbassador)"
            name="ambassador"
            animationDuration={1500}
            dot={{ r: 0, strokeWidth: 0 }}
            activeDot={{ r: 6, fill: '#0a0f1c', stroke: '#22d3ee', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex justify-between mt-6 text-xs md:text-sm px-4 font-orbitron">
        <div className="flex items-center text-gray-500 transition-opacity hover:opacity-100">
          <div className="w-2 h-2 rounded-full bg-gray-600 mr-2"></div>
          Обычные посты
        </div>
        <div className="flex items-center text-cyan-400 font-bold transition-all hover:text-cyan-300 hover:scale-105 cursor-default">
          <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 shadow-[0_0_10px_#22d3ee]"></div>
          Модель Владельца
        </div>
      </div>
    </div>
  );
};
