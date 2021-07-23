import Card from '../components/Card';


function Favorites({ items, addToLiked }) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Favorite items</h1>
            </div>

            <div className="d-flex flex-wrap">
                {items
                    .map((item, index) => (
                        <Card
                            key={index}
                            likedItem={true}
                            onLikeItem={addToLiked}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Favorites;