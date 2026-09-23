import React from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  MousePointer2, 
  MessageSquare, 
  DollarSign,
  Package,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Zap
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { DEMO_PRODUCTS, DEMO_METRICS } from './demoData';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const data = [
  { name: 'Mon', revenue: 400, clicks: 240 },
  { name: 'Tue', revenue: 300, clicks: 139 },
  { name: 'Wed', revenue: 200, clicks: 980 },
  { name: 'Thu', revenue: 278, clicks: 390 },
  { name: 'Fri', revenue: 189, clicks: 480 },
  { name: 'Sat', revenue: 239, clicks: 380 },
  { name: 'Sun', revenue: 349, clicks: 430 },
];

const StatCard = ({ title, value, change, icon: Icon, trend }: { title: string, value: string, change: number, icon: any, trend: 'up' | 'down' }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400">
        <Icon size={20} />
      </div>
      <div className={cn(
        "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
        trend === 'up' ? "text-emerald-400 bg-emerald-400/10" : "text-rose-400 bg-rose-400/10"
      )}>
        {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}%
      </div>
    </div>
    <div className="space-y-1">
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className="text-2xl font-bold text-white">{value}</h3>
    </div>
  </div>
);

const ProductRow = ({ product }: { product: typeof DEMO_PRODUCTS[0] }) => (
  <div className="flex items-center justify-between p-4 bg-slate-900/50 hover:bg-slate-900 border border-slate-800 rounded-xl transition-colors group">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-800 shrink-0">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">{product.name}</h4>
        <p className="text-xs text-slate-500">{product.category}</p>
      </div>
    </div>
    <div className="flex items-center gap-8">
      <div className="text-right">
        <p className="text-xs text-slate-500 mb-1">Momentum</p>
        <div className="flex items-center gap-1 text-sm font-medium text-emerald-400">
          <ArrowUpRight size={14} />
          {product.momentum}%
        </div>
      </div>
      <div className="text-right w-20">
        <p className="text-xs text-slate-500 mb-1">Score</p>
        <div className="text-sm font-bold text-white">
          {product.opportunityScore}/100
        </div>
      </div>
      <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg">
        <ExternalLink size={18} />
      </button>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* KPI Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Revenue" 
          value={`$${DEMO_METRICS.revenue.toLocaleString()}`} 
          change={DEMO_METRICS.revenueChange} 
          icon={DollarSign} 
          trend="up" 
        />
        <StatCard 
          title="Clicks" 
          value={DEMO_METRICS.clicks.toLocaleString()} 
          change={DEMO_METRICS.clicksChange} 
          icon={MousePointer2} 
          trend="up" 
        />
        <StatCard 
          title="Engagement" 
          value={DEMO_METRICS.engagement.toLocaleString()} 
          change={DEMO_METRICS.engagementChange} 
          icon={MessageSquare} 
          trend="up" 
        />
        <StatCard 
          title="Trending Products" 
          value="24" 
          change={12} 
          icon={TrendingUp} 
          trend="up" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-white">Performance Overview</h3>
            <select className="bg-slate-800 border-none rounded-lg text-xs font-medium text-slate-300 focus:ring-1 focus:ring-indigo-500">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                  itemStyle={{ color: '#e2e8f0' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#6366f1" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorRev)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Content Status */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Today's Content</h3>
          <div className="space-y-4">
            {[
              { type: 'Instagram Reel', status: 'Scheduled', time: '10:00 AM', icon: Clock },
              { type: 'Facebook Post', status: 'Published', time: '11:00 AM', icon: CheckCircle2 },
              { type: 'YouTube Short', status: 'Drafting', time: '7:00 PM', icon: AlertCircle },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "p-2 rounded-lg",
                    item.status === 'Published' ? "text-emerald-400 bg-emerald-400/10" : 
                    item.status === 'Scheduled' ? "text-indigo-400 bg-indigo-400/10" : "text-amber-400 bg-amber-400/10"
                  )}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.type}</p>
                    <p className="text-xs text-slate-500">{item.time}</p>
                  </div>
                </div>
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border",
                  item.status === 'Published' ? "text-emerald-400 border-emerald-400/20 bg-emerald-400/5" : 
                  item.status === 'Scheduled' ? "text-indigo-400 border-indigo-400/20 bg-indigo-400/5" : "text-amber-400 border-amber-400/20 bg-amber-400/5"
                )}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20">
            Generate New Content
          </button>
        </div>
      </div>

      {/* Product Momentum */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-bold text-white">Product Momentum</h3>
            <p className="text-sm text-slate-500">Products with the highest growth potential today.</p>
          </div>
          <button className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold">View All</button>
        </div>
        <div className="space-y-3">
          {DEMO_PRODUCTS.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* AI Recommendation Banner */}
      <div className="relative overflow-hidden bg-indigo-600 rounded-2xl p-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-indigo-100 bg-white/10 w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Zap size={14} />
              AI Intelligence
            </div>
            <h3 className="text-2xl font-bold text-white">Daily Growth Recommendation</h3>
            <p className="text-indigo-100/80 leading-relaxed">
              "We've detected a 42% surge in social mentions for 'Portable Mini Projectors'. 
              We recommend generating 2 additional Instagram Reels focusing on 'Home Theater Setup' angles to capitalize on this momentum."
            </p>
          </div>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-xl shrink-0">
            Execute Strategy
          </button>
        </div>
        {/* Abstract background blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-700/30 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
