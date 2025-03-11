import { motion } from "framer-motion";
import { Command } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Hero() {
  return (
    <section className="min-h-screen pt-16 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-[#A855F7] to-[#2DD4BF] bg-clip-text text-transparent">
              AI-Powered CRM That Speaks Your Language
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Transform your customer relationships with natural language processing
              and intelligent automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <Card className="p-6 bg-background/50 backdrop-blur-sm border-2 border-muted">
              <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
                <Command className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  Show me all customers who purchased in the last 30 days
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="h-24 bg-muted rounded-lg animate-pulse"
                  />
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
