import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Search, 
  Link as LinkIcon, 
  FileText, 
  Share2, 
  BarChart3, 
  Settings, 
  LogOut,
  ChevronRight,
  TrendingUp,
  Package,
  Calendar,
  Zap,
  Menu,
  X,
  Bell
} from 'lucide-react';
import { useAuth } from './AuthContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
  collapsed?: boolean;
}

const SidebarItem = ({ icon: Icon, label, active, onClick, collapsed }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-lg group",
      active 
        ? "bg-indigo-600/10 text-indigo-400" 
        : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
    )}
  >
    <Icon size={20} className={cn(active ? "text-indigo-400" : "text-slate-400 group-hover:text-slate-200")} />
    {!collapsed && <span>{label}</span>}
  </button>
);

export default function AppShell({ 
  children,
  activeTab,
  setActiveTab
}: { 
  children: React.ReactNode,
  activeTab: string,
  setActiveTab: (tab: string) => void
}) {
  const { user, handleLogout, profile } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'discover', label: 'Discover', icon: Search },
    { id: 'affiliate', label: 'Affiliate Links', icon: LinkIcon },
    { id: 'content', label: 'AI Content', icon: FileText },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'automation', label: 'Automation', icon: Zap },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  if (!user) {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      {children}
    </div>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex overflow-hidden">
      {/* Desktop Sidebar */}
      <aside 
        className={cn(
          "hidden md:flex flex-col border-r border-slate-800 bg-slate-900 transition-all duration-300",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        <div className="p-6 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-2 font-bold text-xl text-white">
              <TrendingUp className="text-indigo-500" />
              <span>TrendAffiliate</span>
            </div>
          )}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 hover:bg-slate-800 rounded-md text-slate-400"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronRight size={20} className="rotate-180" />}
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {navigation.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
              collapsed={isCollapsed}
            />
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors rounded-lg",
              isCollapsed && "justify-center"
            )}
          >
            <LogOut size={20} />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-slate-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-semibold text-white capitalize">
              {navigation.find(n => n.id === activeTab)?.label || 'Dashboard'}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-medium border border-indigo-500/20">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
              US Market
            </div>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-slate-900" />
            </button>
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold text-white uppercase overflow-hidden">
              {user.photoURL ? (
                <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                user.email?.[0] || 'U'
              )}
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-950">
          {children}
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative w-72 bg-slate-900 h-full border-r border-slate-800 flex flex-col animate-in slide-in-from-left duration-300">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                <TrendingUp className="text-indigo-500" />
                <span>TrendAffiliate</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 px-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 text-base font-medium transition-colors rounded-xl",
                    activeTab === item.id 
                      ? "bg-indigo-600 text-white" 
                      : "text-slate-400 hover:bg-slate-800"
                  )}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
            <div className="p-6 border-t border-slate-800">
               <button onClick={handleLogout} className="flex items-center gap-3 text-slate-400">
                  <LogOut size={20} />
                  <span>Logout</span>
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
