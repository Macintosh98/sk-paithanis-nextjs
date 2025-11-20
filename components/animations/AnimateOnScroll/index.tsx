import { motion } from "motion/react";
import { type JSX } from "react";

interface Props {
  children: JSX.Element;
}

const AnimateOnScroll = ({ children }: Props) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <motion.div
        variants={{
          offscreen: {
            y: 100,
          },
          onscreen: {
            y: 0,
            // transition: {
            //         type: "spring",
            //         stiffness: 100,
            //         damping: 20,
            // },
          },
        }}
        transition={{
          duration: 1,
          type: "spring",
          bounce: 0,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AnimateOnScroll;
