"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='fixed bottom-4 right-4'>
            {isVisible && (
                <button 
                    onClick={scrollToTop} 
                    style={{
                        background: 'linear-gradient(135deg, rgba(30, 58, 138, 1), rgba(0, 123, 255, 1))', // Subtle gradient
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '60px', // Size for visibility
                        height: '60px', // Size for visibility
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px', // Icon size
                        cursor: 'pointer',
                        position: 'relative',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' // Subtle shadow
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)'; // Enhanced shadow on hover
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'; // Scale back on mouse leave
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'; // Reset shadow
                    }}
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    )
}

export default ScrollToTop