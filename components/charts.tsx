import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { year: 'Старт', ambassador: 3, traditional: 0.5 },
  { year: 'Год 1', ambassador: 30, traditional: 5 },
  { year: 'Год 2', ambassador: 80, traditional: 5 },
  { year: 'Год 3', ambassador: 150, traditional: 5 },
];

export const GrowthChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] mt-8 bg-white/5 rounded-xl p-4 border border-white/10">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
          <XAxis 
            dataKey="year" 
            stroke="#999" 
            tick={{ fill: '#999', fontSize: 12 }} 
            tickLine={false}
            axisLine={false}
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0A0F1C', border: '1px solid #333', borderRadius: '8px' }}
            itemStyle={{ color: '#fff' }}
            formatter={(value: number, name: string) => [
              name === 'ambassador' ? `${value} млн` : `${value * 100}к`,
              name === 'ambassador' ? 'Амбассадор' : 'Инфлюенсер'
            ]}
          />
          <Line 
            type="monotone" 
            dataKey="traditional" 
            stroke="#666" 
            strokeWidth={2} 
            dot={false}
            name="traditional"
          />
          <Line 
            type="monotone" 
            dataKey="ambassador" 
            stroke="#00D9FF" 
            strokeWidth={4} 
            dot={{ r: 4, fill: '#00D9FF', strokeWidth: 0 }}
            activeDot={{ r: 8 }}
            name="ambassador"
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-between mt-4 text-xs md:text-sm px-2">
        <div className="flex items-center text-gray-400">
          <div className="w-3 h-3 rounded-full bg-gray-600 mr-2"></div>
          Обычные посты
        </div>
        <div className="flex items-center text-accent">
          <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
          Владелец (доля)
        </div>
      </div>
    </div>
  );
};
