
import React, { useState } from 'react';
import { 
  Calculator, 
  Info, 
  ShieldCheck, 
  Menu,
  X,
  FileText,
  Lock
} from 'lucide-react';
import Simulator from './components/Simulator';
import ProductInfo from './components/ProductInfo';
import CampaignDetails from './components/CampaignDetails';
import CostsOverview from './components/CostsOverview';
import AssetProtection from './components/AssetProtection';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'info' | 'campaign' | 'costs' | 'protection'>('simulator');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'simulator', label: 'Simulatore', icon: Calculator },
    { id: 'protection', label: 'Protezione', icon: Lock },
    { id: 'info', label: 'Caratteristiche', icon: Info },
    { id: 'campaign', label: 'Campagna Bonus', icon: ShieldCheck },
    { id: 'costs', label: 'Costi e Penali', icon: FileText },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#003399] rounded-full flex items-center justify-center text-white font-bold text-2xl">Z</div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-tight">Zurich MultInvest Plus</h1>
                <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Simulatore Strategico Wealth</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-1 bg-slate-100 p-1 rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-[#003399] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 animate-in fade-in slide-in-from-top-4">
            <div className="grid gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left font-medium ${
                    activeTab === tab.id
                      ? 'bg-[#003399] text-white'
                      : 'bg-slate-50 text-slate-700'
                  }`}
                >
                  <tab.icon size={20} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="transition-opacity duration-300">
          {activeTab === 'simulator' && <Simulator />}
          {activeTab === 'info' && <ProductInfo />}
          {activeTab === 'campaign' && <CampaignDetails />}
          {activeTab === 'costs' && <CostsOverview />}
          {activeTab === 'protection' && <AssetProtection />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">V</div>
                <span className="text-white font-semibold">Gruppo Vomero</span>
              </div>
              <p className="text-sm max-w-md">
                Questo simulatore è a solo scopo illustrativo ed è fornito dal <strong>Gruppo Vomero</strong>. Si basa sulla documentazione di Settembre 2025. 
                I rendimenti passati non sono garanzia di risultati futuri. Prima della sottoscrizione leggere il Set Informativo.
              </p>
            </div>
            <div className="flex md:justify-end gap-8 text-xs">
              <span className="hover:text-white cursor-pointer">Note Legali</span>
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Contatti</span>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs">
            © 2025 Gruppo Vomero - Progetto Zurich MultInvest Plus. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
