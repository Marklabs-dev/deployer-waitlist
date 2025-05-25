
import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import { Zap, Shield, Rocket, Code, Globe, Users } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Deploy Instantâneo",
      description: "Publique suas aplicações em segundos, sem configurações complexas ou conhecimento técnico."
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "SSL automático, proteção DDoS e monitoramento 24/7 para manter suas aplicações sempre seguras."
    },
    {
      icon: Rocket,
      title: "Performance Otimizada",
      description: "CDN global e otimizações automáticas para garantir velocidade máxima em qualquer lugar do mundo."
    },
    {
      icon: Code,
      title: "Sem Código Necessário",
      description: "Interface intuitiva que permite deploy de aplicações sem conhecimento em programação."
    },
    {
      icon: Globe,
      title: "Domínio Personalizado",
      description: "Configure seu próprio domínio com apenas alguns cliques e tenha presença profissional na web."
    },
    {
      icon: Users,
      title: "Colaboração em Equipe",
      description: "Gerencie projetos em equipe com permissões granulares e histórico completo de deployments."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
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

      {/* Features Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa para deployar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma plataforma completa que elimina a complexidade do deploy e hospedagem de aplicações
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
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
            <span>🚀 Lançamento previsto: Q2 2024</span>
            <span>👥 500+ desenvolvedores já cadastrados</span>
            <span>⚡ Early bird: 50% OFF</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
