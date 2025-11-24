import { useEffect, useState } from "react";

export function useSticky(offset: number = 50) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > offset);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    return isSticky;
}