import { useEffect, useRef, useState } from "react";

function RevealOnScroll({
    children,
    className = "",
    delay = 0,
    y = 24,
    scale = 1,
    once = true,
}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    if (once) observer.unobserve(node);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.14,
                rootMargin: "0px 0px -8% 0px",
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [once]);

    return (
        <div
            ref={ref}
            className={`reveal-on-scroll ${isVisible ? "is-visible" : ""} ${className}`}
            style={{
                "--reveal-delay": `${delay}ms`,
                "--reveal-y": `${y}px`,
                "--reveal-scale": scale,
            }}
        >
            {children}
        </div>
    );
}

export default RevealOnScroll;