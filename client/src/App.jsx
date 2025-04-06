import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const nodes = [
  {
    id: "A",
    title: "Multilingual Voice Assistant",
    desc: "IVR + AI (Rasa, Whisper, TTS)",
    color: "bg-blue-100"
  },
  {
    id: "B",
    title: "Mobile App",
    desc: "React Native / PWA",
    color: "bg-green-100"
  },
  {
    id: "C",
    title: "Core Intelligence Engine",
    desc: "Routing AI for all modules",
    color: "bg-yellow-100"
  },
  {
    id: "D1",
    title: "Digital Twin Farming",
    desc: "Simulation + Soil + Satellite",
    color: "bg-pink-100"
  },
  {
    id: "D2",
    title: "Credit Scoring Engine",
    desc: "XGBoost + Alt Data",
    color: "bg-purple-100"
  },
  {
    id: "D3",
    title: "Hyperlocal Advisory",
    desc: "Weather, Pest, Soil",
    color: "bg-orange-100"
  },
  {
    id: "D4",
    title: "Govt Scheme Finder",
    desc: "Dynamic & Personalized",
    color: "bg-indigo-100"
  },
  {
    id: "D5",
    title: "Market Linkage",
    desc: "Buyers, eNAM, ONDC",
    color: "bg-red-100"
  },
  {
    id: "D6",
    title: "FPO Tools",
    desc: "Dashboard, Group Trade",
    color: "bg-lime-100"
  },
  {
    id: "D7",
    title: "User Memory + AI Learning",
    desc: "LangChain, Personalization",
    color: "bg-emerald-100"
  }
];

const AgriTechArchitecture = () => {
  return (
    <div className="h-[90vh] w-full overflow-y-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {nodes.map((node, idx) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className={`shadow-lg rounded-2xl p-4 ${node.color}`}>
              <h2 className="text-xl font-semibold mb-2">{node.title}</h2>
              <p className="text-gray-700 text-sm">{node.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AgriTechArchitecture;
