import React from 'react';
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';
import AppContext from '../../context';



function Card({ 
    id, 
    title, 
    imageUrl, 
    price, 
    onClickFavourite, 
    onAddItem, 
    onLikeItem, 
    liked = false, 
    loading = false 
}) {


    const { isItemAdded } = React.useContext(AppContext);
    const [isLiked, setIsLiked] = React.useState(liked);


    const onHandlerPlus = () => {
        onAddItem({ id, title, imageUrl, price });
    }

    const onHandlerLike = () => {
        onLikeItem({ id, title, imageUrl, price });
        setIsLiked(!isLiked)
    }


    return (
        <div className={styles.card}>
        { 
            loading ? 
            <ContentLoader
                speed={2}
                width={160}
                height={265}
                viewBox="0 0 155 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="0" y="0" rx="5" ry="5" width="155" height="155" />
                <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
                <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
            </ContentLoader> : 
            <>
            <div className={styles.likeButton} onClick={onClickFavourite}>
                <img onClick={onHandlerLike} src={isLiked ? "/img/liked.svg" : "/img/unliked.svg"} alt="Like button" />
            </div>
            <img width="100%" height={135} src={imageUrl} alt="sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>{price}</span>
                </div>
                <img className={styles.plus}
                onClick={onHandlerPlus}
                src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Add item" />
            </div>
            </>
            }
        </div>
    );
}

export default Card;