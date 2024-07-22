import { useEffect, useState } from "react";
import SelectionButton from "./SelectionButton";
import { RootState } from "../App";
import { useDispatch, useSelector } from "react-redux";

export default function ListButtons(){
    //const counter=useSelector((state:RootState)=>state.counterSlice)
    //const dispatch=useDispatch()
     const [buttons,setButtons]=useState<string[]>(["button1","button2","button3","button4","button5"])
    // useEffect(()=>{
       
    // },[counter])

    return(
    <>
        {buttons.map((button)=>(
            <SelectionButton key={button} label={button}/>
        ) )}
    </>
    )
}