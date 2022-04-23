import React from "react";
import styles from "./Card.module.scss";

const Card: React.FC = () => {
    return (
        <div className={styles.card}>
        <div className={styles.cardImage}>
            <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="Card Image"
            />
        </div>
        <div className={styles.cardContent}>
            <p className="title is-4">Card Title</p>
            <p className="subtitle is-6">Card Subtitle</p>
        </div>
        </div>
    );
    }

    export default Card;