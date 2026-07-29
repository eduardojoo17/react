"use client"

import { useState } from "react";

export default function Contar(){
    const [n, setN]= useState<number>(0)
    return(
        <div className="flex flex-col card gap-3 p-4 rounded-lg w-fit m-2 bg-amber-500  ">
            {n}
            <button className="card border bg-blue-500 px-4 py-2 m-2" onClick={()=> setN(n + 1)}> +1 </button>
            <button className="card border bg-red-500 px-4 py-2 m-2" onClick={()=> setN(n - 1)}> -1 </button>
            <button className="card border bg-green-500 px-4 py-2 m-2" > {n % 2 === 0 ? "par": "impar"} </button>
           
         </div>
       
    );
}