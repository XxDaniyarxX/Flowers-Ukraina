import './Footer.scss'
import roza from '/img_14.png'
import oplata from '/img_15.png'
import flow3 from '/img_18.png'
import { useState } from 'react'
import flow4 from '/img_19.png'
import SkeletMap from '../Skeletons/SkeletMap'
export default function Footer() {

    const [isLoaded, setIsLoaded] = useState(false);

    const handleIframeLoad = () => {
        setIsLoaded(true);
    };

    return (
        <>
            <div style={{width: "1420px", margin: "80px auto"}}>
                {!isLoaded && <SkeletMap />}
                <iframe
                    style={{width: "1420px", height: "650px", display: isLoaded ? 'block' : 'none', margin: "0 auto"}}
                    src="https://maps.google.com/maps?width=500&amp;height=650&amp;hl=en&amp;q=Bishkek+(Bishkek)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    onLoad={handleIframeLoad}
                >
                </iframe>
            </div>




            <div style={{width: '1920px', height: '348px', backgroundColor: '#333333', margin: '120px auto'}}>
                <img width={212} style={{position: "absolute", marginTop: "-240px"}} src={flow3} alt=""/>
                <img width={212} style={{position: "absolute", marginTop: "-290px", marginLeft: "1710px"}} src={flow4}
                     alt=""/>
                <div style={{width: "1423px", height: "320px", margin: "0px auto", padding: "10px 0px"}}>
                    <div style={{display: "flex", margin: "30px 0px"}}>
                        <img width={169} src={roza} alt=""/>
                        <div style={{width: '225px', height: '164px', marginLeft: '186px'}}>
                            <h4 style={{fontWeight: 'bold', color: "white"}}>ИНФОРМАЦИЯ</h4>
                            <div style={{width: "219px", height: "108px", marginTop: "30px"}}>
                                <p style={{fontWeight: "300", color: "white", paddingBottom: "11px"}}> О НАС</p>

                                <p style={{fontWeight: "300", color: "white", paddingBottom: "11px"}}>ДОСТАВКА И
                                    ОПЛАТА </p>

                                <p style={{fontWeight: "300", color: "white"}}> ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
                            </div>
                        </div>

                        <div style={{width: '208px', height: '164px', marginLeft: '90px'}}>
                            <h4 style={{fontWeight: 'bold', color: "white"}}>СЛУЖБА ПОДДЕРЖКИ</h4>
                            <div style={{width: "219px", height: "128px", marginTop: "30px"}}>
                                <p style={{fontWeight: "300", color: "white", paddingBottom: "11px"}}> КАРТА САЙТА</p>

                                <p style={{fontWeight: "300", color: "white", paddingBottom: "11px"}}>ВОЗЫРАТ
                                    ТОВАРА </p>

                                <p style={{fontWeight: "300", color: "white", paddingBottom: "11px"}}>СВЯЗАТЬСЯ С
                                    НАМИ</p>
                                <p style={{fontWeight: "300", color: "white"}}>ДЛЯ СООТРУДНИЧЕСТВА</p>
                            </div>
                        </div>

                        <div style={{width: '176px', height: '164px', marginLeft: '90px'}}>
                            <h4 style={{fontWeight: 'bold', color: "white"}}>ЛИЧНЫЙ КАБИНЕТ</h4>
                            <div style={{width: "219px", height: "128px", marginTop: "30px"}}>
                                <p style={{fontWeight: "300", color: "white", paddingBottom: "11px"}}>ЛИЧНЫЙ КАБИНЕТ</p>

                                <p style={{fontWeight: "300", color: "white", paddingBottom: "11px"}}>ИСТОРИЯ
                                    ЗАКАЗА </p>

                                <p style={{fontWeight: "300", color: "white", paddingBottom: "11px"}}>ЗАКЛАДКИ</p>
                                <p style={{fontWeight: "300", color: "white"}}>СПИСОК НОВОСТЕЙ</p>
                            </div>
                        </div>

                        <div style={{width: '225px', height: '164px', marginLeft: '90px'}}>
                            <h4 style={{fontWeight: 'bold', color: "white"}}>ДОПОЛНИТЕЛЬНО</h4>
                            <div style={{width: "219px", height: "128px", marginTop: "30px"}}>
                                <p style={{fontWeight: "300", color: "white", paddingBottom: "11px"}}>ПОДАРОЧНЫЕ </p>
                                <p style={{fontWeight: "300", color: "white", paddingBottom: "11px"}}>СЕРТИФИКАТЫ </p>
                                <p style={{fontWeight: "300", color: "white", paddingBottom: "11px"}}>АКЦИИ</p>
                                <p style={{fontWeight: "300", color: "white"}}>ЦВЕТЫ И ОФИС </p>
                            </div>
                        </div>

                    </div>
                    <div style={{width: '1416px', backgroundColor: '#956D84', height: '1px'}}>
                    </div>
                    <div style={{width: '1420px', display: 'flex', paddingTop: "30px"}}>
                        <div><h4 style={{color: "white", fontSize: "13px"}}>Copyright © 2021. Все права защищены</h4></div>
                        <div><img style={{width: "650px", marginLeft: "475px"}} width={650} height={35} src={oplata}alt=""/></div>
                    </div>
                </div>
            </div>
        </>
    );
}

