import { motion } from "motion/react";
import { type JSX } from "react";

interface Props {
    children: JSX.Element;
    key: string;
}

const AnimateItem = ({ children }: Props) => {
    // const isPresent = useIsPresent();
    return (
        <motion.div
            layout
            // style={{ display: isPresent ? "visible" : "none" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
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

export default AnimateItem;
