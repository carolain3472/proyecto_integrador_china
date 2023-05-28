import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Login_template } from './pages/Login_template'
import {Next} from './pages/Next'
import {Register_template} from './pages/register_page'
import {Page_init} from './pages/page_init'
import {Logout_template} from './pages/logout_template'
import {User_profile} from './pages/user_profile'
import {Sobre_nosotros} from './pages/sobre_nosotros'
import {FYI} from './pages/fyi'
import {Contacto} from './pages/contacto'
import {Ajustes} from './pages/ajustes'
import {Historia} from './pages/historia'
import {Cultura} from './pages/cultura'
import {Contribuciones} from './pages/contribuciones'
import {Minijuegos} from './pages/minijuegos'




function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/login' element ={<Login_template/>} />
      <Route path='/logout' element ={<Logout_template/>} />
      <Route path='/next' element ={<Next/>} />
      <Route path='/register' element ={<Register_template/>} />
      <Route path='/' element ={<Page_init/>} />
      <Route path='/profile' element ={<User_profile/>} />
      <Route path='/sobre-nosotros' element ={<Sobre_nosotros/>} />
      <Route path='/fyi' element ={<FYI/>} />
      <Route path='/contacto' element ={<Contacto/>} />
      <Route path='/ajustes' element ={<Ajustes/>} />
      <Route path='/historia' element ={<Historia/>} />
      <Route path='/cultura' element ={<Cultura/>} />
      <Route path='/contribuciones' element ={<Contribuciones/>} />
      <Route path='/minijuegos' element ={<Minijuegos/>} />
    </Routes>

  </BrowserRouter>
  )
}

export default App