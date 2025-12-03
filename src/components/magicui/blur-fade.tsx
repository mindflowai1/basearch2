"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, type Variant } from "framer-motion";

interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
    variant?: {
        hidden: Variant;
        visible: Variant;
    };
    duration?: number;
    delay?: number;
    offset?: number;
    direction?: "up" | "down" | "left" | "right";
    inView?: boolean;
    inViewMargin?: string;
    blur?: string;
}

export function BlurFade({
    children,
    className,
    variant,
    duration = 0.4,
    delay = 0,
    offset = 6,
    direction = "down",
    inView = false,
    inViewMargin = "-50px",
    blur = "6px",
}: BlurFadeProps) {
    const ref = useRef(null);
    const inViewResult = useInView(ref, { once: true, margin: inViewMargin as any });
    const controls = useAnimation();
    const shouldAnimate = inView ? inViewResult : true;

    useEffect(() => {
        if (shouldAnimate) {
            controls.start("visible");
        }
    }, [shouldAnimate, controls]);

    const directionOffset = {
        up: { y: offset },
        down: { y: -offset },
        left: { x: offset },
        right: { x: -offset },
    };

    const defaultVariants = {
        hidden: {
            ...directionOffset[direction],
            opacity: 0,
            filter: `blur(${blur})`,
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            filter: `blur(0px)`,
        },
    };

    const combinedVariants = variant || defaultVariants;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={combinedVariants}
            transition={{
                delay: 0.04 + delay,
                duration,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
