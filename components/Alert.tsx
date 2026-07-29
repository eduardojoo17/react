"use client"
export default function Alert(){
    return(
        <button className="bg-amber-600" onClick={()=> alert("olá turma!")}>
        Saudar
        </button>
    )
}