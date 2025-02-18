import list_1 from '/img_11.png';
import './styles/HomeCart.scss';
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { toggleHeart } from '../../Redux/HeartSlice/HeartSlice';
import heartpurple from '/heartpurple.svg';

function HomeCarts({ flower }) {
    const dispatch = useDispatch();
    const { hearts } = useSelector((state) => state.heart);
    const isHeartActive = hearts[flower.id] || false;

   
    const handleFavoriteClick = (event) => {
        event.preventDefault();
        event.stopPropagation(); 
        dispatch(toggleHeart(flower.id));
    };
    

    return (
        <div className="home-cart">
            <div className="cart-container">
                <div className="image-section">
                    <img className="discount" src={flower.discount_19} alt="" />

                  
                    <div
                        className="heart-container"
                        onClick={(event) => {
                            event.stopPropagation(); // Остановить всплытие
                            handleFavoriteClick(event);
                        }}
                    >
                        {isHeartActive ? (
                            <img src={heartpurple} alt="Heart" className="heart-icon" />
                        ) : (
                            <AiOutlineHeart size={40} color='#956D84' />
                        )}
                    </div>



                    <img className="main-image" src={flower.imageUrl} alt="" />
                    <img className="thumbnail" src={flower.thumbnail} alt="" />
                </div>

                <img className="star" src={flower.star} alt="" />
                <div className="details">
                    <h4 className="title">{flower.title}</h4>
                    <div className="price">
                        <h4 className="old-price">2800 грн</h4>
                        <h4 className="new-price">2280 грн</h4>
                    </div>
                </div>
                <button className="order-button">
                    Заказать
                    <img className="button-icon" src={list_1} alt="" />
                </button>
                <h4 className="quick-order">Быстрый заказ</h4>
            </div>
        </div>
    );
}

export default HomeCarts;
