import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Header from '/src/pages/components/header/Header'
import Footer from '/src/pages/components/footer/Footer'
import Dashboard from '/src/pages/dashboard/Dashboard'
import NotFoundPage from '/src/pages/not-found/NotFoundPage'
import NutritionPage from './pages/nutrition/NutritionPage'
import FitnessPage from './pages/fitness/FitnessPage'
import UserPage from './pages/user/UserPage'

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { 
        index: true, // sets as default page
        element: <Dashboard /> 
      },

      { 
        path: '/nutrition',
        element: <NutritionPage /> 
      },

      { 
        path: '/fitness',
         element: <FitnessPage />
      },

      {
        path: '/user',
        element: <UserPage />
      }
    ]
  }
]);

export default function App() {

  return( 
    <>
      {/* <Header /> */}
      <RouterProvider router={router}/>
      {/* <Footer />  */}
    </>

  )
}