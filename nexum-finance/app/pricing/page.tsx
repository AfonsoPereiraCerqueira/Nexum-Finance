import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Pricing() {
  const plans = [
    {
      name: "Standard",
      price: "0",
      description: "Essential banking for your everyday life.",
      features: ["Free Virtual Card", "No monthly fees", "Standard Support", "Nexum App access"],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      name: "Premium",
      price: "9.90",
      description: "Advanced tools for frequent travelers and investors.",
      features: ["Exclusive Emerald Card", "Priority Support", "Zero FX fees", "1% Cashback on all spends"],
      buttonText: "Go Premium",
      highlight: true,
    },
    {
      name: "Nexum Black",
      price: "24.90",
      description: "The ultimate experience in digital private banking.",
      features: ["Metal Black Card", "24/7 Concierge", "Airport Lounge Access", "Premium Insurance"],
      buttonText: "Join Black",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-black font-sans px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-3">
            Pricing Plans
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-white">
            Choose the perfect <br />
            <span className="text-gray-500">fit for your wealth.</span>
          </p>
        </div>

        {/* Grid de Cartões */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`bg-zinc-900/40 border-white/5 text-white transition-all duration-300 hover:scale-105 ${
                plan.highlight ? "border-emerald-500/50 ring-1 ring-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">€{plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="h-4 w-4 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full font-bold h-12 rounded-xl transition-all ${
                    plan.highlight 
                      ? "bg-emerald-500 text-black hover:bg-emerald-400" 
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}