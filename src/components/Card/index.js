import React from 'react';
import styles from './Card.module.scss';


function Card({ id, title, imageUrl, price, onClickFavourite, onAddItem, onLikeItem, likedItem = false }) {
    const [isAdded, setIsAdded] = React.useState(true);
    const [isLiked, setIsLiked] = React.useState(likedItem);


    const onHandlerPlus = () => {
        onAddItem({ title, imageUrl, price });
        setIsAdded(!isAdded)
    }

    const onHandlerLike = () => {
        onLikeItem({ id, title, imageUrl, price });
        setIsLiked(!isLiked)
    }

    return (
        <div className={styles.card}>
            <div className={styles.likeButton} onClick={onClickFavourite}>
                <img onClick={onHandlerLike} src={isLiked ? "/img/liked.svg" : "/img/unliked.svg"} alt="Like button" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>{price}</span>
                </div>
                <img className={styles.plus}
                onClick={onHandlerPlus}
                src={isAdded ? "/img/btn-plus.svg" : "/img/btn-checked.svg"} alt="add item" />
            </div>
        </div>
    );
}

export default Card;