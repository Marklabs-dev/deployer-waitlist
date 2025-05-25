import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8 animate-fade-in">
              🚀 Revolucione seu processo de deploy
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Deployer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto animate-fade-in">
              A plataforma SaaS que simplifica o build e deploy de aplicações
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in">
              Publique suas aplicações em minutos, sem necessidade de conhecimento técnico. 
              Hospedagem profissional com performance e segurança garantidas.
            </p>
            
            <div className="max-w-md mx-auto animate-scale-in">
              <WaitlistForm />
            </div>
            
            <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-gray-500 animate-fade-in">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Sem cartão de crédito
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Setup em minutos
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Suporte 24/7
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual Demo Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl p-8 animate-scale-in">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-400">deployer.com/dashboard</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-400">✓</span>
                    <span className="ml-2 text-sm">Aplicação buildada com sucesso</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400">✓</span>
                    <span className="ml-2 text-sm">Deploy realizado em 12s</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400">→</span>
                    <span className="ml-2 text-sm">Sua aplicação está live em: https://meuapp.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para simplificar seus deploys?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se à lista de espera e seja um dos primeiros a experimentar a revolução no deploy de aplicações.
          </p>
          
          <div className="max-w-md mx-auto">
            <WaitlistForm variant="dark" />
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-blue-100">
            {/* <span>🚀 Lançamento previsto: Q2 2024</span> */}
            <span>👥 500+ desenvolvedores já cadastrados</span>
            <span>⚡ Early bird: 50% OFF</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
