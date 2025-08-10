"use client";
import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Excellence in Action Award",
      description: "Recognized for outstanding contributions and impact.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      title: "Best Performer (3 Times)",
      description: "Awarded for consistent top performance and dedication.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-yellow-400/20 transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>{ach.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{ach.title}</h3>
                <p className="text-gray-400 text-sm">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
