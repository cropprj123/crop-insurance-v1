// Import the missing icon
import {
  IconAi,
  IconCurrencyBitcoin,
  IconCloud,
  IconHelp,
  IconHeart,
  IconMan,
} from "@tabler/icons-react";
import React from "react";
import { cn } from "../../utils/cn";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "AI-Powered Insights",
      description:
        "Personalized crop recommendations, fertilizer advice, and disease detection.",
      icon: <IconAi />,
    },
    {
      title: "Blockchain-Backed Transparency",
      description:
        "Immutable records of all transactions and insurance contracts.",
      icon: <IconCurrencyBitcoin />,
    },
    {
      title: "Weather-Integrated Monitoring",
      description:
        "Real-time weather data to trigger alerts and inform insurance claims.",
      icon: <IconCloud />,
    },
    {
      title: "Farmer-Centric Interface",
      description: "Simplified processes tailored for ease of use.",
      icon: <IconMan />,
    },

    {
      title: "Secure and Reliable",
      description:
        "We are available a 100% of the time. At least our AI Agents are.",
      icon: <IconHelp />,
    },

    {
      title: "And everything else",
      description: "All time high quality 24/7 support.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-green-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

// const Feature = ({ title, description, icon, index }) => (
//   <div className="flex flex-col lg:border-r py-10 relative">
//     <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
//       {icon}
//     </div>
//     <h3 className="text-lg font-bold mb-2">{title}</h3>
//     <p className="text-sm text-neutral-600 dark:text-neutral-300">
//       {description}
//     </p>
//   </div>
// );
