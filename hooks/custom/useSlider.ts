import { projectsData } from "@/data/projectsData";
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

export const useSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const translateValue = useMemo(() => `translateX(-${activeSlide * 100}%)`, [activeSlide]);
    const startX = useRef<number | null>(null);
    const isDragging = useRef<boolean>(false);
    
    const ClickNext = useCallback(() => {
        setActiveSlide((prev) => (prev + 1) % projectsData.length);
    }, []);
    
    const ClickPrev = useCallback(() => {
        setActiveSlide((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
    }, []);
    
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging.current || startX.current === null) return;
        
        const deltaX = event.clientX - startX.current;
        if (Math.abs(deltaX) > 50) {
            deltaX > 0 ? ClickPrev() : ClickNext();
            isDragging.current = false;
        }
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        isDragging.current = true;
        startX.current = event.clientX;
    };
    
    const handleMouseUp = () => {
        isDragging.current = false;
        startX.current = null;
    };
    
    useEffect(() => {
        const timer = setInterval(ClickNext, 8000);
        return () => clearInterval(timer); // Ensure the interval is cleared correctly
    }, [ClickNext]); // Re-run the effect if ClickNext changes

    return {
        activeSlide,
        translateValue,
        ClickNext,
        ClickPrev,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
    }
}
