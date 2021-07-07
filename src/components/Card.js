import React from "react";

function Card() {
    return (
        <div className="card">
            <div className="like-button">
                <img src="/img/liked.svg" alt="Like button" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers" />
            <h5>Nike SB Zoom Blazer Mid - Photon Dust</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>$65</span>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/add.svg" alt="add item" />
                </button>
            </div>
        </div>
    );
}

export default Card;