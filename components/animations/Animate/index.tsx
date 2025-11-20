import { motion } from "motion/react";
import { type JSX } from "react";

interface Props {
    children: JSX.Element;
    direction?: string;
}

const Animate = ({ children, direction = "left" }: Props) => {
    if (direction == "left")
        return (
            <motion.div
                layout
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                // transition={{ duration: 0.6 }}
                // transition={{ type: "spring", stiffness: 100, damping: 20 }}
                transition={{
                    duration: 1,
                    type: "spring",
                    bounce: 0,
                }}
            >
                {children}
            </motion.div>
        );
    else if (direction == "right") {
        return (
            <motion.div
                layout
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                // transition={{ duration: 0.6 }}
                // transition={{ type: "spring", stiffness: 100, damping: 20 }}
                transition={{
                    duration: 1,
                    type: "spring",
                    bounce: 0,
                }}
            >
                {children}
            </motion.div>
        );
    }
};

export default Animate;
