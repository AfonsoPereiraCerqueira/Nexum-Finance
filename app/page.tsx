import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-16 overflow-hidden bg-black animate-fade-in">
      {/* Efeito de luz de fundo (Glow) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LADO ESQUERDO: Conteúdo */}
        <div className="z-10 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-500 text-xs font-bold tracking-widest uppercase animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Banking Evolution 2026
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] font-sans">
            The next era of <br />
            <span className="text-emerald-500">digital finance.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
            Take control of your wealth with high-yield accounts, instant global transfers, and AI-driven investment insights. Simple, secure, and built for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-emerald-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Get Started Now
            </button>
            <button className="border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
              View Pricing
            </button>
          </div>

          {/* Mini Stats */}
          <div className="pt-8 flex justify-center lg:justify-start gap-8 border-t border-white/5">
            <div>
              <p className="text-2xl font-bold text-white">4.9/5</p>
              <p className="text-sm text-gray-500">User Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">2M+</p>
              <p className="text-sm text-gray-500">Active Users</p>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Visual */}
        <div className="relative flex justify-center items-center">
          {/* Card Flutuante (Simulação) */}
          <div className="relative z-10 w-full max-w-[400px] aspect-[1.58/1] bg-gradient-to-br from-zinc-800 to-black border border-white/10 rounded-2xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out group overflow-hidden">
             {/* Brilho no card */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex justify-between items-start mb-12">
               <div className="w-12 h-10 bg-zinc-700/50 rounded-md" /> {/* Chip */}
               <div className="text-emerald-500 font-bold italic text-xl">NEXUM</div>
            </div>
            
            <div className="space-y-4">
              <div className="h-4 w-48 bg-white/10 rounded" />
              <div className="flex gap-4">
                <div className="h-4 w-12 bg-white/5 rounded" />
                <div className="h-4 w-12 bg-white/5 rounded" />
              </div>
            </div>
          </div>

          {/* Glow decorativo atrás do card */}
          <div className="absolute w-72 h-72 bg-emerald-500/20 rounded-full blur-[80px]" />
        </div>

      </div>
    </section>
  );
}
