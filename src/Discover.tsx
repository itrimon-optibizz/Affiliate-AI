import React from 'react';
import { Search, TrendingUp, ArrowUpRight, BarChart3, Filter, Plus } from 'lucide-react';
import { DEMO_PRODUCTS } from './demoData';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Discover() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Trending Products</h2>
          <p className="text-slate-400">Discover high-potential products in the US market.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:ring-1 focus:ring-indigo-500 w-full md:w-64"
            />
          </div>
          <button className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {DEMO_PRODUCTS.map((product) => (
          <div key={product.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-indigo-500/50 transition-all">
            <div className="aspect-video relative overflow-hidden">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 right-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full text-[10px] font-bold text-indigo-400 border border-indigo-500/30 uppercase tracking-widest">
                {product.category}
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="px-2 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded flex items-center gap-1">
                  <ArrowUpRight size={12} />
                  {product.momentum}%
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{product.name}</h3>
                <p className="text-sm text-slate-500 line-clamp-2 mt-1">{product.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-800">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Price</p>
                  <p className="text-white font-bold">${product.price}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Opportunity</p>
                  <p className="text-indigo-400 font-bold">{product.opportunityScore}/100</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl text-sm font-bold transition-colors">
                  Create Content
                </button>
                <button className="p-2.5 bg-slate-800 text-slate-400 hover:text-white rounded-xl transition-colors">
                  <Plus size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
