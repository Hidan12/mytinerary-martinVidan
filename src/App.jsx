import {StandarLayouts} from './layouts/StandarLayouts.jsx'
import { Citys } from './pages/Citys.jsx'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    element: <StandarLayouts></StandarLayouts>,
    children:[
      {path:"/", element:<Home/> },
      {path:"/home", element:<Home/> },
      {path:"/citys", element:<Citys/> },
      {path:"/*", element:<NotFound/> }
    ]
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>    
  )
}

export default App
