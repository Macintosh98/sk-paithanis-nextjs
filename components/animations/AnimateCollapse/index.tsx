import { AnimatePresence, motion } from "motion/react";
import { type JSX } from "react";

interface Props {
    isOpen: boolean;
    children: JSX.Element;
}

const AnimateCollapse = ({ isOpen, children }: Props) => {
    return (
        <AnimatePresence initial={true}>
            {isOpen && (
                <motion.section
                    key="content"
                    initial={{
                        opacity: 0,
                        height: 0,
                    }}
                    animate={{
                        opacity: 1,
                        height: "auto",
                    }}
                    exit={{
                        opacity: 0,
                        height: 0,
                    }}
                    // transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        bounce: 0,
                    }}
                >
                    <motion.div
                        variants={{
                            collapsed: {
                                scale: 0.5,
                            },
                            open: {
                                scale: 1,
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
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default AnimateCollapse;
