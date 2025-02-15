import forum from '/forum.svg'
import ff from '/img_28.png'
function Forum() {
    return (
        <div>
            <img style={{width: "143px", margin: "0 auto"}} src={forum} alt=""/>
            <h4 style={{width: "195px", margin: "0 auto", fontSize: "48px", padding: "30px", fontWeight: "bold"}}>Форум</h4>
            <img style={{width: "1418px", margin: "40px auto"}} src={ff} alt=""/>
        </div>
    );
}

export default Forum;