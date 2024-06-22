import styles from "./Form.module.css"
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Server } from "../constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddBackData } from "../Store/Slices/BackendData";
const Form=(probs)=>{
    const notify = (message) => {
        toast.success(message);
      };
   const dispatch=useDispatch();
    const [data,setData]=useState({
        Title:"",
        Discription:"",
        Due_Date:""
    });
    const toggle=  useSelector((state)=>{
        return state.Data;
       })
    const [error1,setError]=useState(false);


    const sumbitData=(e)=>{
        e.preventDefault()
        // alert("sahi h")
        async function Submit()
        {
            try{
                const data1=await fetch(`${Server}/task`,
                    { method:"POST",
                     headers:{"Content-type": "application/json"},
                     body: JSON.stringify(data),
     
                    },
     
                 );
                 console.log("sucessfully hits api")
                 console.log(data1);
                 setData({ Title:"",
                    Discription:"",
                    Due_Date:""});
                    // alert("Task is Added");
                   
                    // window.location.reload();
                    dispatch(AddBackData());
                    notify('Task Added successfully!');
                    
                 

            }
            catch(e)
            {
                console.log("There is an Error in Updation"+e);
            }
          

        }
        
        if(data.Title===""||data.Discription===""||data.Due_Date==="")
            {
                setError(true);
            }
            else
            {
                Submit();

            }
         
    }
    console.log(data)

    return <div className={toggle===false?`${styles.container}`:`${styles.container1}`}>
   
        <form className={toggle===false?`${styles.inner}`:`${styles.inner1}`} onSubmit={sumbitData}>
            <h1> Task</h1>
            <div><FaPencilAlt /> <input className={styles.input} placeholder="Task Title" value={data.Title} onChange={(e)=>{
                setData((prev)=>{
                   return  {...prev,Title:e.target.value}
                })
            }} /> </div>
            <div><FaPencilAlt /> <input className={styles.input} placeholder="Discription" value={data.Discription} onChange={(e)=>{
                setData((prev)=>{
                   return {...prev,Discription:e.target.value}
                })
            }} /> </div>
            <div><FaPencilAlt /> <input className={styles.input} placeholder="Due Date" value={data.Due_Date} type="date" onChange={(e)=>{
                setData((prev)=>{
                    return {...prev,Due_Date:e.target.value}
                })
            }}/> </div>
            <div>
                <button className={styles.btn} type="submit"   >Submit</button>
                <button onClick={probs.close} className={styles.btn}>Close </button>
            </div>
            {error1===true?<div>You Cant Leave Fields Empty </div>:""}

            
        </form>
        <ToastContainer />
        
        
    </div>
}
export default Form;