
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pagese/Home'

import RootLayout from './Components/RootLayout'
import About from './Components/About/About'




function App() {
  
  const myRoute = createBrowserRouter(createRoutesFromElements(

    <Route element={<RootLayout />} >
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/> } />
      

    </Route>
  ))

  return (
   <> 
      <RouterProvider router={myRoute} />
   </>
  )
}

export default App
