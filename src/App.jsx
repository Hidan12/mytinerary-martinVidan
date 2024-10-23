import {StandarLayouts} from './layouts/StandarLayouts.jsx'
import { Cities } from './pages/Cities.jsx'
import { Home } from './pages/Home.jsx'
import { Detail } from './pages/Detail.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    element: <StandarLayouts></StandarLayouts>,
    children:[
      {path:"/", element:<Home/> },
      {path:"/home", element:<Home/> },
      {path:"/cities", element:<Cities/> },
      {path: "detail", element:<Detail/>},
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
