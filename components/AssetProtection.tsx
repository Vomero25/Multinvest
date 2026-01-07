
import React from 'react';
import { 
  ShieldCheck, 
  Briefcase, 
  Heart, 
  Users, 
  Gavel, 
  Lock, 
  ArrowRight,
  TrendingDown
} from 'lucide-react';

const AssetProtection: React.FC = () => {
  const pillars = [
    {
      title: "Segregazione Patrimoniale",
      description: "Gli attivi della Gestione Separata costituiscono un patrimonio separato da quello della Compagnia e degli altri clienti. Intoccabile in caso di insolvenza dell'assicuratore.",
      icon: Lock
    },
    {
      title: "Costo Storico",
      description: "I titoli sono valorizzati al costo di acquisto. Questo annulla la volatilità quotidiana dei mercati, garantendo stabilità anche in scenari di crisi finanziaria.",
      icon: TrendingDown
    },
    {
      title: "Tutela Legale (Art. 1923)",
      description: "Le somme sono impignorabili e insequestrabili (nei limiti di legge), offrendo un vero e proprio scudo contro azioni esecutive o cautelari esterne.",
      icon: ShieldCheck
    }
  ];

  const cases = [
    {
      title: "L'Imprenditore e il Rischio Aziendale",
      scenario: "Un imprenditore desidera proteggere il benessere familiare da potenziali rovesci futuri legati alla propria attività professionale.",
      solution: "Versando nel 90% GS, crea un paracadute finanziario 'blindato'. Anche in caso di fallimento o richieste danni, la polizza rimane una riserva sicura per la famiglia.",
      icon: Briefcase,
      color: "blue"
    },
    {
      title: "Pianificazione Successoria",
      scenario: "Un genitore vuole trasmettere un capitale ai figli minimizzando il carico fiscale e le lungaggini burocratiche.",
      solution: "La polizza è esente da imposte di successione e non rientra nell'asse ereditario. Zurich liquida i beneficiari in pochi giorni, senza attendere lo sblocco dei conti correnti.",
      icon: Users,
      color: "emerald"
    },
    {
      title: "Tutela di un Soggetto Fragile",
      scenario: "Una coppia vuole garantire una rendita vitalizia e sicura a un figlio con disabilità per il periodo 'Dopo di Noi'.",
      solution: "L'allocazione al 90% in Gestione Separata assicura che il capitale non subisca oscillazioni, mentre la designazione beneficiaria lo protegge da qualsiasi interferenza.",
      icon: Heart,
      color: "rose"
    },
    {
      title: "Gestione di Conflitti Ereditari",
      scenario: "Un nonno desidera premiare un nipote specifico senza che la somma rimanga bloccata in attesa di accordi tra tutti gli eredi.",
      solution: "Essendo un contratto a favore di terzi, il pagamento avviene direttamente al beneficiario designato, garantendo immediatezza e discrezione.",
      icon: Gavel,
      color: "amber"
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Pillar Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-black text-slate-900">Il 'Caveau Assicurativo' Zurich</h2>
        <p className="text-slate-500 max-w-3xl mx-auto">
          Perché l'allocazione al 90% in Gestione Separata non è solo un investimento, ma uno strumento di ingegneria patrimoniale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-[#003399] rounded-xl flex items-center justify-center mb-4">
              <pillar.icon size={24} />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">{pillar.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{pillar.description}</p>
          </div>
        ))}
      </div>

      {/* Real Life Cases Section */}
      <div className="bg-slate-900 rounded-[32px] p-8 md:p-12 text-white">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-blue-400 font-black text-[10px] uppercase tracking-widest">Life Strategy</span>
            <h3 className="text-2xl font-bold mt-1">Casi di Vita Reale</h3>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Esempi concreti di come Zurich MultInvest Plus tutela il patrimonio del contraente e dei suoi cari.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-${c.color}-500/20 text-${c.color}-400 group-hover:scale-110 transition-transform`}>
                  <c.icon size={24} />
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-lg">{c.title}</h4>
                  <div className="space-y-2">
                    <p className="text-xs text-slate-400 italic">"{c.scenario}"</p>
                    <div className="flex gap-2">
                      <ArrowRight size={14} className="text-blue-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-300 leading-relaxed">
                        <span className="font-bold text-white">La Soluzione:</span> {c.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Note */}
      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex items-center gap-4">
        <div className="bg-[#003399] p-2 rounded-lg text-white">
          <ShieldCheck size={20} />
        </div>
        <p className="text-xs text-[#003399] font-bold">
          La solidità del 90% in Gestione Separata Zurich Trend è certificata e garantita dalla storia di Zurich, con rendimenti costanti e una protezione patrimoniale d'eccellenza.
        </p>
      </div>
    </div>
  );
};

export default AssetProtection;
