"use client";
import { Sparkles, BarChart,  Clock, ShieldCheck, Users, Leaf } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Iphone15Pro from "@/components/iphone-15-pro";


interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

export default function AboutPage() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-4" aria-label="About frontforumfocus">
      {/* Background gradient - matches homepage */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 dark:bg-blue-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="space-y-16 max-w-6xl w-full">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto w-fit rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 px-4 py-1"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-blue-900 dark:text-blue-200">
              <Sparkles className="h-4 w-4" />
              <span>Pioneering Sustainable Impact Measurement</span>
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white animate-gradient-x">
            About frontforumfocus
          </h1>
        </motion.div>

        {/* Updated Android section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="group relative rounded-3xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900 shadow-xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-8 p-8">
            {/* iPhone Section */}
            <div className="md:w-1/2 lg:w-1/3 shrink-0">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-inner">
                <Iphone15Pro
                  className="w-full h-auto rounded-[20px] border-4 border-white dark:border-gray-700"
                  src="/Frame.png"
                />
              </div>
            </div>

            {/* Individuals Content */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900 dark:from-blue-400 dark:to-blue-200">
                  For Individuals
                </h2>
              </div>
              
              <ul className="grid gap-4">
                {[
                  "Map daily activities to SDGs",
                  "Track personal impact metrics",
                  "AI-driven sustainability suggestions",
                  "Contribute to organizational goals"
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="flex-1 text-lg">{item}</span>
                  </li>
                ))}
              </ul>

         
            </div>
          </div>

          {/* Decorative Gradient */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 to-transparent dark:from-blue-900/20" />
        </motion.div>
        
        {/* Content Sections */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionBlock
                icon={<BarChart className="w-6 h-6" />}
                title="For Organizations"
                items={[
                  "Automate data collection and verification",
                  "Generate real-time sustainability analytics",
                  "Streamline ESG reporting processes",
                  "Align activities with SDGs effortlessly"
                ]}
              />
            </motion.div>

        
          </div>

          <FeatureGrid
            title="Key Features"
            features={[
              { icon: <Sparkles />, text: "AI-Powered Insights" },
              { icon: <Clock />, text: "Real-Time Dashboard" },
              { icon: <ShieldCheck />, text: "Automated Reporting" },
              { icon: <Leaf />, text: "SDG Alignment" }
            ]}
          />

          <BenefitSection />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center pt-8"
          >
            <Link href="/waitlist">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 h-12"
              >
                Join Now
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const SectionBlock = ({ icon, title, items }: { 
  icon: React.ReactNode;
  title: string;
  items: string[];
}) => (
  <div className="h-full rounded-2xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/30 dark:bg-blue-900/20 p-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">{icon}</div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h2>
    </div>
    <ul className="grid gap-3 pl-2">
      {items.map((item: string, idx: number) => (
        <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const FeatureGrid = ({ title, features }: { 
  title: string;
  features: FeatureItem[];
}) => (
  <div className="rounded-2xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/30 dark:bg-blue-900/20 p-8">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map(({ icon, text }, idx) => (
        <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800">
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">{icon}</div>
          <span className="text-gray-700 dark:text-gray-300">{text}</span>
        </div>
      ))}
    </div>
  </div>
);

const BenefitSection = () => (
  <div className="rounded-2xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/30 dark:bg-blue-900/20 p-8">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Key Benefits</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800">
        <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
          <Clock className="w-5 h-5 text-blue-600 dark:text-blue-300" />
        </div>
        <div>
          <h3 className="font-medium">70% reduction in reporting time</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Automated workflows save hundreds of hours</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800">
        <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
          <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-300" />
        </div>
        <div>
          <h3 className="font-medium">98% data accuracy</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">AI-powered validation ensures reliable metrics</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800">
        <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
          <Users className="w-5 h-5 text-blue-600 dark:text-blue-300" />
        </div>
        <div>
          <h3 className="font-medium">3x engagement</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Interactive dashboards boost stakeholder participation</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800">
        <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
          <Leaf className="w-5 h-5 text-blue-600 dark:text-blue-300" />
        </div>
        <div>
          <h3 className="font-medium">SDG Alignment</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Automatic mapping to UN Sustainable Development Goals</p>
        </div>
      </div>
    </div>
  </div>
);