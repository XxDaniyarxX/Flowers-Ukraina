import React from 'react';
import heart from '/heart.svg';
import gruz from '/gruz.svg';
import contact from '/contact.svg';
import user from '/user.svg';
import './Header.scss';
import HomeUl from "../Home/HomeUl.jsx";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
function Header() {
    const { t, i18n } = useTranslation();
    const { heartCount } = useSelector((state) => state.heart)

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div style={{ width: "1920px", height: "250px", margin: '0 auto' }}>
            <div className="header">
                <div className="header-container" style={{gap: i18n.language === 'en' ? '8px' : '97px'}}>
                    <ul className="header-menu" style={{width: i18n.language === 'en' ? '1213px' : '1110px', gap: i18n.language === 'en' ? '76px' : '63px'}}>
                        <li className="currency">
                            <h4>{t('currency')}</h4>
                            <h4 className="highlight">
                                <select>
                                    <option value="value1">Грн</option>
                                    <option value="value2">Сом</option>
                                    <option value="value3">Рубл</option>
                                </select>
                            </h4>
                        </li>
                        <li className="language">
                            <h4>{t('language')}</h4>
                            <h4 className="highlight">
                                <select onChange={(e) => changeLanguage(e.target.value)}>
                                    <option value="en">EN</option>
                                    <option value="ru">RU</option>
                                    <option value="kg">KG</option>
                                </select>
                            </h4>
                        </li>
                        <li className="city">
                            <h4>{t('city')}</h4>
                            <h4 className="highlight">
                                Киев
                            </h4>
                        </li>
                        <li className="bookmarks" style={{width: i18n.language === 'en' ? "150px" : "115px"}}>
                            <div style={{width: "25px", height: "20px"}}>
                            <img width={21} height={18} src={heart} alt="" />
                            <div style={{width:"16px", height: "16px", backgroundColor: "white", opacity: "70%", borderRadius: "50%", position: "absolute", marginTop: "-20px", marginLeft: "13px"}}>
                                 <h4 style={{color: "black", position: "absolute", fontSize: "12px", marginLeft: '4.4px'}}>{heartCount}</h4>
                            </div>
                            </div>
                            <h4>{t('bookmarks')}</h4>
                        </li>
                        <li className="delivery">
                            <img src={gruz} alt="" />
                            <h4>{t('delivery')}</h4>
                        </li>
                        <li className="contacts">
                            <img src={contact} alt="" />
                            <h4>{t('contacts')}</h4>
                        </li>
                    </ul>

                    <ul className="header-auth" style={{ paddingLeft: i18n.language === 'kg' ? '35px' : '' , marginLeft: i18n.language === 'en' ? '20px' : ''}}>
                        <li>
                            <img src={user} alt="" />
                            <h4><Link style={{ color: "white", paddingRight: "5px" }} to='/login'>{t('login')}</Link> <span>|</span>  <Link style={{ color: "white", paddingLeft: "5px" }} to='/register'>{t('register')}</Link></h4>
                        </li>
                    </ul>

                </div>
                <HomeUl />
            </div>
        </div>
    );
}

export default Header;