import { motion } from "motion/react";
import { type JSX } from "react";

interface Props {
    children: JSX.Element;
}

const AnimateZoom = ({ children }: Props) => {
    return (
        <motion.div
            whileHover={{
                scale: 0.95,
            }}
            whileTap={{ scale: 1 }}
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

export default AnimateZoom;
