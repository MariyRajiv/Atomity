import { motion } from "motion/react";
import { Card } from "../components/ui/Card";
import { Cloud, Shield, Zap, Globe, Cpu, Database } from "lucide-react";
import { SectionHeader } from "../components/feature/FeatureSection/SectionHeader";

export const Solutions = () => {
  const solutions = [
    {
      title: "Sovereign Cloud",
      description: "Ensure data residency and compliance with local regulations by routing workloads to sovereign cloud providers.",
      icon: <Shield className="w-8 h-8 text-emerald-500" />,
    },
    {
      title: "AI Infrastructure",
      description: "Optimize GPU utilization and reduce latency for large-scale AI training and inference workloads.",
      icon: <Cpu className="w-8 h-8 text-emerald-500" />,
    },
    {
      title: "Green Computing",
      description: "Automatically shift workloads to regions with the lowest carbon intensity and highest renewable energy mix.",
      icon: <Zap className="w-8 h-8 text-emerald-500" />,
    },
    {
      title: "Multi-Cloud Governance",
      description: "Unified control plane for managing costs, security, and compliance across AWS, Azure, GCP, and more.",
      icon: <Globe className="w-8 h-8 text-emerald-500" />,
    },
    {
      title: "Edge Orchestration",
      description: "Deploy and manage containerized workloads at the edge with automated scaling and failover.",
      icon: <Cloud className="w-8 h-8 text-emerald-500" />,
    },
    {
      title: "Database Optimization",
      description: "Intelligent data placement to minimize egress costs and maximize performance for distributed databases.",
      icon: <Database className="w-8 h-8 text-emerald-500" />,
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          badge="Solutions"
          title="Tailored for Enterprise Scale"
          subtitle="Atomity provides specialized orchestration for the most demanding cloud environments, focusing on sovereignty, sustainability, and efficiency."
          className="text-center flex flex-col items-center mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card hoverable className="h-full p-8 flex flex-col items-start group">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">{solution.title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {solution.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-emerald-500 rounded-[40px] p-12 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-6">Ready to optimize your cloud?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Join hundreds of enterprises using Atomity to reduce their cloud spend and environmental impact.
            </p>
            <a 
              href="https://atomity.de/contact-form"
              className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Get Started Now
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </motion.div>
      </div>
    </div>
  );
};
