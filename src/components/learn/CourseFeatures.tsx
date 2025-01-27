"use client";

import { Card } from "@/components/ui/card";
import { courseFeatures } from "@/config/course-features";
import { motion } from "framer-motion";

export function CourseFeatures() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courseFeatures.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          viewport={{ once: true }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <feature.icon className="h-6 w-6 text-primary" />
              <h3 className="font-semibold">{feature.title}</h3>
            </div>
            <p className="mt-4 text-muted-foreground">{feature.description}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
