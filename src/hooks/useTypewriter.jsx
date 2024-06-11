import { useEffect, useRef } from 'react';

export const useTypewriter = (text, speed, delay = 0) => {
    const textRef = useRef(null);

    useEffect(() => {
        const animateText = async () => {
            await new Promise(resolve => setTimeout(resolve, delay));
            let displayedText = '';
            textRef.current.innerText = displayedText;

            for (const char of text) {
                displayedText += char;
                textRef.current.innerText = displayedText;
                await new Promise(resolve => setTimeout(resolve, speed));
            }
        };

        if (textRef.current) {
            animateText();
        }
    }, [text, speed, delay]);

    return textRef;
};
