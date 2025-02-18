import { Link } from 'react-router-dom'
import { fetchFlowers } from '../Redux/FlowersApi/FlowersSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import SkeletFotoDostavki from '../components/Skeletons/SkeletFotoDostavki'
export default function FotoDostavki() {
    const {loading, data} = useSelector((state) => state.flowers)
    const  dispath = useDispatch();

    useEffect(() => {
       dispath(fetchFlowers())
    }, [dispath])
    console.log(data);
    
   return (
      <div style={{width: "1420px", margin: "0 auto"}}>
           <div style={{display: "flex", width: "250px", gap: "20px"}}>
               <h4 style={{textDecoration: "underline", color: "gray"}}><Link to='/'>Главная</Link></h4>
               <h4 style={{color: "gray"}}>Фото доставок</h4>
           </div>
           <h4 style={{width: "410px", fontSize: "48px", fontWeight: "bold", margin: "50px auto"}}>
               Фото доставок
           </h4>
           <nav style={{width: "1500px",  gap: "20px", flexWrap: "wrap", display: "flex", marginTop: "50px"}}>
                { 
                    loading === 'true' ? (
                      [...Array(8)].map((_, index) => <SkeletFotoDostavki key={index} />)        
                    ) :
                    (  data.slice(35, 43).map((item) => (
                        <div key={item.id}>
                            <img height={494} width={359} src={item.imageUrl} alt="" />
                        </div>
                    )))
                }           
           </nav>
      </div>
 
   )
}