export default function Status({status}){
    return(
        <h1>{status ? <span>ativo</span>: <span>inativo</span>}</h1>
    )
}