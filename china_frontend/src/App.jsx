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

import {Historia} from './pages/Historia/historia'
  import {Dinastias} from './pages/Historia/dinastias'
    import { Din_Xia } from './pages/Historia/xia'
    import { Din_Shang } from './pages/Historia/shang'
    import { Din_Zhou } from './pages/Historia/zhou'
    import { Din_Qin } from './pages/Historia/qin'
    import { Din_Han } from './pages/Historia/han'
  import {Arquitectura} from './pages/Historia/arquitectura'

import {Cultura} from './pages/Cultura/cultura'
  import {Tradiciones} from './pages/Cultura/tradiciones'
  import {Artesanias} from './pages/Cultura/artesanias'
  import {Festividades} from './pages/Cultura/festividades'
  import {Vestimenta} from './pages/Cultura/vestimenta'
  import {Creencias} from './pages/Cultura/creencias'

import {Contribuciones} from './pages/Contribuciones/contribuciones'
  import {Detalle} from './pages/Contribuciones/detalle-contribuciones'
  import {Brujula} from './pages/Contribuciones/brujula'
  import {Polvora} from './pages/Contribuciones/polvora'
  import {Papel} from './pages/Contribuciones/papel'
  import {Imprenta} from './pages/Contribuciones/imprenta'
  import {Acupuntura} from './pages/Contribuciones/acupuntura'

import {Minijuegos} from './pages/minijuegos'
  import {Memo_card} from './pages/memoCard'







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
        <Route path='/dinastias' element ={<Dinastias/>} />
          <Route path='/xia' element ={<Din_Xia/>} />
          <Route path='/shang' element ={<Din_Shang/>} />
          <Route path='/zhou' element ={<Din_Zhou/>} />
          <Route path='/qin' element ={<Din_Qin/>} />
          <Route path='/han' element ={<Din_Han/>} />

        <Route path='/arquitectura' element ={<Arquitectura/>} />

      <Route path='/cultura' element ={<Cultura/>} />
        <Route path='/tradiciones' element ={<Tradiciones/>} />
        <Route path='/artesanias' element ={<Artesanias/>} />
        <Route path='/festividades' element ={<Festividades/>} />
        <Route path='/vestimenta' element ={<Vestimenta/>} />
        <Route path='/creencias' element ={<Creencias/>} />

      <Route path='/contribuciones' element ={<Contribuciones/>} />
        <Route path='/ver-contribuciones' element ={<Detalle/>} />
        <Route path='/brujula' element ={<Brujula/>} />
        <Route path='/polvora' element ={<Polvora/>} />
        <Route path='/papel' element ={<Papel/>} />
        <Route path='/imprenta' element ={<Imprenta/>} />
        <Route path='/acupuntura' element ={<Acupuntura/>} />
        

      <Route path='/minijuegos' element ={<Minijuegos/>} />
        <Route path='/memoCard' element ={<Memo_card/>} />


    </Routes>

  </BrowserRouter>
  )
}

export default App