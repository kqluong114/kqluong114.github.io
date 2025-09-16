import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/HomePage.jsx';
import NotFound from './pages/NotFoundPage.jsx';
import Projects from './pages/ProjectsPage.jsx';
import "./index.css"


let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, 
        element: <Home /> 
      },
      {
        path: "projects/:projectType",
        element: <Projects />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='text-blue-800'>HELLO</div>
    <RouterProvider router={router}/>
  </StrictMode>,
)
