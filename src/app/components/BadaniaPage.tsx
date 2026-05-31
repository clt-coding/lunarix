import React from 'react';
import { Calendar, UserCheck, Microscope, ArrowRight } from 'lucide-react';

const BadaniaPage: React.FC = () => {
  const tests = [
    {
      category: "Profil Tarczycowy",
      items: ["TSH", "FT3", "FT4", "Anty-TPO", "Anty-TG"]
    },
    {
      category: "Profil Hormonów Płciowych",
      items: ["FSH", "LH", "Estradiol", "Progesteron", "Prolaktyna", "Testosteron", "Androstendion", "DHEA-S"]
    },
    {
      category: "Profil Metaboliczny",
      items: ["Insulina"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#493780] text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto" style={{ paddingTop: "80px" }}>
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Badania
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl" style={{ fontFamily: "'Nunito', sans-serif", color: "rgba(223, 217, 255, 0.75)" }}>
            Odpowiednia diagnostyka to pierwszy krok do zdrowia. Przygotowaliśmy listę kluczowych parametrów, 
            które pozwolą uzyskać pełny obraz Twojej gospodarki hormonalnej.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main List Section */}
          <div className="lg:col-span-2 space-y-8">
            {tests.map((group, idx) => (
              <section key={idx} className="bg-[#4a3f78] p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <Microscope className="text-purple-300" />
                  <h2 className="text-xl font-semibold">{group.category}</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {group.items.map((item) => (
                    <div key={item} className="bg-[#3a3068] py-3 px-4 rounded-lg border border-white/5 text-center hover:border-purple-400 transition-colors cursor-default">
                      <span className="font-medium text-gray-100">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Sidebar - Doctor Contact Section */}
          <aside className="lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-6 rounded-2xl sticky top-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="text-white" />
                <h3 className="text-xl font-bold">Skonsultuj wyniki</h3>
              </div>
              <p className="text-purple-100 text-sm mb-6 leading-relaxed">
                Nie interpretuj wyników na własną rękę. Nasi zaufani lekarze specjaliści pomogą Ci zrozumieć, 
                co oznaczają te parametry w Twoim przypadku.
              </p>
              
              <button className="w-full bg-white text-[#4a3f78] font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
                Umów e-konsultację <ArrowRight size={18} />
              </button>
              
              <div className="mt-6 pt-6 border-t border-white/20 text-xs text-purple-200">
                <p className="flex items-center gap-2 mb-2"><Calendar size={14}/> Szybkie terminy</p>
                <p className="flex items-center gap-2">✓ Bezpieczna dokumentacja medyczna</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BadaniaPage;