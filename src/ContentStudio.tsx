import React, { useState } from 'react';
import { FileText, Sparkles, Send, Facebook, Instagram, Youtube, Wand2, CheckCircle2 } from 'lucide-react';
import { DEMO_PRODUCTS } from './demoData';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ContentStudio() {
  const [selectedProduct, setSelectedProduct] = useState(DEMO_PRODUCTS[0].id);
  const [platform, setPlatform] = useState('instagram');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent({
        title: "Home Cinema Revolution 🍿",
        hook: "Stop watching movies on your tiny laptop screen!",
        caption: "Transform your bedroom into a full-blown cinema with the VisionPlus Mini Projector. 🎥✨ Small enough to fit in your palm, powerful enough to light up your whole wall.\n\nExclusive 20% discount link in bio! #HomeCinema #Gadgets #VisionPlus #MovieNight",
        hashtags: ["HomeCinema", "Gadgets", "VisionPlus", "MovieNight", "AffiliateMarketing"],
        cta: "Click the link in bio to save 20% today!"
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold text-white">AI Content Studio</h2>
        <p className="text-slate-400">Generate high-converting marketing materials with Gemini.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="xl:col-span-1 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider">Select Product</label>
              <div className="space-y-2">
                {DEMO_PRODUCTS.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={cn(
                      "w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left",
                      selectedProduct === product.id 
                        ? "bg-indigo-600/10 border-indigo-500 text-white" 
                        : "bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600"
                    )}
                  >
                    <img src={product.imageUrl} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                    <span className="text-sm font-semibold truncate">{product.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider">Target Platform</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'instagram', icon: Instagram, label: 'Instagram' },
                  { id: 'facebook', icon: Facebook, label: 'Facebook' },
                  { id: 'youtube', icon: Youtube, label: 'YouTube' },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPlatform(p.id)}
                    className={cn(
                      "flex flex-col items-center gap-2 p-3 rounded-xl border transition-all",
                      platform === p.id 
                        ? "bg-indigo-600/10 border-indigo-500 text-indigo-400" 
                        : "bg-slate-800/50 border-slate-700 text-slate-500 hover:border-slate-600"
                    )}
                  >
                    <p.icon size={20} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{p.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>AI is thinking...</span>
                </>
              ) : (
                <>
                  <Wand2 size={20} />
                  <span>Generate Content</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Content Preview */}
        <div className="xl:col-span-2">
          {generatedContent ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">AI Draft Ready</h3>
                    <p className="text-xs text-slate-500">Optimized for {platform}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">Edit</button>
                  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all">Schedule Post</button>
                </div>
              </div>
              <div className="p-8 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Hook</h4>
                  <p className="text-xl font-bold text-white bg-slate-800/30 p-4 rounded-xl border border-slate-800">{generatedContent.hook}</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Caption</h4>
                  <div className="text-slate-300 bg-slate-800/30 p-6 rounded-xl border border-slate-800 whitespace-pre-wrap leading-relaxed">
                    {generatedContent.caption}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {generatedContent.hashtags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 bg-slate-800 text-indigo-400 text-xs font-medium rounded-full">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[400px] border-2 border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center text-center p-12 space-y-4">
              <div className="p-4 bg-slate-900 rounded-3xl text-slate-600">
                <Sparkles size={48} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Ready to create magic?</h3>
                <p className="text-slate-500 max-w-sm mt-2">
                  Select a product and platform to generate your next high-converting affiliate post with Gemini AI.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
