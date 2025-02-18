import { Link } from "react-router-dom"
import { fetchFlowers } from "../Redux/FlowersApi/FlowersSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import SkeletGiftClient from '../components/Skeletons/SkeletGiftClient'
export default function GiftClient() {
    const dispath = useDispatch();
    const {loading, data} = useSelector((state) => state.flowers)

    useEffect(() => {
        dispath(fetchFlowers())
    }, [dispath])
    console.log(data);
    
    return (
        <div style={{ width: "1420px", margin: "0 auto" }}>

            <div style={{ display: "flex", width: "250px", gap: "20px" }}>
                <h4 style={{ textDecoration: "underline", color: "gray" }}><Link to='/'>Главная</Link></h4>
                <h4 style={{ color: "gray" }}>Фото доставок</h4>
            </div>

            <h4 style={{ width: "700px", fontSize: "48px", fontWeight: "bold", margin: "50px auto" }}>
                Подарок каждому клиенту
            </h4>


            <nav style={{ width: "1480px", gap: "20px", flexWrap: "wrap", display: "flex", marginTop: "50px" }}>
               {
                loading === 'true' || !data.length  ? (
                 [...Array(4)].map((_, index) => <SkeletGiftClient key={index}/>)  
                ) :  
                (data.slice(43,47).map((item) => (
                    <div key={item.id}>
                        <img 
                        width={item.id === '45' ? 713 : 692} 
                        height={396} src={item.imageUrl} alt="" /> 
                    </div>
                )))
               }
            </nav>

        </div>
    )
}