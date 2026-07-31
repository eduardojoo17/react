"use client"
import { useState } from "react";

export default function TrocarCor(){
    const [c,setC] = useState<string>("#FF0000")
     return(
        <div className="border gap-3 p-2">
        <div className="border m-2 p-6 w-6" style={{backgroundColor: c}}></div>
        <button className="border m-2" onClick={()=> setC("#000000") }>Preto</button>
        <button className="border m-2" onClick={()=> setC("#FF0000")}>Voltar</button>
        </div>
     );
}