import { GiNotebook } from "react-icons/gi";
import styles from "./Navbar.module.css";
import {useDispatch,useSelector} from "react-redux"
import { Tog } from "../Store/Slices/Data";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
const Navbar=()=>{
    const dispatch=useDispatch();
 const togData=useSelector((state)=>{
        return state.Data
    });
    console.log(togData)
    
    return (<div className={togData===false?`${styles.container1}`:`${styles.container}`}>
        <div className={`${styles.inner_container}`}>
            <div><GiNotebook className={`${styles.font}`}/></div>
            <div><h2>Task Management Application</h2></div>
        </div>
        <div  className={`${styles.inner_container}`}>
              <div onClick={()=>{
            dispatch(Tog())
        }} className={togData===false?`${styles.tog}`:`${styles.tog1}`}>
                <div className={`${styles.togInner}`}></div>
                
              </div>
              <div>{togData===false?<CiLight className={`${styles.font}`} />: <CiDark className={`${styles.font}`} />}</div>
        </div>
       
        
    </div>)
}
export default Navbar;