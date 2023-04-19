import React from "react";
import './Card.css'
import {Link} from "react-router-dom";

function Card({
                  title, linkTo
              }) {
    return (
        <div>
            <div className="card-container text">
                <div className="card-title">
                    <a className="noSelectCard" href={linkTo}>
                        {title}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
