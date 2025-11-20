import { motion } from "motion/react";
import { type JSX } from "react";

interface Props {
    children: JSX.Element;
}

const AnimateFromTop = ({ children }: Props) => {
    return (
        <motion.div
            layout
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
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
};

export default AnimateFromTop;
