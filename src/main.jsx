import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root'
import Home from './Components/Header/Home/Home'
import Jobs from './Components/Header/Jobs/Jobs'
import AppliedJobs from './Components/Header/AppliedJobs/AppliedJobs'
import Statistics from './Components/Header/Statistics/Statistics'
import Blogs from './Components/Header/Blogs/Blogs'
import ErrorElement from './Components/Main/ErrorPage/ErrorElement'
import SpecificJobDetails from './Components/Main/SpecificJobDetails/SpecificJobDetails'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      // errorElement: <ErrorElement/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/jobs",
          element: <Jobs/>
        },
        {
          path: "/applied",
          element: <AppliedJobs/>,
          loader: ()=> fetch("/jobs.json")
        },
        {
          path: "/statistics",
          element: <Statistics/>
        },
        {
          path: "/blogs",
          element: <Blogs/>
        },
        {
          path: "/jobsDetails/:id",
          element: <SpecificJobDetails/>,
          loader: ()=> fetch("../jobs.json")
        },
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
