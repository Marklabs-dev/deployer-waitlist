
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";

interface WaitlistFormProps {
  variant?: "light" | "dark";
}

const WaitlistForm = ({ variant = "light" }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      if (!email || !email.includes("@")) {
        toast({
          title: "Email inválido",
          description: "Por favor, insira um email válido.",
          variant: "destructive",
        });
        return;
      }

      setIsLoading(true);

      // enviar email para webhook
      await fetch("https://auto.devinte.dev/webhook/deployer_waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      toast({
        title: "Sucesso! 🎉",
        description: "Você foi adicionado à nossa lista de espera.",
      });

      setIsLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao enviar email",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      })
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`text-center p-6 rounded-2xl ${variant === "dark"
        ? "bg-white/10 backdrop-blur-sm border border-white/20"
        : "bg-green-50 border border-green-200"
        }`}>
        <CheckCircle className={`w-12 h-12 mx-auto mb-4 ${variant === "dark" ? "text-white" : "text-green-600"
          }`} />
        <h3 className={`text-lg font-semibold mb-2 ${variant === "dark" ? "text-white" : "text-green-800"
          }`}>
          Obrigado por se inscrever!
        </h3>
        <p className={`text-sm ${variant === "dark" ? "text-blue-100" : "text-green-600"
          }`}>
          Você receberá atualizações exclusivas sobre o lançamento do Deployer.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`p-6 rounded-2xl ${variant === "dark"
        ? "bg-white/10 backdrop-blur-sm border border-white/20"
        : "bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl"
        }`}>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${variant === "dark" ? "text-white/60" : "text-gray-400"
              }`} />
            <Input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`pl-10 h-12 ${variant === "dark"
                ? "bg-white/20 border-white/30 text-white placeholder:text-white/60"
                : "bg-white border-gray-300"
                }`}
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className={`h-12 px-8 ${variant === "dark"
              ? "bg-white text-blue-600 hover:bg-gray-100"
              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              }`}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              "Entrar na lista"
            )}
          </Button>
        </div>

        <p className={`text-xs mt-3 ${variant === "dark" ? "text-white/60" : "text-gray-500"
          }`}>
          Ao se inscrever, você concorda em receber atualizações sobre o Deployer.
          Sem spam, apenas conteúdo relevante.
        </p>
      </div>
    </form>
  );
};

export default WaitlistForm;
