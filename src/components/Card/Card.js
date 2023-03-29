import React from "react";
import './Card.css'
import {Link} from "react-router-dom";

function Card({
                  title,
              }) {
    return (
        <div>
            <div className="card-container text">
                <div className="card-title">
                    <a href='/'>
                        {title}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
