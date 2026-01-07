
import React from 'react';
import { Calendar, Gift, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const CampaignDetails: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Header Promo */}
      <div className="bg-gradient-to-r from-blue-700 to-[#003399] text-white p-10 rounded-3xl shadow-xl text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
           <span className="bg-yellow-400 text-[#003399] text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-sm">Edizione Limitata</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">Campagna MultInvest Plus 2025/26</h2>
        <p className="text-blue-100 mb-6 font-medium">Condizioni straordinarie per le nuove polizze emesse tra il 16/12/2025 e il 28/02/2026</p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-2xl">
            <div className="text-yellow-400 font-bold text-2xl mb-1">90%</div>
            <div className="text-[10px] uppercase tracking-wider font-bold">Max in GS</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-2xl">
            <div className="text-yellow-400 font-bold text-2xl mb-1">1%</div>
            <div className="text-[10px] uppercase tracking-wider font-bold">Bonus Iniziale</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-2xl">
            <div className="text-yellow-400 font-bold text-2xl mb-1">1.5%</div>
            <div className="text-[10px] uppercase tracking-wider font-bold">Bonus Extra GS</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Gift className="text-blue-600" />
            Il Meccanismo del Bonus
          </h3>
          
          <div className="space-y-4">
            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-blue-200 transition-colors">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Bonus Iniziale (All'emissione)</h4>
                <p className="text-sm text-slate-600">Riconoscimento dell'<b>1%</b> dell'intero premio unico iniziale investito (al netto delle spese di emissione).</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-blue-200 transition-colors">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Bonus 12 Mesi (Sulla GS)</h4>
                <p className="text-sm text-slate-600">Ulteriore bonus dello <b>0,50%</b> calcolato sulla parte di premio investita nella Gestione Separata Zurich Trend.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-blue-200 transition-colors">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Bonus 24 Mesi (Sulla GS)</h4>
                <p className="text-sm text-slate-600">Ulteriore bonus dell'<b>1,00%</b> calcolato sulla parte di premio investita nella Gestione Separata Zurich Trend.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <CheckCircle className="text-emerald-500" />
            Vantaggi Chiave
          </h3>
          <ul className="space-y-5">
            <li className="flex gap-3">
              <ArrowRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
              <span className="text-sm text-slate-700"><b>Flessibilità senza precedenti:</b> Alloca fino al 90% in gestione separata per una protezione quasi totale del capitale.</span>
            </li>
            <li className="flex gap-3">
              <ArrowRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
              <span className="text-sm text-slate-700"><b>Accumulo Virtuoso:</b> I bonus vengono accreditati direttamente sulla quota di gestione separata, incrementando il capitale rivalutabile.</span>
            </li>
            <li className="flex gap-3">
              <ArrowRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
              <span className="text-sm text-slate-700"><b>Validità Estesa:</b> La possibilità del 90% in GS vale anche sui futuri versamenti aggiuntivi effettuati su queste polizze.</span>
            </li>
          </ul>

          <div className="mt-8 p-4 bg-orange-50 border border-orange-100 rounded-xl">
             <div className="flex items-center gap-2 text-orange-800 font-bold text-xs mb-2 uppercase">
               <AlertTriangle size={14} />
               Vincoli Importanti
             </div>
             <p className="text-xs text-orange-700 leading-relaxed">
               I bonus non saranno erogati qualora il contraente eserciti il riscatto totale o parziale prima delle scadenze indicate (12 e 24 mesi).
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
