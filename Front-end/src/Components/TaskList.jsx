import { useEffect, useState } from "react";
import Task from "./Task";
import styles from "./TaskList.module.css"
import { useSelector } from "react-redux";
import { Server } from "../constants";
const TaskList=()=>{
   const [arr,setArr] =useState([]);
   const toggle=  useSelector((state)=>{
    return state.Data;
   })
   const toggle1=  useSelector((state)=>{
    return state.BackendData;
   })
   console.log("This is main data"+toggle1)
   useEffect(()=>{
    async function fetching()
    {
        const data=await fetch(`${Server}/task`);
        const realData=await data.json();
        console.log("this is Real data")
        console.log(realData);
        setArr(realData)
    }
    fetching();

   },[toggle1])
    // let arr=[1,2,3,4,5];
    return <div className={toggle===false?`${styles.container}`:`${styles.container1}`}>
       {arr.length!==0? <h1>
             Task
        </h1>:""}
    
            {arr.length!==0?
                arr.map((item,index)=>{
                    return  <Task key={index} index={index} item={item}/>
                }):<div><h1>No task Available</h1></div>
            }
        
        
            
        </div>
    
}

export default TaskList;