import React from 'react';
import { useAuth } from './AuthContext';
import AppShell from './AppShell';
import Dashboard from './Dashboard';
import Discover from './Discover';
import ContentStudio from './ContentStudio';
import { TrendingUp, LogIn, Chrome } from 'lucide-react';

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div className="w-full max-w-md space-y-8 text-center animate-in fade-in zoom-in duration-500">
      <div className="space-y-4">
        <div className="inline-flex p-4 bg-indigo-600 rounded-3xl shadow-xl shadow-indigo-500/20 mb-4">
          <TrendingUp size={48} className="text-white" />
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">TrendAffiliate AI</h1>
        <p className="text-slate-400 text-lg">
          Automate your affiliate marketing. <br />
          Discover trends. Generate content. Scale.
        </p>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-xl">
        <button
          onClick={login}
          className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 py-4 px-6 rounded-2xl font-bold hover:bg-slate-100 transition-all active:scale-[0.98] shadow-xl"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>
        <p className="mt-6 text-xs text-slate-500">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Discover', icon: TrendingUp },
          { label: 'Automate', icon: Chrome },
          { label: 'Scale', icon: LogIn },
        ].map((item, idx) => (
          <div key={idx} className="space-y-2">
            <div className="mx-auto w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
              <item.icon size={20} />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = React.useState('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
        <p className="text-slate-500 text-sm font-medium animate-pulse">Initializing TrendAffiliate AI...</p>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'discover':
        return <Discover />;
      case 'affiliate':
        return (
          <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-2">Affiliate Links</h2>
            <p className="text-slate-400">Manage your product links and tracking parameters.</p>
          </div>
        );
      case 'content':
        return <ContentStudio />;
      case 'calendar':
        return (
          <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-2">Content Calendar</h2>
            <p className="text-slate-400">Plan and schedule your social media presence.</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-2">Analytics</h2>
            <p className="text-slate-400">Track clicks, revenue, and engagement across platforms.</p>
          </div>
        );
      case 'automation':
        return (
          <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-2">Automation Settings</h2>
            <p className="text-slate-400">Configure your autonomous marketing agents.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-2">General Settings</h2>
            <p className="text-slate-400">Account and platform configurations.</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppShell activeTab={activeTab} setActiveTab={setActiveTab}>
      {!user ? <LoginPage /> : renderContent()}
    </AppShell>
  );
}
