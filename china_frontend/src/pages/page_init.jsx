
import { Link } from "react-router-dom"

export function Page_init() {
  return (
    <div>
        <h1>Página inicial</h1>

        <Link to="/login">
        <button>Iniciar sesión</button>
        </Link>

        <Link to="/register">
        <button>Registrarse</button>
        </Link>



    </div>
    
  )
}
