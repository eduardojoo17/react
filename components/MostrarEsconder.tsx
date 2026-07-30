"use client"

import { useState } from "react";

export default function MostrarEsconder(){

    const[n,setN] = useState<boolean>(false)
    return(
        <div className="flex flex-col border bg-amber-100 gap-3">
          <button className="border" onClick={()=>setN(!n)}>mostrar texto</button>   
            {n && <p className="bg-blue-500 border">Typescript </p>}
        </div>
       
    );
}
