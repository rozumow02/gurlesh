// components/SplitText.tsx
import { motion } from "framer-motion";

export function SplitText({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="flex flex-wrap text-4xl font-bold"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
