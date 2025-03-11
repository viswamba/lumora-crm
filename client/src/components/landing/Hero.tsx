import { motion } from "framer-motion";
import { Command } from "lucide-react";
import { Card } from "@/components/ui/card";

const aiQueries = [
  "Who is most affected by the new tax announced yesterday on Stock purchases?",
  "I'm traveling to San Diego - who can I meet for coffee that might convert to a paying customer?",
  "List all enterprise clients who haven't upgraded to our latest security package"
];

export function Hero() {
  return (
    <section className="min-h-[85vh] pt-16 pb-4 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
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
            className="mt-8"
          >
            <Card className="p-4 bg-background/50 backdrop-blur-sm border-2 border-muted">
              {aiQueries.map((query, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.2 }}
                  className="flex items-center gap-2 p-2 bg-muted rounded-md mb-2 last:mb-0"
                >
                  <Command className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground text-left">
                    {query}
                  </span>
                </motion.div>
              ))}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}