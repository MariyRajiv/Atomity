import { motion } from "motion/react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Check } from "lucide-react";
import { SectionHeader } from "../components/feature/FeatureSection/SectionHeader";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for small teams and startups exploring cloud optimization.",
      features: [
        "Up to 3 clusters",
        "Basic cost monitoring",
        "Weekly optimization reports",
        "Community support",
        "Standard remediation"
      ],
      cta: "Start for Free",
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      description: "Advanced orchestration for growing companies with multi-cloud needs.",
      features: [
        "Up to 20 clusters",
        "Real-time cost visibility",
        "Automated right-sizing",
        "Priority email support",
        "Custom governance policies",
        "Sovereign cloud routing"
      ],
      cta: "Start 14-day Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Full-scale cloud governance and sustainability for global enterprises.",
      features: [
        "Unlimited clusters",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced AI workload routing",
        "Carbon footprint auditing",
        "On-premise orchestration"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          badge="Pricing"
          title="Simple, Transparent Plans"
          subtitle="Choose the plan that fits your scale. All plans include our core orchestration engine and basic cost visibility."
          className="text-center flex flex-col items-center mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest z-10 shadow-lg">
                  Most Popular
                </div>
              )}
              <Card 
                className={`h-full p-10 flex flex-col border-2 ${plan.popular ? 'border-emerald-500 shadow-2xl shadow-emerald-500/10' : 'border-[var(--color-border-subtle)]'}`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-black mb-2 text-[var(--color-text-primary)]">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl font-black text-emerald-500">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-[var(--color-text-muted)] font-bold">/mo</span>}
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-500" />
                      </div>
                      <span className="text-sm text-[var(--color-text-primary)] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  className="w-full py-6 text-lg font-black uppercase tracking-widest"
                  href="https://atomity.de/contact-form"
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-[var(--color-text-secondary)] mb-8">
            Need a custom solution? <a href="https://atomity.de/contact-form" className="text-emerald-500 font-bold hover:underline">Talk to our cloud experts</a>
          </p>
          <div className="flex flex-wrap justify-center gap-12">
             <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-8" referrerPolicy="no-referrer" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" alt="Azure" className="h-8" referrerPolicy="no-referrer" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="GCP" className="h-8" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  );
};
