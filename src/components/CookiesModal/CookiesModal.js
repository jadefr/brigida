import React, { useState, useEffect } from 'react';
import './CookiesModal.css';
import { FaCookieBite, FaTimes, FaShieldAlt } from 'react-icons/fa';

function CookiesModal() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookiesConsent = localStorage.getItem('cookiesConsent');
        if (!cookiesConsent) {
            // Show modal after a short delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookiesConsent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookiesConsent', 'declined');
        setIsVisible(false);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookies-modal-overlay">
            <div className="cookies-modal">
                <div className="cookies-modal-header">
                    <div className="cookies-modal-title">
                        <FaCookieBite className="cookies-icon" />
                        <span>Política de Cookies</span>
                    </div>
                    <button 
                        className="cookies-modal-close" 
                        onClick={handleClose}
                        aria-label="Fechar modal"
                    >
                        <FaTimes />
                    </button>
                </div>
                
                <div className="cookies-modal-content">
                    <div className="cookies-info">
                        <FaShieldAlt className="shield-icon" />
                        <p>
                            Este site utiliza cookies para melhorar sua experiência de navegação. 
                            Os cookies nos ajudam a fornecer funcionalidades personalizadas e a 
                            analisar o tráfego do site.
                        </p>
                        <p>
                            Ao continuar navegando, você concorda com o uso de cookies. 
                            Você pode alterar suas preferências a qualquer momento.
                        </p>
                    </div>
                    
                    <div className="cookies-modal-actions">
                        <button 
                            className="cookies-btn cookies-btn-decline" 
                            onClick={handleDecline}
                        >
                            Recusar
                        </button>
                        <button 
                            className="cookies-btn cookies-btn-accept" 
                            onClick={handleAccept}
                        >
                            Aceitar Todos
                        </button>
                    </div>
                    
                    <div className="cookies-modal-footer">
                        <a href="/cookies-policy" className="cookies-policy-link">
                            Saiba mais sobre nossa política de cookies
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CookiesModal;
