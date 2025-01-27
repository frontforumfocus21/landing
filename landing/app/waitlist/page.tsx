"use client";
import { WarpBackground } from "@/components/ui/warp-background";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { WaitlistForm } from "./form";

export default function Page() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-20" aria-label="Join Waitlist">
      {/* Background gradient from homepage */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 dark:bg-blue-500 opacity-20 blur-[100px]"></div>
      </div>

      <WarpBackground
        perspective={1000}
        beamsPerSide={4}
        className="border-none bg-transparent"
        gridColor="hsl(var(--border))"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full space-y-8 px-4"
        >
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto w-fit rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 px-4 py-1"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-blue-900 dark:text-blue-200">
                <Sparkles className="h-4 w-4" />
                <span>Early Access Program</span>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white animate-gradient-x">
              Join Our Waitlist
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Be the first to experience next-gen sustainability reporting. Get early access and exclusive benefits.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/30 dark:bg-blue-900/20 p-8 backdrop-blur-lg">
            <WaitlistForm />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-sm text-gray-500 dark:text-gray-400"
          >
            Your data is secure. We respect your privacy.
          </motion.p>
        </motion.div>
      </WarpBackground>
    </section>
  );
}
