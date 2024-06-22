import { useState } from "react";
import styles from "./Body.module.css";
import { FaPlusCircle } from "react-icons/fa";
import Form from "./Form";
import TaskList from "./TaskList";
import { useSelector } from "react-redux";
const Body=()=>{
   const [tog,setTog]= useState(false);
 const toggle=  useSelector((state)=>{
    return state.Data;
   })
   console.log("This is Toggle")
   console.log(toggle)
   const close=()=>{
    setTog(false);
   }
    return<> <div className={toggle===false?`${styles.container}`:`${styles.container1}`}>
        <div className={styles.innerContainer}>
            <div onClick={()=>{
                setTog(!tog);
            }} className={styles.btn}><FaPlusCircle/> Create Task</div>

        </div>
        {tog===true?<Form  close={close}/>:""}
    </div>
    <div className={toggle===false?`${styles.Task}`:`${styles.Task1}`}>
        <TaskList/>
    
    </div>
    </>
}
export default Body;