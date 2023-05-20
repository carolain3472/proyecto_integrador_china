import {useForm} from 'react-hook-form'
import {createuser} from '../api/register_api'

export function Register_form() {

  const {register, handleSubmit} = useForm()
  const onSubmit =handleSubmit( async data=>{
    const res= await createuser(data)
    console.log(res)
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

