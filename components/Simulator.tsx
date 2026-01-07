
import React, { useState, useMemo } from 'react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, 
  Scale, 
  UserCheck, 
  Layers, 
  PlusCircle,
  Gem,
  Info,
  AlertCircle
} from 'lucide-react';
import { CPPClass } from '../types';
import { BASE_RETURNS, COSTS_STRUCTURE } from '../constants';

const Simulator: React.FC = () => {
  const [premium, setPremium] = useState<number>(100000);
  const [gsAllocation, setGsAllocation] = useState<number>(50);
  const [gsReturn, setGsReturn] = useState<number>(BASE_RETURNS.GS);
  const [lineaReturn, setLineaReturn] = useState<number>(4.0);
  const [years, setYears] = useState<number>(10);
  const [hasCommissionSacrifice, setHasCommissionSacrifice] = useState<boolean>(false);

  // Determina la classe CPP reale basata sul premio
  const currentCppClass = useMemo(() => {
    if (premium < 750000) return CPPClass.A;
    if (premium < 2500000) return CPPClass.B;
    return CPPClass.C;
  }, [premium]);

  // Logica di calcolo centralizzata
  const calculateSimulation = (targetClass: CPPClass) => {
    const data: any[] = [];
    const emissionFee = premium < 20000 ? 75 : 0;
    const netPremium = premium - emissionFee;
    
    // 1. BONUS SUL PREMIO (CAPITALE INIZIALE T0)
    const initialCampaignBonus = netPremium * 0.01; // Bonus Campagna 1% sul capitale
    const sacrificeBonus = hasCommissionSacrifice ? netPremium * 0.01 : 0; // Commission Sacrifice 1% sul capitale
    
    const totalInitialInvested = netPremium + initialCampaignBonus + sacrificeBonus;
    
    // Suddivisione Iniziale
    let currentGS = totalInitialInvested * (gsAllocation / 100);
    let currentLinea = totalInitialInvested * (1 - gsAllocation / 100);
    
    data.push({
      year: 0,
      totalValue: currentGS + currentLinea,
      gsValue: currentGS,
      lineaValue: currentLinea,
      bonusCapital: initialCampaignBonus + sacrificeBonus,
      costs: emissionFee
    });

    for (let y = 1; y <= years; y++) {
      // 2. BONUS SUL RENDIMENTO GS (0.5% Y1, 1% Y2 aggiuntivi al rendimento lordo GS)
      let gsBonusYieldExtra = 0;
      if (y === 1) gsBonusYieldExtra = 0.5;
      if (y === 2) gsBonusYieldExtra = 1.0;

      // Costi Gestione basati sulla classe CPP
      const gsCostRate = COSTS_STRUCTURE[targetClass].gs;
      const lineaCostRate = targetClass === CPPClass.A 
        ? (y <= 5 ? COSTS_STRUCTURE[CPPClass.A].lineaFirst5 : COSTS_STRUCTURE[CPPClass.A].lineaAfter5)
        : (targetClass === CPPClass.B ? COSTS_STRUCTURE[CPPClass.B].linea : COSTS_STRUCTURE[CPPClass.C].linea);

      // Calcolo Rendimenti Netti
      // Rendimento GS Netto = (Rendimento Lordo + Bonus Rendimento Campagna) - Costo Gestione
      const netGsReturnRate = (gsReturn + gsBonusYieldExtra) / 100 - gsCostRate;
      // Rendimento Linea Netto = Rendimento Lordo - Costo Gestione
      const netLineaReturnRate = (lineaReturn / 100) - lineaCostRate;

      const gsGrowth = currentGS * netGsReturnRate;
      const lineaGrowth = currentLinea * netLineaReturnRate;

      const gsCost = currentGS * gsCostRate;
      const lineaCost = currentLinea * lineaCostRate;

      currentGS += gsGrowth;
      currentLinea += lineaGrowth;

      data.push({
        year: y,
        totalValue: currentGS + currentLinea,
        gsValue: currentGS,
        lineaValue: currentLinea,
        bonusYieldValue: gsBonusYieldExtra > 0 ? (currentGS * (gsBonusYieldExtra / 100)) : 0,
        costs: gsCost + lineaCost
      });
    }
    return data;
  };

  const results = useMemo(() => calculateSimulation(currentCppClass), [premium, gsAllocation, gsReturn, lineaReturn, years, currentCppClass, hasCommissionSacrifice]);

  // Comparativa dinamica per tutte le classi di premio
  const comparisonData = useMemo(() => [
    { label: 'CPP A', results: calculateSimulation(CPPClass.A) },
    { label: 'CPP B', results: calculateSimulation(CPPClass.B) },
    { label: 'CPP C', results: calculateSimulation(CPPClass.C) }
  ], [premium, gsAllocation, gsReturn, lineaReturn, years, hasCommissionSacrifice]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sidebar - Controlli (Col 4) */}
      <aside className="lg:col-span-4 space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Scale size={20} className="text-[#003399]" />
            Parametri Strategici
          </h3>

          <div className="space-y-6">
            {/* Input Premio */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2 flex justify-between">
                Premio Unico Versato
                <span className="text-[#003399] font-black">€ {premium.toLocaleString()}</span>
              </label>
              <input type="range" min="15000" max="2500000" step="5000" value={premium} onChange={(e) => setPremium(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#003399]" />
            </div>

            {/* Toggle Commission Sacrifice */}
            <div className={`p-4 rounded-xl border-2 transition-all ${hasCommissionSacrifice ? 'bg-emerald-50 border-emerald-500' : 'bg-slate-50 border-slate-100'}`}>
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-2">
                  <UserCheck className={hasCommissionSacrifice ? 'text-emerald-600' : 'text-slate-400'} size={20} />
                  <div>
                    <span className="text-sm font-bold text-slate-800">Commission Sacrifice</span>
                    <p className="text-[10px] text-slate-500 font-medium">Extra Bonus +1,00% sul capitale</p>
                  </div>
                </div>
                <input type="checkbox" checked={hasCommissionSacrifice} onChange={(e) => setHasCommissionSacrifice(e.target.checked)} className="w-6 h-6 accent-emerald-600 cursor-pointer" />
              </label>
            </div>

            {/* Allocation GS */}
            <div className="pt-4 border-t border-slate-50">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2 flex justify-between">
                Ramo I: Zurich Trend (GS)
                <span className="text-blue-600 font-black">{gsAllocation}%</span>
              </label>
              <input type="range" min="0" max="90" step="5" value={gsAllocation} onChange={(e) => setGsAllocation(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>

            {/* Input Rendimenti */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase">Rend. GS Lordo</label>
                <div className="relative">
                  <input type="number" step="0.1" value={gsReturn} onChange={(e) => setGsReturn(Number(e.target.value))} className="w-full p-2 pr-8 text-sm border-2 border-slate-100 rounded-lg focus:border-blue-500 outline-none font-bold" />
                  <span className="absolute right-3 top-2 text-slate-400 font-bold">%</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase">Rend. Linea Lordo</label>
                <div className="relative">
                  <input type="number" step="0.1" value={lineaReturn} onChange={(e) => setLineaReturn(Number(e.target.value))} className="w-full p-2 pr-8 text-sm border-2 border-slate-100 rounded-lg focus:border-emerald-500 outline-none font-bold" />
                  <span className="absolute right-3 top-2 text-slate-400 font-bold">%</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Orizzonte Temporale: {years} Anni</label>
              <input type="range" min="1" max="25" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-700" />
            </div>
          </div>
        </div>

        {/* Bonus Breakdown Visualizer */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-20"><Gem size={60} /></div>
          <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-4">Focus Bonus Attivi</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 p-1.5 rounded-lg"><PlusCircle size={14} /></div>
              <div>
                <span className="text-[10px] font-bold uppercase opacity-60">Sottoscrizione (Capitale)</span>
                <p className="text-sm font-bold">Bonus Campagna: +1,00%</p>
                {hasCommissionSacrifice && <p className="text-sm font-bold text-emerald-400">Extra CF Bonus: +1,00%</p>}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-yellow-500 p-1.5 rounded-lg"><TrendingUp size={14} /></div>
              <div>
                <span className="text-[10px] font-bold uppercase opacity-60">Anno 1 e Anno 2 (GS Rendimento)</span>
                <p className="text-sm font-bold text-yellow-400">+0,50% e +1,00% Extra Yield</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content (Col 8) */}
      <main className="lg:col-span-8 space-y-6">
        {/* Quick Summary Recap */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="text-center md:text-left">
            <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Capitale Versato</p>
            <p className="text-2xl font-black text-slate-400">€ {premium.toLocaleString()}</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-px w-8 bg-slate-200" />
            <div className="mx-2 bg-[#003399] text-white px-3 py-1 rounded-full text-[10px] font-black animate-pulse uppercase tracking-wider">Bonus T0</div>
            <div className="h-px w-8 bg-slate-200" />
          </div>
          <div className="text-center md:text-right">
            <p className="text-[10px] font-black text-[#003399] uppercase mb-1">Capitale Investito T0</p>
            <p className="text-2xl font-black text-[#003399]">€ {results[0].totalValue.toLocaleString()}</p>
            <p className="text-[10px] font-bold text-emerald-600">
               +{((results[0].totalValue / premium - 1) * 100).toFixed(1)}% (+ € {(results[0].totalValue - premium).toLocaleString()})
            </p>
          </div>
        </div>

        {/* Multi-CPP Class Performance Table */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h4 className="text-xs font-black uppercase text-slate-500 mb-4 flex items-center gap-2">
            <Layers size={16} />
            Performance per Classe di Premio (CPP)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {comparisonData.map((cls) => {
              const isCurrent = cls.label === currentCppClass;
              const finalVal = cls.results[cls.results.length - 1].totalValue;
              const totalRet = (finalVal / premium - 1) * 100;
              return (
                <div key={cls.label} className={`p-4 rounded-xl border-2 transition-all ${isCurrent ? 'bg-blue-50 border-[#003399]' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase">{cls.label}</span>
                    {isCurrent && <span className="bg-[#003399] text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase">Classe Attuale</span>}
                  </div>
                  <p className="text-lg font-black text-slate-900">€ {finalVal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                  <p className={`text-[10px] font-bold ${totalRet > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    Rend. Totale: {totalRet.toFixed(1)}%
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-sm font-bold text-slate-800">Evoluzione del Capitale ({currentCppClass})</h4>
            <div className="flex gap-4">
               <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-blue-400 rounded-sm" /> <span className="text-[10px] font-bold text-slate-500">GS</span></div>
               <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-emerald-400 rounded-sm" /> <span className="text-[10px] font-bold text-slate-500">Linea</span></div>
            </div>
          </div>
          <div className="h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={results}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} tickFormatter={(v) => `€${v/1000}k`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(v: any) => [`€ ${v.toLocaleString(undefined, {maximumFractionDigits: 0})}`]}
                />
                <Area name="Gestione Separata" type="monotone" dataKey="gsValue" stroke="#00a9e0" fill="#00a9e0" fillOpacity={0.1} stackId="1" strokeWidth={3} />
                <Area name="Linea Gestita" type="monotone" dataKey="lineaValue" stroke="#10b981" fill="#10b981" fillOpacity={0.1} stackId="1" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Disclaimer / Note Section */}
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 flex items-start gap-4">
          <div className="bg-amber-100 p-2 rounded-lg text-amber-600 shrink-0">
            <AlertCircle size={20} />
          </div>
          <div>
            <h5 className="font-bold text-amber-900 text-sm mb-1 uppercase tracking-wide">Disclaimer Importante</h5>
            <p className="text-xs text-amber-800 leading-relaxed font-medium">
              Trattasi di un simulatore a solo scopo illustrativo del <strong>Gruppo Vomero</strong>. 
              La simulazione applica i bonus campagna dell'1% sul premio netto iniziale (T0) e i bonus dello 0,5% e 1% aggiuntivi sul rendimento lordo della Gestione Separata rispettivamente nel primo e secondo anno. 
              I dati non costituiscono garanzia di rendimento futuro e non sostituiscono la consultazione del Set Informativo ufficiale Zurich.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Simulator;
