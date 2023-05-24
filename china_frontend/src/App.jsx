import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Login_template } from './pages/Login_template'
import {Next} from './pages/Next'
import {Register_template} from './pages/register_page'
import {Page_init} from './pages/page_init'
import {Logout_template} from './pages/logout_template'
import {User_profile} from './pages/user_profile'



function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/login' element ={<Login_template/>} />
      <Route path='/logout' element ={<Logout_template/>} />
      <Route path='/next' element ={<Next/>} />
      <Route path='/register' element ={<Register_template/>} />
      <Route path='/inicio' element ={<Page_init/>} />
      <Route path='/profile' element ={<User_profile/>} />
    </Routes>

  </BrowserRouter>
  )
}

export default App