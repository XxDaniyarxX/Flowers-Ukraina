import rviews from '/img_26.png'
import reviews from '/img_27.png'
import {Link} from "react-router-dom";
function Reviews() {
    return (
        <div>
            <Link to={'/'} color={'gray'}> <img style={{width: "150px", margin: "0 auto"}} src={rviews} alt=""/></Link>
            <h4 style={{width: "177px", margin: "50px auto", fontSize: "48px", fontWeight: "bold"}}> Отзывы</h4>
            <img style={{width: "1416px", margin: "40px auto", height: '767px'}} src={reviews} alt=""/>
        </div>
    );
}

export default Reviews;