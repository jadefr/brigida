import './TestemunhoGroup.css';
import React from "react";

function TestemunhoGroup() {
    return (
        <div className="testemunho-group__container">
            <div className="testemunho-group__card">
                <p className="testemunho-group__text">Image</p>
                <p className="testemunho-group__text">Dona Malvina</p>
            </div>
            {/*<div className="separator">*/}
            {/*    <hr></hr>*/}
            {/*</div>*/}
            <p>Sr. Lelê</p>
            {/*<div className="separator">*/}
            {/*    <hr></hr>*/}
            {/*</div>*/}
            <p>Dona Zezé</p>
        </div>
    )
}

export default TestemunhoGroup;
