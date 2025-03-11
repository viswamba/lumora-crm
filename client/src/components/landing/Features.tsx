import { motion } from "framer-motion";
import { MessageSquare, Share2, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Natural Language Queries",
    description:
      "Ask questions about your customers in plain English and get instant insights.",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Social Integration",
    description:
      "Connect and manage all your social media interactions in one place.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multi-channel Support",
    description:
      "Seamlessly manage customer conversations across email, chat, and social.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Powerful Features</h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to manage customer relationships effectively
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
