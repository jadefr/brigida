import React from 'react';
import './TestemunhoIndividual.css';
import { testimonialData } from '../TestemunhoGroup/TestemunhoGroupData';
import useSEO from '../../hooks/useSEO';

function TestemunhoIndividual({ testimonialId }) {
    // Find the testimonial by ID
    console.log('Looking for testimonial with ID:', testimonialId);
    console.log('Available testimonials:', testimonialData.map(t => ({ id: t.id, title: t.title })));
    
    const testimonial = testimonialData.find(t => t.id === parseInt(testimonialId));
    
    console.log('Found testimonial:', testimonial);

    const pageTitle = testimonial ? `${testimonial.title} | Testemunho | Brígida Figueira` : 'Testemunho | Brígida Figueira';
    const pageDescription = testimonial ? testimonial.text : 'Testemunho não encontrado';
    const pageImage = testimonial?.image?.src;
    const pageUrl = typeof window !== 'undefined' ? window.location.href : undefined;

    useSEO({
        title: pageTitle,
        description: pageDescription,
        url: pageUrl,
        image: pageImage
    });
    
    if (!testimonial) {
        return <div>Testemunho não encontrado</div>;
    }

    const renderContent = (item, index) => {
        switch (item.type) {
            case 'intro':
                return (
                    <div key={index} className="testemunho-individual__row testemunho-individual__text-row">
                        <p className="text">{item.content}</p>
                    </div>
                );
            case 'question':
                return (
                    <div key={index} className="testemunho-individual__row testemunho-individual__text-row">
                        <p className="testemunho-individual__title text">{item.content}</p>
                    </div>
                );
            case 'answer':
                return (
                    <div key={index} className="testemunho-individual__row testemunho-individual__text-row">
                        <p className="text">{item.content}</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="testemunho-individual__container">
            <div className="testemunho-individual__header">
                <h1 className="testemunho-individual__main-title">{testimonial.title}</h1>
            </div>
            <div className="testemunho-individual__content">
                {testimonial.fullContent && testimonial.fullContent.length > 0 ? 
                    testimonial.fullContent.map((item, index) => renderContent(item, index)) :
                    <p>Nenhum conteúdo encontrado</p>
                }
            </div>
        </div>
    );
}

export default TestemunhoIndividual;
