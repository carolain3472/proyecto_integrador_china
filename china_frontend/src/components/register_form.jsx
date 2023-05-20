import {useForm} from 'react-hook-form'
import {createuser} from '../api/register_api'
import { useNavigate } from 'react-router-dom'



export function Register_form() {

  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const onSubmit =handleSubmit( async data=>{

    await createuser(data)
    navigate("/inicio")
  })
  return (
    <form onSubmit={onSubmit} >
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          placeholder='Ingresa username'
         {...register("username", {required: true})}
        />
      </div>
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          placeholder='Ingresa Email'
          {...register("email", {required: true})}

        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          placeholder='Ingresa contraseña'
          {...register("password", {required: true})}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

