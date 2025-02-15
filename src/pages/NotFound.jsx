import Notfounf from '/Notfound.png'
import {Link} from "react-router-dom";

function NotFound(props) {
    return (
        <div style={{width: '1046px', margin: '0 auto'}}>
            <Link to='/' style={{textDecoration: 'none'}}>
                <img src={Notfounf} alt=""/>
            </Link>
        </div>
    );
}

export default NotFound;