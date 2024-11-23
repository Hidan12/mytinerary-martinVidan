import {StandarLayouts} from './layouts/StandarLayouts.jsx'
import { Cities } from './pages/Cities.jsx'
import { Home } from './pages/Home.jsx'
import { Detail } from './pages/Detail.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateUser } from './pages/CreateUser.jsx'
import { useDispatch } from 'react-redux'
import { verifyToken } from './store/actions/signIn.js'
import { SignRoute } from './components/SignRoute/SignRoute.jsx'
import { useEffect } from 'react'






const router = createBrowserRouter([
  {
    element: <StandarLayouts></StandarLayouts>,
    children:[
      {path:"/", element:<Home/> },
      {path:"/home", element:<Home/> },
      {path:"/cities", element:<Cities/> },
      {path: "/detail", element:<Detail/>},
      {path: "/createUser", element:<SignRoute><CreateUser/></SignRoute>},
      {path:"/*", element:<NotFound/> }
    ]
  }
])
function App() {
  const dispatch = useDispatch()
  let token = localStorage.getItem('userItinerary')
  
  useEffect(()=>{
    if (token != null) {
      dispatch(verifyToken(JSON.parse(token).token))
    }
  },[dispatch])

  return (
    <>
      <RouterProvider router={router} />
    </>    
  )
}

export default App
