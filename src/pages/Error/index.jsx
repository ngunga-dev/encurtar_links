import "./error.css"

import { Link } from "react-router-dom"
export default function Error(){
    return(
        <div className="conatiner-error">
            <img src="/public/notfound.png" alt="pagina não encontrada"></img>
            <h1>Pagina não encontrada!</h1>
            <Link to="/">
            Voltar para home
            </Link>
        </div>
    )
}