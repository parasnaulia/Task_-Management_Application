import { useEffect, useState } from "react";
import styles from "./Task.module.css"

import { useSelector } from "react-redux";
import { Server } from "../constants";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { AddBackData } from "../Store/Slices/BackendData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import styles from "./Task.module.css"
// import { Form } from "react-router-dom";
const Task = (probs) => {
    const toggle=  useSelector((state)=>{
        return state.Data;
       })
       const dispatch=useDispatch();
   const [tog,settog]= useState(false);
   const [update,setUpdate]=useState(false);
//   const [pp,setPP]= useState(false);
   const [up,setUp]=useState({
    Title:"",
    Due_Date:"",
    Discription:""
   })
   const notify = (message) => {
    toast.success(message);
  };


const DeleteIt=()=>{
    async function Del()
    {
        try
        {
            const data=await fetch(`${Server}/task/${probs.item._id}`,{
                method:"delete",
                headers:{"Content-type":"application/json"},
            
            })
            // alert("Task is Deleted");

            console.log(data);
            notify('Task Deleted successfully!');
           

            // window.location.reload();
             dispatch(AddBackData())

        }
        catch(e)
        {
            console.log("There is an Error In deleting The data"+e);

        }
        
    }
    Del();

}
   useEffect(()=>{
    setUp({
        Title:probs.item.Title,
    Due_Date:probs.item.Due_Date,
    Discription:probs.item.Discription

    })
   },[])
const updateData=(e)=>{
    e.preventDefault();
    // alert("Snknx")
    async function updateData1()
    {
        try{
            const data=   await fetch(`${Server}/task/${probs.item._id}`,{
                method:"put",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(up)
            })
            console.log("data is updated"+data)
            // console.log("data")
            // alert("Task Is Updated");
            dispatch(AddBackData());
            notify('Task Updated successfully!');
            
            // setPP(!pp);
            
            // window.location.reload()
            
        }
        catch(e)
        {
            console.log("Data Updation Error"+e);
        }
     
    }
    updateData1();
}


  return (
    <>
   
    <div  className={toggle===false?`${styles.container}`:`${styles.container}`}>
        <h3>{probs.item.Title}</h3>
        <div><button className={`${styles.btn}`}  onClick={()=>{
            settog(!tog)

        }} >{tog===true?"Hide":"View"}</button></div>
      
    </div>
   {tog===true?<div className={`${styles.dis}`}>
    <div className={`${styles.dis1}`}>
        <h2>Discription</h2>
        <p>{probs.item.Discription}</p>
    </div>
    <div>Due Date:{probs.item.Due_Date}</div>
    <div className={`${styles.btnCont}`}>
    <div><button className={`${styles.btn}`} onClick={()=>{
        setUpdate(true)
    }}>Update</button></div>
    <div><button className={`${styles.btn}`} onClick={DeleteIt}>Delete</button></div>

    </div>
 

    </div>:""}
    {/* <ToastContainer /> */}
   { update===true?<div className="Form">
    <div>
        <h1>Update Task</h1>
        <form onSubmit={updateData}>
            <div>
                <input  className={`${styles.input}`} placeholder="Title" value={up.Title}  onChange={(e)=>{
                    setUp((prev)=>{
                        return {...prev,Title:e.target.value}
                    })
                }}/>
            </div>
            <div>
                <input  className={`${styles.input}`}placeholder="Discription" value={up.Discription} onChange={(e)=>{
                    setUp((prev)=>{
                        return {...prev,Discription:e.target.value}
                    })
                }}/>
            </div>
            <div>
                <input type="date" className={`${styles.input}`} placeholder="Date" value={up.Due_Date} onChange={(e)=>{
                    setUp((prev)=>{
                        return {...prev,Due_Date:e.target.value}
                    })
                }}/>
            </div>
            <div className={`${styles.bob}`}>
                <div>
                <button type="submit" className={`${styles.btn}`} 

                >Submit</button>

                </div>
                <div>
                <button className={`${styles.btn}`} onClick={()=>{
                    setUpdate(false)
                }}>Close</button>
                </div>
                
            </div>
        </form>

    </div>
   </div>:""}
   
    </>
  )
}

export default Task
