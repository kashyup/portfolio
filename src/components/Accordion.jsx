import React, { useState } from 'react';

export const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li>
            <input type="checkbox" id={`${title}Accordion`} checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
            <label htmlFor={`${title}Accordion`}>{title}</label>
            <ul style={{ display: isOpen ? 'flex' : 'none' }}>
                {children}
            </ul>
        </li>
    );
};
