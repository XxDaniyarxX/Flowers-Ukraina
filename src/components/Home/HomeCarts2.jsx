import list_1 from '/img_11.png';
import "./styles/HomeCarts2.scss";
function HomeCarts2({ flower }) {
   
    return (
        <div className="home-carts2">
            <div className="card">
                <div className="image-container">
                    <img className="discount" width={56} src={flower.discount_19} alt=""/>
                    <img className="main-image" width={260} src={flower.imageUrl} alt=""/>
                    <img className="thumbnail" width={56} src={flower.thumbnail} alt=""/>
                </div>
                <nav className='nav'>
                    <img className="rating" width={74} src={flower.star} alt=""/>
                    <div className="info">
                        <h4 className="title">{flower.title}</h4>
                        <div className="prices">
                            <h4 className="old-price">2800 грн</h4>
                            <h4 className="new-price">2280 грн</h4>
                        </div>
                    </div>
                </nav>
                <button className="order-button">Заказать
                    <img className="button-icon" width={88} src={list_1} alt=""/>
                </button>
                <h4 className="quick-order">Быстрый заказ</h4>
            </div>
        </div>
    );
}

export default HomeCarts2;