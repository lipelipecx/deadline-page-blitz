
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {[
        {
          title: "Basic",
          price: "47",
          features: ["Feature 1", "Feature 2", "Feature 3"],
          popular: false,
        },
        {
          title: "Pro",
          price: "97",
          features: ["Everything in Basic", "Feature 4", "Feature 5", "Feature 6"],
          popular: true,
        },
        {
          title: "Enterprise",
          price: "197",
          features: ["Everything in Pro", "Feature 7", "Feature 8", "Feature 9"],
          popular: false,
        }
      ].map((plan) => (
        <div
          key={plan.title}
          className={`relative rounded-2xl p-8 ${
            plan.popular
              ? "bg-purple-900 text-white scale-105"
              : "bg-white"
          } shadow-xl`}
        >
          {plan.popular && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </span>
          )}
          <h3 className="text-2xl font-bold">{plan.title}</h3>
          <div className="mt-4 mb-8">
            <span className="text-4xl font-bold">${plan.price}</span>
            <span className="text-gray-500">/month</span>
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
            Get Started
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
