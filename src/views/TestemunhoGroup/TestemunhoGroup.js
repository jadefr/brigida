import './TestemunhoGroup.css';
import React, { useState } from "react";
import ImageSource from "../../components/ImageSource/ImageSource";
import { testimonialData } from "./TestemunhoGroupData";

// Helper function to truncate text to approximately 30 words
const truncateText = (text, wordLimit = 30) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
        return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
};

function TestemunhoGroup() {
    return (
        <div className="testemunho-group__container">
            {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="testemunho-group__card">
                    <a href={testimonial.linkTo} className="testemunho-group__img" aria-label={`Abrir ${testimonial.title}`}>
                        <ImageSource src={testimonial.image.src} alt={testimonial.image.alt} />
                    </a>
                    <div className="testemunho-group__text">
                        <h3 className="testemunho-group__title">
                            <a href={testimonial.linkTo}>{testimonial.title}</a>
                        </h3>
                        <p className="testemunho-group__content">
                            {truncateText(testimonial.text)}
                        </p>
                        <button 
                            className="testemunho-group__read-more"
                            onClick={() => window.location.href = testimonial.linkTo}
                        >
                            Leia mais
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TestemunhoGroup;