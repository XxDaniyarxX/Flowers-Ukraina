import gg from '/img_20.png'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchFlowers} from "../Redux/FlowersApi/FlowersSlice.js";
import '../components/Home/styles/News.scss'
import list_1 from "/img_11.png";
function News() {
    const dispatch = useDispatch();
    const flowers = useSelector((state) => state.flowers.data);

    useEffect(() => {
        dispatch(fetchFlowers());
    }, [dispatch]);
    return (
        <div className='News' style={{width: ""}}>
            <img style={{margin: "0 auto" ,width: "156px"}} width={156} src={gg} alt=""/>
            <h4 style={{width: '100px', margin: "50px auto", fontSize: "48px", fontWeight: "bold"}}>Новости</h4>
            <div className="forum-items">
                {flowers.slice(24, 27).map((item) => (
                    <div className="forum-item" key={item.id}>
                        <img src={item.imageUrl} alt=""/>
                        <div className="forum-description">
                            <h4>Какие цветы под запретом: что нельзя дарить</h4>
                            <p>
                                Осведомленности в сфере новых трендов цветочного дизайна и знакомства с
                                работами...
                            </p>
                            <h3>Читать далее...</h3>
                        </div>
                    </div>
                ))} {flowers.slice(24, 27).map((item) => (
                <div className="forum-item" key={item.id}>
                    <img src={item.imageUrl} alt=""/>
                    <div className="forum-description">
                        <h4>Какие цветы под запретом: что нельзя дарить</h4>
                        <p>
                            Осведомленности в сфере новых трендов цветочного дизайна и знакомства с
                            работами...
                        </p>
                        <h3>Читать далее...</h3>
                    </div>
                </div>
            ))} {flowers.slice(24, 27).map((item) => (
                <div className="forum-item" key={item.id}>
                    <img src={item.imageUrl} alt=""/>
                    <div className="forum-description">
                        <h4>Какие цветы под запретом: что нельзя дарить</h4>
                        <p>
                            Осведомленности в сфере новых трендов цветочного дизайна и знакомства с
                            работами...
                        </p>
                        <h3>Читать далее...</h3>
                    </div>
                </div>
            ))}
                <button className="order-button">
                    Еще 16 новостей
                    <img className="button-icon" src={list_1} alt=""/>
                </button>
            </div>

        </div>
    );
}

export default News;