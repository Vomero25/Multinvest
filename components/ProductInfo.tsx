
import React from 'react';
import { Shield, User, Coins, CreditCard, LifeBuoy, Clock } from 'lucide-react';

const ProductInfo: React.FC = () => {
  const sections = [
    {
      title: "Identikit Prodotto",
      icon: Shield,
      content: "Zurich MultInvest Plus è un'assicurazione sulla vita di tipo multiramo a vita intera e premio unico. Combina la stabilità della Gestione Separata (Ramo I) con il dinamismo dei fondi Unit-Linked (Ramo III)."
    },
    {
      title: "Soggetti Assicurabili",
      icon: User,
      content: "Contraente: Persona Fisica (min 18 anni) o Giuridica. Assicurato: Persona Fisica tra 18 e 85 anni (età assicurativa)."
    },
    {
      title: "Premi e Versamenti",
      icon: Coins,
      content: "Premio unico iniziale minimo di 15.000€ (CPP A/B) o 250.000€ (CPP C). Possibilità di premi aggiuntivi (min 1.200€) e piani di versamento programmati."
    },
    {
      title: "Opzioni d'Investimento",
      icon: CreditCard,
      content: "5 Linee Guidate (Prudente, Moderata, Bilanciata ESG, Dinamica, Obiettivo Cedola) o Linea Libera (fino a 9 fondi). Combinabile con Gestione Separata Zurich Trend (fino al 40%, esteso al 90% in campagna)."
    },
    {
      title: "Protezione Caso Morte",
      icon: LifeBuoy,
      content: "Incremento del controvalore in caso di decesso: +10% (fino a 65 anni), +5% (66-70 anni), +1% (oltre 70). Limite massimo incremento 200.000€."
    },
    {
      title: "Opzioni Contrattuali",
      icon: Clock,
      content: "Life Cycle (switch automatico basato sull'età), Take Profit (messa in sicurezza plusvalenze), e Piano di erogazione prestazioni periodiche (cedole)."
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">Unire stabilità e performance in un unico contratto</h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto leading-relaxed">
          La versatilità di MultInvest Plus ti permette di adattare il tuo investimento nel tempo, scegliendo tra linee gestite dai migliori advisor internazionali e la protezione Zurich Trend.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-50 text-[#003399] rounded-xl flex items-center justify-center mb-4">
              <section.icon size={22} />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">{section.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-[#003399] rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold mb-2 italic">Novità Settembre 2025</h3>
            <p className="text-blue-100 text-sm">
              Revisione completa dell'offerta finanziaria con nuovi advisor globali: Morgan Stanley (Prudente), DWS (Moderata), Vontobel (ESG) e Pictet (Dinamica).
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-[#003399] font-bold rounded-xl whitespace-nowrap">
            Scarica Scheda Prodotto (PDF)
          </button>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <Shield size={200} />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
