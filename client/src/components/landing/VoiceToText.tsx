import { motion } from "framer-motion";
import { Mic, Waves } from "lucide-react";
import { Card } from "@/components/ui/card";

const understandingExamples = [
  "Schedule a follow-up meeting with John from Acme Corp next Tuesday at 2 PM and update his contact preferences to email only.",
  "After the call with Sarah from TechStart, she's interested in the enterprise plan. Set a reminder to send the proposal by Friday.",
  "During lunch with Michael, he mentioned expanding to Asia. Tag him as potential expansion opportunity and schedule quarterly check-ins."
];

export function VoiceToText() {
  return (
    <section id="voice" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">Voice-to-Text Magic</h2>
            <p className="mt-4 text-muted-foreground">
              Update customer records naturally with voice commands
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-primary/20 rounded-full">
                    <motion.div
                      className="h-full w-0 bg-primary rounded-full"
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {understandingExamples.map((example, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <Waves className="w-4 h-4 text-primary" />
                    <p className="text-sm text-muted-foreground flex-1">{example}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}