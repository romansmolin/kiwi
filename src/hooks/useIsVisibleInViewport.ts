import { useState, useEffect, useRef } from 'react';

const useIsVisibleInViewport = (ref: React.RefObject<HTMLElement>, partiallyVisible = false): boolean => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(partiallyVisible ? entry.isIntersecting : entry.intersectionRatio > 0);
            },
            {
                threshold: partiallyVisible ? [0, 0.1] : [1] // Adjust threshold as needed
            }
        );

        observer.observe(ref.current);

        return () => {
            // @ts-ignore
            observer.unobserve(ref.current);
        };
    }, [ref, partiallyVisible]);

    return isVisible;
};

export default useIsVisibleInViewport;
