import { useEffect } from "react";
import { Cpu, Star, User, Box, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Made in Bangladesh",
    desc: "Proudly manufactured locally with international quality standards.",
    icon: Box,
  },
  {
    title: "Quality Assurance",
    desc: "Rigorously tested products built for long-lasting performance.",
    icon: CheckCircle,
  },
  {
    title: "Customer Focus",
    desc: "Dedicated support and service network across the country.",
    icon: User,
  },
  {
    title: "Innovative Design",
    desc: "Contemporary products that simplify everyday life.",
    icon: Cpu,
  },
  {
    title: "Value for Money",
    desc: "Reliable technology at competitive prices.",
    icon: Star,
  },
];

const WhyChooseUs = () => {
  return (
    <section className=" py-20 mt-2">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Why Choose <span className="text-[#dd2400]">Tycoon?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <IconComponent className="w-12 h-12 text-[#dd2400] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
