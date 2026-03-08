import { motion } from "motion/react";
import { Card } from "../../ui/Card";
import { BarChart3, Lightbulb, Bell } from "lucide-react";

export const OverviewSection = () => {
  const features = [
    {
      title: "Cost monitoring",
      icon: <BarChart3 className="w-8 h-8 text-emerald-500" />,
      description: "Real-time visibility into your cloud spend across all clusters.",
      delay: 0.1
    },
    {
      title: "Optimization insights",
      icon: <Lightbulb className="w-8 h-8 text-emerald-500" />,
      description: "Automated recommendations to reduce waste and save up to 70%.",
      delay: 0.2
    },
    {
      title: "Alerts",
      icon: <Bell className="w-8 h-8 text-emerald-500" />,
      description: "Get notified instantly when spend exceeds your budget.",
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }
              }}
            >
              <Card className="h-full flex flex-col items-center text-center p-8 group hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 bg-[var(--color-bg-secondary)]">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="w-20 h-20 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-all duration-500"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-500 transition-colors">{feature.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
