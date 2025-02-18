import styles from './styles/HomeBannerImg.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlowers } from '../../Redux/FlowersApi/FlowersSlice';
import { useEffect, useState } from 'react';
import Skelet1Img from '../Skeletons/Skelet1Img';
import SkeletImages4 from '../Skeletons/SkeletImages4';
import SkeletBanners3 from '../Skeletons/SkeletBanners3';
import { Link } from 'react-router-dom';

function HomeBannerImg() {
    const dispatch = useDispatch();
    const { loading, data } = useSelector((state) => state.flowers);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState([false, false, false, false]);

    useEffect(() => {
        dispatch(fetchFlowers());
    }, [dispatch]);

    const handleImageLoad = (index) => {
        setImagesLoaded((prev) => {
            const newImagesLoaded = [...prev];
            newImagesLoaded[index] = true;
            return newImagesLoaded;
        });
    };

    const item1 = data[32];
    const item2 = data[33];
    const item3 = data[34];

    const allImagesLoaded = imagesLoaded.every((loaded) => loaded);

    const item = data[27];

    return (
        <div>
            <div className={styles['home-banner']}>
                <div className={styles['home-banner__top']}>
                    <div className={styles['home-banner__left']}>
                        {!isImageLoaded && <Skelet1Img />}
                        {item && (
                            <div style={{ display: isImageLoaded ? 'block' : 'none' }}>
                                <img src={item.imageUrl} alt="" onLoad={() => setIsImageLoaded(true)} />
                            </div>
                        )}
                    </div>
                    <div className={styles['home-banner__right']}>
                        {loading === 'true' || !data.length ? (
                            [...Array(4)].map((_, index) => <SkeletImages4 key={index} />)
                        ) : (
                            data.slice(28, 32).map((item, index) => (
                                <div key={index} style={{ display: imagesLoaded[index] ? 'block' : 'none' }}>
                                    <img src={item.imageUrl} alt="" onLoad={() => handleImageLoad(index)} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className={styles['home-banner__bottom']}>
                    {loading === 'true' || !data.length ? (
                        [...Array(3)].map((_, index) => <SkeletBanners3 key={index} />)
                    ) : (
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {item1 && (
                                <div>
                                    <Link to={`/fotodostavki`}>
                                        <img width={460} src={item1.imageUrl} alt="" />
                                    </Link>
                                </div>
                            )}
                            {item2 && (
                                <div>
                                    <Link to={`/videootchet`}>
                                        <img width={460} src={item2.imageUrl} alt="" />
                                    </Link>
                                </div>
                            )}
                            {item3 && (
                                <div>
                                    <Link to={`/giftclients`}>
                                        <img width={460} src={item3.imageUrl} alt="" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomeBannerImg;