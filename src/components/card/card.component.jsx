import React from "react";
import './card.style.css';

export const Card = (props) => {
    return (
        <div className = "card-container">
            <figure>
                <img alt = "hero" src = {`https://api.opendota.com${props.hero.img}`} />
            </figure>
            <h1>{props.hero.localized_name}</h1>
            <h2><strong>{props.hero.roles[0]}</strong></h2>
        </div>)
}