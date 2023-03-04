import React from "react";
import './Card.css'

function Card(    {
        title,
        text
    }) {
    return (
        <div>
            <div className="card-container text">
                <div className="card-title">Card Title</div>
                <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto
                    culpa cum cumque delectus dolor enim, eos esse eum excepturi facilis magnam obcaecati, officia omnis
                    quam quibusdam rem tempora vitae!
                </div>
            </div>
        </div>
    );
}

export default Card;
