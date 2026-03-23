import { useState, useEffect } from 'react';

export const useScrollSpy = (
    sectionIds: string[],
    offset = 120
) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            // Find the current section
            let current = activeSection;

            for (const sectionId of sectionIds) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    // If we've scrolled past this section (with offset), it's the current one
                    if (scrollPosition >= offsetTop) {
                        current = sectionId;
                    }
                }
            }

            // Also check if we're at the very bottom of the page
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
                current = sectionIds[sectionIds.length - 1];
            }

            if (current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Run once on mount
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds, offset, activeSection]);

    return activeSection;
};
