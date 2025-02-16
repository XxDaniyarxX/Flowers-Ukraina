// filepath: /src/components/Home/HomeUl.jsx
import React from 'react';
import roza from '/roza.svg';
import social from '/social.svg';
import { useState } from 'react';
import './styles/HomeUl.scss';
import heartgg from '/heartgg.svg';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHeart } from '../../Redux/HeartSlice/HeartSlice';

function HomeUl() {
    const { t } = useTranslation();
    const [activeLink, setActiveLink] = useState(null);
    const dispatch = useDispatch();
    const { heartCount, hearts } = useSelector((state) => state.heart);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleHeartClick = (id) => {
        dispatch(toggleHeart(id));
    };

    return (
        <div style={{width: "1425px", height: "140px", margin: "0 auto"}}>
            <main className="home-ul">
                <div>
                    <img src={roza} alt=""/>
                </div>
                <div className="search-container">
                    <div className="inputs">
                        <input style={{width: i18n.language === 'kg' ? '360px' : ''}} className="category-search" placeholder={t('search_by_category')} type="text"/>
                        <input className="product-search" placeholder={t('search_by_product')} type="text"/>
                    </div>
                    <div className="menu-links" style={{width: i18n.language === 'kg' ? '934px' : ''}}>
                        <Link style={{color: activeLink === 'catalog' ? '#956D84' : 'black'}} to={'/'} onClick={() => handleLinkClick('catalog')}><h4>{t('catalog')}</h4></Link>
                        <Link style={{color: activeLink === 'forum' ? '#956D84' : 'black'}} to={'/forum'} onClick={() => handleLinkClick('forum')}><h4>{t('forum')}</h4></Link>
                        <Link style={{color: activeLink === 'reviews' ? '#956D84' : 'black'}} to={'reviews'} onClick={() => handleLinkClick('reviews')}><h4>{t('reviews')}</h4></Link>
                        <Link style={{color: activeLink === 'promotions' ? '#956D84' : 'black'}} to={'/'} onClick={() => handleLinkClick('promotions')}><h4>{t('promotions')}</h4></Link>
                        <Link style={{color: activeLink === 'news' ? '#956D84' : 'black'}} to={'news'} onClick={() => handleLinkClick('news')}><h4>{t('news')}</h4></Link>
                        <Link style={{color: activeLink === 'information' ? '#956D84' : 'black'}} to={'/'} onClick={() => handleLinkClick('information')}><h4>{t('information')}</h4></Link>
                    </div>
                </div>
                <div className="contact-info">
                    <div style={{marginLeft: '15px'}}>
                        <img src={social} alt=""/>
                        <h4 style={{fontSize: "12px", fontWeight: "bold"}}>+38 (067) 829 30 30</h4>
                    </div>
                    <div className='gg'>
                        <div style={{position: "relative"}} onClick={() => handleHeartClick('global')}>
                            <img src={heartgg} alt="" style={{ cursor: 'pointer', backgroundColor: hearts['global'] ? '#956D84' : 'transparent' }} />
                            <div style={{width: "16px", height: "16px", backgroundColor: "#956D84", position: "absolute", borderRadius: "50%", marginTop: "-36px", marginLeft: "23px"}}>
                                <h4 style={{fontSize: "8px", color: "white", fontWeight: "bold", position: "absolute", marginLeft: "6px", marginTop: "-11px"}}>{heartCount}</h4>
                            </div>
                        </div>
                        <AiOutlineShoppingCart size={35} color={'#956D84'} />
                        <h4>₴ 1520</h4>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomeUl;