
import React from 'react';
import { CPPClass } from '../types';
import { COSTS_STRUCTURE, PENALITIES } from '../constants';

const CostsOverview: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in duration-500">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Trasparenza e Struttura dei Costi</h2>
        <p className="text-slate-500">I costi di gestione variano in base alla classe di premio potenziale (CPP) scelta.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CPP A Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-slate-800 text-white p-6 text-center">
            <h3 className="text-xl font-bold">CPP A</h3>
            <p className="text-xs opacity-70 uppercase mt-1">Investimento &lt; 750k€</p>
          </div>
          <div className="p-6 flex-1 space-y-6">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Gestione Annua Contratto</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Primi 5 anni</span>
                  <span className="font-bold text-[#003399]">2,95%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Dal 6° anno</span>
                  <span className="font-bold text-slate-800">2,15%</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-50">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Gestione Separata</p>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Zurich Trend</span>
                <span className="font-bold text-slate-800">1,50%</span>
              </div>
            </div>
          </div>
        </div>

        {/* CPP B Card */}
        <div className="bg-white rounded-2xl border border-blue-200 shadow-md overflow-hidden flex flex-col transform scale-105 z-10">
          <div className="bg-[#003399] text-white p-6 text-center">
            <h3 className="text-xl font-bold">CPP B</h3>
            <p className="text-xs opacity-70 uppercase mt-1">Investimento 750k - 2.5M€</p>
          </div>
          <div className="p-6 flex-1 space-y-6">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Gestione Annua Contratto</p>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Tutta la durata</span>
                <span className="font-bold text-[#003399]">2,15%</span>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-50">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Gestione Separata</p>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Zurich Trend</span>
                <span className="font-bold text-slate-800">1,10%</span>
              </div>
            </div>
          </div>
        </div>

        {/* CPP C Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-slate-900 text-white p-6 text-center">
            <h3 className="text-xl font-bold">CPP C</h3>
            <p className="text-xs opacity-70 uppercase mt-1">Investimento &gt; 2.5M€</p>
          </div>
          <div className="p-6 flex-1 space-y-6">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Gestione Annua Contratto</p>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Tutta la durata</span>
                <span className="font-bold text-[#003399]">1,70%</span>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-50">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Gestione Separata</p>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Zurich Trend</span>
                <span className="font-bold text-slate-800">0,90%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Penalties Table */}
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Penalità di Riscatto (%)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="pb-4 font-bold text-slate-500 uppercase tracking-wider text-[10px]">Anni Trascorsi</th>
                <th className="pb-4 font-bold text-slate-800">CPP A</th>
                <th className="pb-4 font-bold text-slate-800">CPP B</th>
                <th className="pb-4 font-bold text-slate-800">CPP C</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[1, 2, 3, 4, 5, 6].map((year, idx) => (
                <tr key={year} className="hover:bg-slate-50/50">
                  <td className="py-4 text-slate-600">{year}° Anno</td>
                  <td className="py-4 font-medium">{(PENALITIES[CPPClass.A][idx] * 100).toFixed(2)}%</td>
                  <td className="py-4 font-medium">{(PENALITIES[CPPClass.B][idx] * 100).toFixed(2)}%</td>
                  <td className="py-4 font-medium">{(PENALITIES[CPPClass.C][idx] * 100).toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-blue-50 text-[#003399] rounded-xl text-xs font-medium italic">
          Nota: Per le classi B e C, se al momento del riscatto la totalità dei premi è investita in una Linea, le penalità non vengono applicate (under specific conditions).
        </div>
      </div>
    </div>
  );
};

export default CostsOverview;
