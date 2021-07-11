import React from 'react';
import styles from './Card.module.scss';


function Card(props) {

    const onClickButton = () => {
        alert(props.price)
    }

    return (
        <div className={styles.card}>
            <div className={styles.likeButton}>
                <img src="/img/liked.svg" alt="Like button" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>{props.price}</span>
                </div>
                <button onClick={onClickButton} className="button">
                    <img width={11} height={11} src="/img/add.svg" alt="add item" />
                </button>
            </div>
        </div>
    );
}

export default Card;