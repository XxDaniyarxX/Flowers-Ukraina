import { Link } from "react-router-dom"
import { fetchFlowers } from "../Redux/FlowersApi/FlowersSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import Skelet8Video from '../components/Skeletons/Skelet8Video'
export default function VideoOtchet() {
    const dispath = useDispatch();
    const { loading, data } = useSelector((state) => state.flowers)

    useEffect(() => {
        dispath(fetchFlowers())
    }, [dispath])
   return(
    <div style={{width: "1420px", margin: "0 auto"}}>
    <div style={{display: "flex", width: "250px", gap: "20px"}}>
        <h4 style={{textDecoration: "underline", color: "gray"}}><Link to='/'>Главная</Link></h4>
        <h4 style={{color: "gray"}}>Видео отчеты</h4>
    </div>

    <h4 style={{width: "410px", fontSize: "48px", fontWeight: "bold", margin: "50px auto"}}>
        Видео отчеты 
    </h4>


    <nav style={{width: "1509px",  gap: "22px", flexWrap: "wrap", display: "flex", marginTop: "50px"}}>
        {   loading === 'true' || !data.length ? (
           [...Array(8)].map((_, index) => <Skelet8Video key={index} />)
        ) : (
            data.slice(47, 55).map((item) => (
                <div key={item.id}>
                  <img width={359} height={494} src={item.imageUrl} alt="" />
                </div>
            )))
        }
    </nav>
    
</div>
   )
}