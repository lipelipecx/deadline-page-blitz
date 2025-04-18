
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {[
        {
          title: "Básico",
          price: "47",
          features: ["Recurso 1", "Recurso 2", "Recurso 3"],
          popular: false,
          image: "https://source.unsplash.com/random/400x300?minimal"
        },
        {
          title: "Pro",
          price: "97",
          features: ["Tudo do Básico", "Recurso 4", "Recurso 5", "Recurso 6"],
          popular: true,
          image: "https://source.unsplash.com/random/400x300?premium"
        },
        {
          title: "Enterprise",
          price: "197",
          features: ["Tudo do Pro", "Recurso 7", "Recurso 8", "Recurso 9"],
          popular: false,
          image: "https://source.unsplash.com/random/400x300?luxury"
        }
      ].map((plan) => (
        <div
          key={plan.title}
          className={`relative rounded-2xl p-8 ${
            plan.popular
              ? "bg-purple-900 text-white scale-105 animate-pulse-border"
              : "bg-white"
          } shadow-xl`}
        >
          {plan.popular && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-1 rounded-full text-sm">
              Mais Popular
            </span>
          )}
          <img 
            src={plan.image} 
            alt={plan.title}
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
          <h3 className="text-2xl font-bold">{plan.title}</h3>
          <div className="mt-4 mb-8">
            <span className="text-4xl font-bold">R${plan.price}</span>
            <span className="text-gray-500">/mês</span>
          </div>
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Começar Agora
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
